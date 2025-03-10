function (options = "proposal=this products=this.products") {
 try {
   const proposal = options.hash.proposal;
   const products = options.hash.products;
   const proposalMetadata = proposal.metadata;

   function formatCurrency(value) {
     if (typeof value === 'string') {
       let cleanValue = value.replace(/[^0-9.,]/g, '');
   
       if (cleanValue.trim() === "") {
         return "-";
       }    
       value = parseFloat(cleanValue.replace(/,/g, '')); 
     }
   
     if (!isNaN(value) && value !== null && value !== undefined) {
       return value.toLocaleString('en-US', {
         style: 'currency',
         currency: 'USD',
         minimumFractionDigits: 0,
       });
     }     
     return "-";
   }

function formatDate(date) {
 let day = String(date.getDate()).padStart(2, '0');
 let month = String(date.getMonth() + 1).padStart(2, '0');
 let year = date.getFullYear();
 return `${year}-${month}-${day}`; // Formato de fecha con guion
}   

   const generateTotal = (proposalMetadata) => {       
     const years = [30, 20, 15, 10, 5];    
     const creditRows = years
         .filter(year => proposalMetadata[`ano${year}`] && 
             proposalMetadata[`ingresosRequeridos${year}`] && 
             proposalMetadata[`pesos${year}`] && 
             proposalMetadata[`uvr${year}`])
         .map(year => `
             <tr>
                 <td>${proposalMetadata[`ano${year}`] || "-"}</td>
                 <td>${formatCurrency(proposalMetadata[`uvr${year}`])}</td>
                 <td>${formatCurrency(proposalMetadata[`pesos${year}`])}</td>
                 <td>${formatCurrency(proposalMetadata[`ingresosRequeridos${year}`])}</td>
             </tr>
         `)
         .join("");
         
     let startDate = new Date(proposal.createdAt);
     let plazoPago = parseInt(proposalMetadata.plazoPagoCuotaInicial, 10) || 0;
 
     return `
   <div id="stradaTotal">
       <!-- Resumen -->
       <div class="row">
           <div class="column column-6">
               <table>
                   <tbody>
                       <tr>
                           <th>CUOTA INICIAL ${proposalMetadata.porcentajeCuotaInicial || "-"} %</th>
                           <td>${formatCurrency(proposalMetadata.cuotaInicial)}</td>
                       </tr>
                       <tr>
                           <th>SEPARACIÓN</th>
                           <td>${formatCurrency(proposalMetadata.separacion)}</td>
                       </tr>
                       <tr>
                           <th>CESANTIAS</th>
                           <td>${formatCurrency(proposalMetadata.cesantias)}</td>
                       </tr>
                       <tr>
                           <th>SALDO CUOTA INICIAL</th>
                           <td>${formatCurrency(proposalMetadata.saldoCuota)}</td>
                       </tr>					
                   </tbody>
               </table>
           </div>
           <div class="column column-6">
               <table>
                   <tbody>
                       <tr>
                           <th>OTROS AHORROS</th>
                           <td>${formatCurrency(proposalMetadata.otrosAhorros)}</td>
                       </tr>
                       <tr>
                           <th>AHORRO PROGRAMADO</th>
                           <td>${formatCurrency(proposalMetadata.valorAhorroprogramado)}</td>
                       </tr>
                       <tr>
                           <th>SUBSIDIO</th>
                           <td>${formatCurrency(proposalMetadata.subsidio)}</td>
                       </tr>
                   </tbody>
               </table>
           </div>		
       </div>

     <!-- Plan de Pago -->
   <div id="plandepagos" class="no-print" id="collapsible" style="margin-top:10px; margin-bottom:60px;">
    <button class="collapsible active">Conoce el plan de pago de tu apartamento</button>
    <div class="content" style="">
     <br>
     <table>
         <tbody>
             <tr>
                 <th>Cuota</th>
                 <th>Valor</th>
                 <th>Fecha</th>
                 <th>Concepto</th>
             </tr>
             <tr>
                 <td>No. 0</td>
                 <td>${formatCurrency(proposalMetadata.separacion)}</td>
                 <td>${formatDate(startDate)}</td> <!-- Usamos la función formatDate -->
                 <td>Separación</td>
             </tr>
             ${proposalMetadata.saldoCuota && plazoPago ? (() => {
                 let rows = "";
                 let lastPaymentDate = new Date(startDate);
                 for (let i = 0; i < plazoPago; i++) {
                     lastPaymentDate.setMonth(lastPaymentDate.getMonth() + 1);
                     let cuota = Math.round(proposalMetadata.saldoCuota / plazoPago);
                     rows += `
                     <tr>
                         <td>No. ${i + 1}</td>
                         <td>${formatCurrency(cuota)}</td>
                         <td>${formatDate(lastPaymentDate)}</td> <!-- Usamos la función formatDate -->
                         <td>Cuota</td>
                     </tr>`;
                 }
                 return rows;
             })() : ""}          
             ${proposalMetadata.credito ? (() => {
                 let creditPaymentDate = new Date(startDate);
                 creditPaymentDate.setMonth(creditPaymentDate.getMonth() + plazoPago + 1);
                 return `
                 <tr>
                     <td>No. ${plazoPago + 1}</td>
                     <td>${formatCurrency(proposalMetadata.credito)}</td>
                     <td>${formatDate(creditPaymentDate)}</td> <!-- Usamos la función formatDate -->
                     <td>Crédito</td>
                 </tr>`;
             })() : ""}        
             ${proposalMetadata.subsidio && proposalMetadata.subsidio !== "0" && proposalMetadata.subsidio !== 0 ? (() => {
                 let subsidyPaymentDate = new Date(startDate);
                 subsidyPaymentDate.setMonth(subsidyPaymentDate.getMonth() + plazoPago + 2);
                 return `
                 <tr>
                     <td></td>
                     <td>${formatCurrency(proposalMetadata.subsidio)}</td>
                     <td>${formatDate(subsidyPaymentDate)}</td> <!-- Usamos la función formatDate -->
                     <td>Subsidio</td>
                 </tr>`;
             })() : ""}
             ${proposalMetadata.cesantias && proposalMetadata.fechacesantias ? `
             <tr>
                 <td></td>
                 <td>${formatCurrency(proposalMetadata.cesantias)}</td>
                 <td>${proposalMetadata.fechacesantias}</td>
                 <td>Cesantías</td>
             </tr>` : ""}
             ${proposalMetadata.valorAhorroprogramado && proposalMetadata.fechaAhorroProg ? `
             <tr>
                 <td></td>
                 <td>${formatCurrency(proposalMetadata.valorAhorroprogramado)}</td>
                 <td>${proposalMetadata.fechaAhorroProg}</td>
                 <td>Ahorro Prog.</td>
             </tr>` : ""}   
             ${proposalMetadata.otrosAhorros && proposalMetadata.fechaOtrosAhorros ? `
             <tr>
                 <td></td>
                 <td>${formatCurrency(proposalMetadata.otrosAhorros)}</td>
                 <td>${proposalMetadata.fechaOtrosAhorros}</td>
                 <td>Otro Ahorros</td>
             </tr>` : ""}                                  
         </tbody>
     </table>
     <br>
    </div>
   </div>  
   <br>   

     <!-- Crédito -->
     <h2>Información crédito hipotecario cliente</h2>
     <br>
     ${creditRows.length > 0 ? `
     <table>
         <tbody>
             <tr>
                 <th>AÑO</th>
                 <th>UVR</th>
                 <th>PESOS</th>
                 <th>Ingresos Requeridos Mensuales Aprox.</th>
             </tr>
             ${creditRows}
         </tbody>
     </table>
     ` : `<p>No hay información disponible.</p>`}
     <br>	
 </div>
     `;
 };
   return `
<style>
   #stradaTotal table {
       border-collapse: collapse;
       margin: 10px auto 30px;
   }
   #stradaTotal th, #stradaTotal td {
       font-size: 1.1rem;
       line-height: 1;
       color: #58595B;
       padding: 20px;
       border: none;
       border-bottom: 1px solid #A5A5A5;
       width:25%;
   }	
   #stradaTotal th {
       font-weight:700;
   }	      
</style>

<style>
 #plandepagos button.collapsible:active, button.collapsible:focus {
 background-color: #eee  !important;
 border: none !important;
 box-shadow: none !important;
 border-bottom: 1px solid #58595B !important;
 }
 #plandepagos .collapsible:hover {
 background-color: #eee  !important;
 border: none !important;
 box-shadow: none !important;
 border-bottom: 1px solid #58595B !important;
 }
 #plandepagos .collapsible {
 background-color: #eee !important;
 color: #000000;
 cursor: pointer;
 padding: 10px 20px;
 width: 100%;
 border: none;
 border-radius: 20px;
 border-bottom: 1px solid #58595B;
 text-align: left;
 outline: none;
 font-size: 2rem;
 font-weight:700;
 box-shadow: none !important;
 }
 #plandepagos .active {
 background-color: #eee ;
 box-shadow: none !important;
 border-bottom: 1px solid #58595B !important;
 }
 #plandepagos .collapsible:after {
 content: "Clic aquí para ocultar -";
 font-size: 1rem;
 font-weight:300 !important;
 color: #58595B;
 float: right;
 padding-right: 20px;
 margin-top: 15px;
 }
 #plandepagos .active:after {
 content: "Clic aquí para desplegar +";
 }
 #plandepagos .content {
 padding: 0px;
 max-height: 0;
 overflow: hidden;
 transition: max-height 0.2s ease-out;
 background-color: #fff;
 }
</style>   

${generateTotal(proposalMetadata)}

<script>
   var coll = document.querySelectorAll("#plandepagos .collapsible");
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