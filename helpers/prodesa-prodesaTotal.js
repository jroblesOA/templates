function (options = "proposal=this products=this.products") {
 try {
 const proposal = options.hash.proposal;
 const products = options.hash.products;

 function formatCurrency(value) {
  const numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
  if (!isNaN(numericValue) && numericValue >= 1000) {
      return Math.round(numericValue).toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
      });
  }
  return value; // Si no es un número válido, devuelve el valor original
}

 function toPercentage(valor) {
     try {
       const valorNumerico = parseFloat(valor)
       if (isNaN(valorNumerico)) {
         throw new Error('El valor ingresado no es un número válido.')
       }
       const porcentaje = (valorNumerico).toFixed(1) + '%'
       return porcentaje
     } catch (error) {
       return error.message
     }
   }       

// Filtrar productos con metadata
const productsWithMetadata = products.filter(product => product.product.metadata);    

 // Generar una tabla con los datos de metadata
 function generateMetadataProducto(metadata) {
     const rows = Object.entries(metadata).map(([key, value]) => {
         return `
         <tr>
             <th style="padding: 10px; border: 1px solid gray;"><b>${key}</b></th>
             <td style="padding: 10px; border: 1px solid gray;">${value}</td>
         </tr>
         `;
     });   
     return `
     <div class="metadataTable">
         <h2>Detalle Metadata Producto</h2>
         <table class="tablaMetadata" style="border-collapse: collapse; margin: 20px auto; width: 80%;">
             <thead>
                 <tr>
                     <th style="padding: 10px; border: 1px solid gray;"><b>Campo</b></th>
                     <td style="padding: 10px; border: 1px solid gray;">Valor</th>
                 </tr>
             </thead>
             <tbody>
                 ${rows.join('')}
             </tbody>
         </table>
     </div>
     `;
 }     

 // Generar HTML para "Detalle plan de pago"
 const generateTablaPlan = (metadata) => {
 const saldoCuotaInicial = 
  Number(metadata.cuotaInicialBase || 0) -
  (
    Number(metadata.valorSeparacion || 0) +
    Number(metadata.subsidio || 0) +
    Number(metadata.recursosPropios || 0) +
    Number(metadata.valorBono || 0) +
    Number(metadata.valorCesantias || 0) +
    Number(metadata.totalPrima || 0)
  );

 const porcentajeSaldoCuotaInicial = ( saldoCuotaInicial / metadata.valorInmueble) * 100
 const calcularTrimestre = (fecha) => {
  if (!fecha) return "Fecha no disponible";

  const date = new Date(fecha + "T00:00:00Z"); // Asegura que se mantenga en UTC
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1; // getUTCMonth() devuelve 0-11

  let trimestre;
  if (month >= 1 && month <= 3) trimestre = "Primer Trimestre";
  else if (month >= 4 && month <= 6) trimestre = "Segundo Trimestre";
  else if (month >= 7 && month <= 9) trimestre = "Tercer Trimestre";
  else trimestre = "Cuarto Trimestre";

  return `${trimestre} de ${year}`;
};

 return `
 <div class="row" style="margin-top:20px; margin-bottom:20px;">
    <div class="column column-6 pr-3">
       <div class="bgGris">
          <h2>Detalle plan de pago</h2>
          <table class="tablaPlan">
             <tbody>
             ${metadata.cuotaInicialBase ? `<tr><th>Cuota inicial (${toPercentage(metadata.porcentajeCuotaInicial)})</th><td>${formatCurrency(metadata.cuotaInicialBase)} {{currency.code}}</td></tr>` : ""}
             ${metadata.valorSeparacion ? `<tr><th>Separación</th><td>${formatCurrency(metadata.valorSeparacion)} {{currency.code}}</td></tr>` : ""}
             ${metadata.subsidio ? `<tr><th>Subsidio</th><td>${formatCurrency(metadata.subsidio)} {{currency.code}}</td></tr>` : ""}
             ${metadata.recursosPropios ? `<tr><th>Recursos Propios</th><td>${formatCurrency(metadata.recursosPropios)} {{currency.code}}</td></tr>` : ""}
             ${metadata.valorBono ? `<tr><th>Bono</th><td>${formatCurrency(metadata.valorBono)} {{currency.code}}</td></tr>` : ""}             
             ${metadata.valorCesantias ? `<tr><th>Cesantías</th><td>${formatCurrency(metadata.valorCesantias)} {{currency.code}}</td></tr>` : ""}
             ${metadata.totalPrima ? `<tr><th>Primas</th><td>${formatCurrency(metadata.totalPrima)} {{currency.code}}</td></tr>` : ""}         
             </tbody>
             <tbody>
             <tr><th>Saldo Cuota Inicial (${toPercentage(porcentajeSaldoCuotaInicial)})</th><td><b>${formatCurrency(saldoCuotaInicial)} {{currency.code}}</b></td></tr>               
             </tbody>
          </table>
       </div>
    </div>
    <div class="column column-6 pl-3">
       <div class="bgGris">
          <h2>Información del crédito</h2>
          <table class="tablaPlan">
             <tbody>
             ${metadata.credito ? `<tr><th>Valor del crédito (${toPercentage(100 - metadata.porcentajeCuotaInicial)})</th><td>${formatCurrency(metadata.credito)} {{currency.code}}</td></tr>` : ""}
             ${metadata.plazoAnios ? `<tr><th>Crédito diferido a</th><td>${metadata.plazoAnios} años</td></tr>` : ""}
             </tbody>
             <tbody>                    
              <tr><th>Modalidad de Credito</th><td>${metadata.tipoCredito || "Crédito Hipotecario"}</td></tr>         
             </tbody>
             <tbody>                    
             <tr><th>{{currency.code}}</th><td></td></tr>           
             ${metadata.cuotaMensualCreditoPesos ? `<tr><th>Valor mensual Crédito {{currency.code}}</th><td>${formatCurrency(metadata.cuotaMensualCreditoPesos)} {{currency.code}}</td></tr>` : ""}
             ${metadata.ingresosRequeridosPesos ? `<tr><th>Ingresos requeridos {{currency.code}}</th><td>${formatCurrency(metadata.ingresosRequeridosPesos)} {{currency.code}}</td></tr>` : ""}
             </tbody>
             <tbody> 
             <tr><th>UVR</th><td></td></tr> 
             ${metadata.cuotaMensualCreditoUVR ? `<tr><th>Valor mensual Crédito UVR</th><td>${formatCurrency(metadata.cuotaMensualCreditoUVR)} {{currency.code}}</td></tr>` : ""}
             ${metadata.ingresosRequeridosUVR ? `<tr><th>Ingresos requeridos UVR</th><td>${formatCurrency(metadata.ingresosRequeridosUVR)} {{currency.code}}</td></tr>` : ""}                
             </tbody>
          </table>
       </div>        
    </div>
    <div class="column column-12 mt-4">
     <h6 style="font-size: 0.8rem;">*Fecha estimada de entrega: ${calcularTrimestre(metadata.fecha_entrega)}<br>
     *Costo aproximado de escrituración: ${formatCurrency(metadata.valorEscritura)}<br>
     ${metadata.subsidio ? `*La mensualidad asume el otorgamiento de un subsidio por valor de ${formatCurrency(metadata.subsidio)}. En caso que el subsidio no sea otorgado, el cliente deberá pagar ese valor contra escrituración.<br>` : ""}
     *Los cálculos presentados utilizan una valor por millón de referencia del ${metadata.tasaAnualPesos} en COP y ${metadata.tasaAnualUVR} en UVR. La cuota final del crédito dependerá de las condiciones establecidas por la entidad financiera.</h6>    
    </div>
 </div>
 `;
 };   

 // Generar HTML para "Detalle cuotas"
 const generateTablaCuotas = (metadata) => {
   const cuotaMensualInicial = Number(metadata.cuotaMensualInicial) || 0;
   const numCuotasInicial = (Number(metadata.numCuotasInicial)-1) || 12;
   const valorSeparacion = Number(metadata.valorSeparacion) || 0;
   const valorCesantias = Number(metadata.valorCesantias) || 0;
   const recursosPropios = Number(metadata.recursosPropios) || 0;
   const valorPrima = Number(metadata.valorPrima) || 0;    
   const numeroPrimas = Number(metadata.numeroPrimas) || 0;

   const valorBono = Number(metadata.valorBono) || 0;
   const subsidio = Number(metadata.subsidio) || 0;   
   
   const rows = [];
   const monthsAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

   // Primera cuota: Separación
   const date = new Date();
   const day = date.getDate();
   const month = monthsAbbreviations[date.getMonth()];
   const year = date.getFullYear();
   const formattedMonth = `${day}-${month}-${year}`;
   
   rows.push({
       cuota: "Separación",
       mes: formattedMonth,
       valor: formatCurrency(valorSeparacion)
   });

   // Cuotas restantes
   for (let i = 1; i <= numCuotasInicial; i++) {
       let cuotaValor = cuotaMensualInicial;
       const cuotaDate = new Date();
       cuotaDate.setMonth(cuotaDate.getMonth() + i);
       const cuotaFormattedMonth = `${cuotaDate.getDate()}-${monthsAbbreviations[cuotaDate.getMonth()]}-${cuotaDate.getFullYear()}`;

       // Sumar cesantías en la penúltima cuota
       if (i === numCuotasInicial - 1) {
           cuotaValor += valorCesantias;
       }

       // Sumar recursos en la última cuota
       if (i === numCuotasInicial) {
           cuotaValor += recursosPropios;
       }

       // Sumar primas en las cuotas de junio y diciembre
       if ((cuotaDate.getMonth() === 5 || cuotaDate.getMonth() === 11) && numeroPrimas > 0) {
           cuotaValor += valorPrima;
       }

       rows.push({
           cuota: i,
           mes: cuotaFormattedMonth,
           valor: formatCurrency(cuotaValor)
       });
   }

   const midPoint = Math.ceil(rows.length / 2);
   const rowsFirstHalf = rows.slice(0, midPoint);
   const rowsSecondHalf = rows.slice(midPoint);

   const generateTable = (rows) => {
       return `
           <table class="tablaCuotas">
               <thead>
                   <tr>
                       <th>Cuota</th>
                       <th>Mes</th>
                       <th>Valor</th>
                   </tr>
               </thead>
               <tbody>
                   ${rows.map(row => `
                       <tr>
                           <th>${row.cuota}</th>
                           <td>${row.mes}</td>
                           <td>${row.valor}</td>
                       </tr>
                   `).join('')}
               </tbody>
           </table>
       `;
   };

   const cuotasExtra = (valorBono > 0 || subsidio > 0) ? `
   <!-- Cuotas Extra -->
   <div id="table-container" style="display: flex; gap: 20px; justify-content: space-between;">
       <div style="flex: 1;"></div>
       <div style="flex: 1;">
           <table class="tablaCuotas">
               <tbody>
                   ${valorBono > 0 ? `
                       <tr>
                           <td></td>
                           <th>Bono</th>
                           <td>${formatCurrency(valorBono)}</td>
                       </tr>
                   ` : ''}
                   ${subsidio > 0 ? `
                       <tr>
                           <td></td>
                           <th>Subsidio</th>
                           <td>${formatCurrency(subsidio)}</td>
                       </tr>
                   ` : ''}
               </tbody>
           </table>
       </div>
   </div>
` : '';   

   return `
       <div id="collapsible" style="margin-top: 30px; margin-bottom: 30px;">
           <button class="collapsible">Desglose de pagos de la cuota inicial</button>
           <div class="content" style="max-height: 5000px;">
               <br>
               <h3>Plazo de pago: ${numCuotasInicial} meses</h3>
               <div id="table-container" style="display: flex; gap: 20px; justify-content: space-between;">
                   <div style="flex: 1;">
                       ${generateTable(rowsFirstHalf)}
                   </div>
                   <div style="flex: 1;">
                       ${generateTable(rowsSecondHalf)}
                   </div>
               </div>
               ${cuotasExtra}                      
           </div>
       </div>
       <br>
   `;
};
 
 // Generar HTML completo del modulo de TOTALES
 function generateTotal(products) {
     // Filtrar los productos con metadata una sola vez
     const productsWithMetadata = products.filter(product => product.product.metadata);  
     return productsWithMetadata
     .map((product) => {
         const metadata = product.product.metadata;            
         if (!metadata.valorInmueble) {
             return `<p>No se han establecido condiciones de pago para este producto.</p><br><br>`;
         }            
         return `
         <div id="stradaTotal">
             ${generateTablaPlan(metadata)}       
             <!-- -->
             ${generateTablaCuotas(metadata)}   
         </div>
         <!--<div><br><br>${generateMetadataProducto(metadata)}</div><br><br>-->
         `;
     }).join('');
 }    

 return `
 <style>
    #stradaTotal {
    color: #4F4F4F;
    }  
    #stradaTotal h2 {
    font-size:1.5rem;
    line-height:1.2;   
    }  
    #stradaTotal p {
    font-size:1.2rem;
    line-height:1.2;    
    }
    #stradaTotal .bgGris {
    background:#EFEFEF;
    padding:40px;
    /*height: 100%;*/
    }
    /* Tablas ============= */  
    #stradaTotal .tablaPlan, #stradaTotal .tablaCuotas {
    border-collapse: collapse;
    margin: 15px auto 10px;
    width: 100%;
    }
    #stradaTotal .tablaPlan th, #stradaTotal .tablaCuotas th, #stradaTotal .tablaPlan td, #stradaTotal .tablaCuotas td {
    font-size:1rem;
    line-height:1;
    padding:12px 15px;
    border:none;
    }
    #stradaTotal .tablaPlan th, #stradaTotal .tablaPlan td {
    border-bottom: 1px solid rgb(158 167 173 / 30%);
    width:55%;
    }	
    #stradaTotal .tablaPlan td {
    text-align:right;
    }
    #stradaTotal .tablaCuotas th, #stradaTotal .tablaCuotas td {
    text-align:center;
    width:30%;
    }	
    #stradaTotal .tablaCuotas th, #stradaTotal .tablaPlan th {
    font-weight:700 !important;
    }		
    #stradaTotal tbody {
         border-top: 3px solid #fff; 
     }       
    /* Desplegable ============= */
    #collapsible button.collapsible:active, #collapsible button.collapsible:focus {
    background-color: #fff;
    border: 1px solid #B2B2B2 !important;
    box-shadow: none !important;
    }
    #collapsible .collapsible:hover {
    background-color: #fff;
    border: 1px solid #B2B2B2 !important;
    box-shadow: none !important;
    }
    #collapsible .collapsible {
    background-color: #fff;
    cursor: pointer;
    width: 100%;
    border: 1px solid #B2B2B2;
    text-align: left;
    outline: none;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2;
    box-shadow: none !important;
    padding-left: 60px;
    }
    #collapsible .active {
    background-color: #ffffff;
    box-shadow: none !important;
    border: 1px solid #B2B2B2 !important;
    }
    #collapsible .collapsible:after {
    content: "Clic aquí para ocultar -";
    font-size: 0.8rem;
    font-weight:300 !important;
    color: #ED7310;
    float: right;
    padding-right: 30px;
    margin-top: 15px;
    }
    #collapsible .active:after {
    content: "Clic aquí para desplegar +";
    color: #ED7310;
    }
    #collapsible .content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
    background-color: #ffffff;
    padding: 0px 20px;
    }  
 </style>
 ${generateTotal(productsWithMetadata)}
 <script>
    var coll = document.querySelectorAll("#collapsible .collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
 </script>
 `;
 } catch (err) {
 return `Error: ${err.message}`;
 }
}