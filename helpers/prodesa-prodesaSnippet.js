function (options = "proposal=this products=this.products") {
 try {
  const proposal = options.hash.proposal;
  const products = options.hash.products;

  const data = [
 {
   "proyecto": "strada",
   "inmueble": "TIPO 2B 77 M2",
   "nombre": "RIALTO",
   "plano": "PLANO_APTO_2B.jpg",
   "render": "RENDER_APTO_2B.jpg",
   "recorrido": "https://shape.com.co/360/PRODESA_Strada/"
 },
 {
   "proyecto": "strada",
   "inmueble": "TIPO 2A 70 M2",
   "nombre": "FONTANA",
   "plano": "PLANO_APTO_2A.jpg",
   "render": "RENDER_APTO_2A.jpg",
   "recorrido": "https://shape.com.co/360/PRODESA_Strada_Apto2A/"
 },
 {
   "proyecto": "strada",
   "inmueble": "TIPO 1 60 M2",
   "nombre": "NICOLA",
   "plano": "PLANO_APTO_1.jpg",
   "render": "RENDER_APTO_1.jpg",
   "recorrido": "https://shape.com.co/360/PRODESA_Strada_Apto1/"
 },
 {
   "proyecto": "strada",
   "inmueble": "TIPO 4 56 M2",
   "nombre": "FONTEGO",
   "plano": "PLANO_APTO_4.jpg",
   "render": "RENDER_APTO_4.jpg",
   "recorrido": "https://shape.com.co/360/PRODESA_Strada_Apto4/"
 },
 {
   "proyecto": "strada",
   "inmueble": "TIPO 3 42 M2",
   "nombre": "FÉNICE",
   "plano": "PLANO_APTO_3.jpg",
   "render": "RENDER_APTO_3.jpg",
   "recorrido": "https://shape.com.co/360/PRODESA_Strada_Apto3/"
 },
 {
   "proyecto": "cipres-de-la-florida",
   "inmueble": "TIPO 2 80M2",
   "nombre": null,
   "plano": "PLANO_TIPO78-88_ETP2.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cipres-de-la-florida",
   "inmueble": "TIPO TRADICIONAL ETPA1",
   "nombre": null,
   "plano": "PLANO_TIPO78-91_ETP1.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cipres-de-la-florida",
   "inmueble": "T2 80M2",
   "nombre": null,
   "plano": "PLANO_TIPOB1.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cipres-de-la-florida",
   "inmueble": "T2 80M2",
   "nombre": null,
   "plano": "PLANO_TIPOB2.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cipres-de-la-florida",
   "inmueble": "T8 95M2",
   "nombre": null,
   "plano": "PLANO_TIPOA.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cipres-de-la-florida",
   "inmueble": "T7 110M2",
   "nombre": null,
   "plano": "PLANO_APTOD.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cerezo",
   "inmueble": "TIPO 61.61M2",
   "nombre": null,
   "plano": "PLANO_TIPO61-61.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cerezo",
   "inmueble": "TIPO 67.91 M2",
   "nombre": null,
   "plano": "PLANO_TIPO67-91.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cerezo",
   "inmueble": "TIPO A1 70.05 M2",
   "nombre": null,
   "plano": "PLANO_TIPO74-46.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cerezo",
   "inmueble": "TIPO C1 75.77 M2",
   "nombre": null,
   "plano": "PLANO_TIPO80-04.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "cerezo",
   "inmueble": "TIPO D1 96 M2",
   "nombre": null,
   "plano": "PLANO_TIPO100-93.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "atrio-de-pance",
   "inmueble": "TIPO A 72.04M2",
   "nombre": null,
   "plano": "PLANO_TIPOA.jpg",
   "render": null,
   "recorrido": null
 },
 {
   "proyecto": "atrio-de-pance",
   "inmueble": "TIPO B 52.51M2",
   "nombre": null,
   "plano": "PLANO_TIPOB.jpg",
   "render": null,
   "recorrido": null
 }
]

  // Filtrar productos con metadata
  const productsWithMetadata = products.filter(product => product.product.metadata);

  // Comparar `inmueble` de metadata con `inmueble` de data
  const mergeData = productsWithMetadata.map(product => {
    const metadata = product.product.metadata;
    const matchingData = data.find(d => d.inmueble === metadata.inmueble);

    if (matchingData) {
      // Combinar `metadata` con el elemento correspondiente en `data`
      return {
        metadata,
        data: matchingData,
      };
    }
    return null; // Si no hay coincidencia, descartar
  }).filter(item => item !== null);

    // Generar el HTML dinámico
    const generateSnippet = (mergedData) => {
      return mergedData.map(({ metadata, data }) => {
        return `
     <div id="strada">  
       <br>
        <div style="padding:20px 15%">
        ${data.nombre ? `<h1>- ${data.nombre} -</h1>` : ""}
        <h2>¡Este es el apartamento que buscas!</h2>
        <br>
        <p>Una opción de lujo, donde además de disfrutar una vista espectacular desde el balcón, contarás con un espacio flexible para usar a tu gusto.</p>		
      </div>
      
      <div class="row align-items-center" style="margin-top:60px; margin-bottom:60px;">
        <div class="column column-8">
        <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/${data.proyecto || 'default'}/apt/${data.plano || 'default.jpg'}" alt="plano" style="">
        </div>
        <div class="column column-4">
          <div class="caja">
          <p class="valor">${metadata.area_construida || data.area_construida} m²</p>
            <p class="item">Área construida</p>
          </div>
          <div class="caja">
          <p class="valor">${metadata.area_privada || data.area_privada} m²</p>
            <p class="item">Área privada</p>
          </div>
          <div class="caja">
          <p class="valor">${metadata.area_balcon || "N/A"} m²</p>
            <p class="item">Área balcón</p>
          </div>			
        </div>		
      </div>
      
      <div class="row align-items-center" style="margin-top:60px; margin-bottom:60px;">
        <div class="column column-4">
          <div class="row">
            <div class="column-6 p-4">
              <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/icons/hab.png" alt="icon" style="display:block; margin:5px auto">
              <p class="item2">Habitaciones</p>
            </div>
            <div class="column-6 p-4">
              <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/icons/closet.png" alt="icon" style="display:block; margin:5px auto">
              <p class="item2">Walking closet en habitación principal</p>
            </div>	
            <div class="column-6 p-4">
              <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/icons/bano.png" alt="icon" style="display:block; margin:5px auto">
              <p class="item2">Baños</p>
            </div>
            <div class="column-6 p-4">
              <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/icons/cocina.png" alt="icon" style="display:block; margin:5px auto">
              <p class="item2">Cocina</p>
            </div>	
            <div class="column-6 p-4">
              <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/icons/sala.png" alt="icon" style="display:block; margin:5px auto">
              <p class="item2">Sala y comedor</p>
            </div>
            <div class="column-6 p-4">
              <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/icons/ropa.png" alt="icon" style="display:block; margin:5px auto">
              <p class="item2">Zona de ropa</p>
            </div>					
          </div>
        </div>	
        <div class="column column-8">
          <img src="https://s3.amazonaws.com/files.nodriza.io/prodesa/strada/apt/RENDER_APTO_1.jpg" alt="plano" style="">
        </div>
      </div>	
      
     ${(data.recorrido || metadata.recorrido) ? `
       <h2>
         Recorre el interior de tu mejor inversión <br>
         <b>en <span style="text-transform: capitalize;">${data.proyecto || "Proyecto"}</span></b>.
       </h2>
       <br>
       <iframe src="${data.recorrido || metadata.recorrido || '#'}" style="display:block; width:90%; height:600px; margin:20px auto;"></iframe>
       <br>
     ` : ''}
      <h6 class="py-2 px-5">Las imágenes publicadas, planos, renders y demás piezas publicitarias son simples representaciones gráficas de diseño, pueden variar en su percepción y construcción final, están sujetos a modificación y/o cambios sin previo aviso o consulta, los mismos no constituyen oferta por parte del promotor y/o constructor</h6>
      <br>
      </div> 
        `;
      }).join('');
    };

  return `
  <style>
  #strada {
    color: #4F4F4F;
  }  
  #strada h1 {
    font-size:7.5rem;
    line-height:1.2;
    text-align:center;
  }  
  #strada h2 {
   font-size: 2.5rem;
   font-weight: 400 !important;
   line-height: 1;
   text-align: center;
  }  
  #strada p {
    font-size:1.2rem;
    line-height:1.2;    
    text-align:center;
  }  
  #strada .caja {
    border-left:1px solid #ED7310;
    padding-left: 25px;
    margin-bottom:30px;
  }  
  #strada p.valor {
    font-size:3rem;
    line-height:1.2;  
    font-weight:700;
    text-align:left;
    color:#ED7310;
  }  
  #strada p.item {
    font-size:1.6rem;
    line-height:1.2;
    font-weight:700;
    text-align:left;
  }    
</style>
${generateSnippet(mergeData)}
  `;
} catch (err) {
  return `Error: ${err.message}`;
}
}