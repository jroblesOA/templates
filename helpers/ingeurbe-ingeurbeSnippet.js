function (options = "proposal=this products=this.products") {
	try {
	 const proposal = options.hash.proposal;
	 const products = options.hash.products;
	 const proposalMetadata = proposal.metadata;
   
	 const data = [
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 1",
    "AreaTotal": "37m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-1.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_37mt2/tour.html"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 1A",
    "AreaTotal": "37m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-1a.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 2",
    "AreaTotal": "69m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-2.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_69mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 2B",
    "AreaTotal": "76m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-2b.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 4T",
    "AreaTotal": "64m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-4t.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 3",
    "AreaTotal": "85m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-3.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_86mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 3A",
    "AreaTotal": "88m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-3a.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_86mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 3C",
    "AreaTotal": "96m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-3c.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 3E",
    "AreaTotal": "84m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-3e.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_86mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 4",
    "AreaTotal": "97m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-4.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_96mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 4A",
    "AreaTotal": "101m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-4a.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_96mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 5",
    "AreaTotal": "130m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-5.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_131mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 5A",
    "AreaTotal": "134m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-5a.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_131mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 5B",
    "AreaTotal": "134m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-5b.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/cortteza/apto_131mt2/tour.html#new_tab"
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 5T",
    "AreaTotal": "121m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/tipo-5t.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO H",
    "AreaTotal": "83m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/tipo-h.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/piazza/apto_03_h/tour.html#new_tab"
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO G",
    "AreaTotal": "66m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/tipo-g.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/piazza/apto_01_g/tour.html#new_tab"
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO F",
    "AreaTotal": "52m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/tipo-f.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/piazza/apto_06_f/tour.html#new_tab"
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO B",
    "AreaTotal": "47m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/tipo-b.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/piazza/apto_05_b/tour.html#new_tab"
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO C",
    "AreaTotal": "48m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/tipo-c.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/piazza/apto_02_c/tour.html#new_tab"
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO D",
    "AreaTotal": "51m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/tipo-d.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/piazza/apto_04_d/tour.html#new_tab"
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO B",
    "AreaTotal": "35m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-b.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/treze/aptob/tour.html#new_tab"
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO B1",
    "AreaTotal": "36m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-b1.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO C PMR",
    "AreaTotal": "35m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-c-pmr.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO C",
    "AreaTotal": "35m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-c.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO A",
    "AreaTotal": "34m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-a.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/treze/aptoa/tour.html#new_tab"
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO A1",
    "AreaTotal": "34m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-a1.jpg",
    "Recorrido": "https://chroma-studio.net/360/ingeurbe/treze/aptoa/tour.html#new_tab"
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO D",
    "AreaTotal": "26m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-d.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "treze",
    "Color": "#0D181C",
    "Tipo": "TIPO D1",
    "AreaTotal": "28m²",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/treze/apt/tipo-d1.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 12T",
    "AreaTotal": "92m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_12T.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 12A",
    "AreaTotal": "90m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_12A.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 12",
    "AreaTotal": "90m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_12.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 11T",
    "AreaTotal": "60m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_11T.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 11A",
    "AreaTotal": "53m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_11A.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 11",
    "AreaTotal": "53m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_11.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 10T",
    "AreaTotal": "80m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_10T.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 10",
    "AreaTotal": "70m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_10.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 9A",
    "AreaTotal": "38m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_9A.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 8T",
    "AreaTotal": "88m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_8T.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 8",
    "AreaTotal": "86m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_8.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 7T",
    "AreaTotal": "117m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_7T.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 7A",
    "AreaTotal": "119m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_7A.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 7",
    "AreaTotal": "120m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_7.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "cortteza",
    "Color": "#31313E",
    "Tipo": "TIPO 9",
    "AreaTotal": null,
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/cortteza/apt/TIPO_9.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO K",
    "AreaTotal": "73m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOK.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO IP",
    "AreaTotal": "81m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOIP.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO I ",
    "AreaTotal": "81m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOI.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO HP",
    "AreaTotal": "83m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOHP.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO H",
    "AreaTotal": "83m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOH.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO GP",
    "AreaTotal": "66m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOGP.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO G",
    "AreaTotal": "66m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOG.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO D2",
    "AreaTotal": "50m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOD2.jpg",
    "Recorrido": null
  },
  {
    "Proyecto": "piazza",
    "Color": "#0D2F23",
    "Tipo": "TIPO A",
    "AreaTotal": "49m2",
    "Plano": "https://s3.amazonaws.com/files.nodriza.io/ingeurbe/piazza/apt/TIPOA.jpg",
    "Recorrido": null
  }
]
	 
	  // Aplanar el array `data`
	  const flattenedData = data.flat();
  
	  // Filtrar productos con metadata
	  const productsWithMetadata = products.filter(product => product.product.metadata);

	  // Comparar `proyecto` y `tipo` con los datos de referencia
	  let matchingData
	  const mergeData = productsWithMetadata.map(product => {
		const productMetadata = product.product.metadata;
		matchingData = flattenedData.find(
		  d => d.Proyecto === productMetadata.layout && d.Tipo === productMetadata.tipo
		);
		if (matchingData) {
		  // Combinar metadata con el elemento correspondiente de data
		  return {
			metadata: productMetadata,
			data: matchingData,
			proposalMetadata: proposalMetadata
		  };
		}
		return null; // Si no hay coincidencia, descartar
	  }).filter(item => item !== null);
  
	  // Generar el HTML dinámico
	  const generateSnippet = (mergedData) => {
		return mergedData.map(({ metadata, data, proposalMetadata }) => {
		  return `
  <div id="ingeurbeSnippet">
	 <h1 id="apartamento" style="background:${data.Color}; background: radial-gradient(circle, ${data.Color}cc, ${data.Color});">Apartamento ${proposalMetadata.torre}-${proposalMetadata.apartamento}</h1>
	 <img src="https://s3.amazonaws.com/files.nodriza.io/ingeurbe/${metadata.layout}/apt/aptoImg.jpg" alt="imgApto ${metadata.layout}" class="img-cover" style="margin-top: 0px; margin-bottom: 0px;">	
	 <div class="row align-items-center justify-content-center" style="margin-top:60px; margin-bottom:60px;">
		<div class="column column-4">
		   <div class="caja">
			  <p class="item"><b>Área TOTAL</b><br>construida:</p>
			  <p class="valor">${proposalMetadata.areaConstruidaAprox} m2</p>
		   </div>
		</div>
		<div class="column column-4">
		   <div class="caja">
			  <p class="item"><b>Área</b><br>privada:</p>
			  <p class="valor">${proposalMetadata.areaPrivadaAprox} m2</p>
		   </div>
		</div>
		<!--<div class="column column-4">
		   <div class="caja">
			  <p class="item"><b>Balcón</b></p>
			  <p class="valor">XX m2</p>
		   </div>
		</div>-->
	 </div>
	 
	 <h1 style="background:${data.Color}; background: radial-gradient(circle, ${data.Color}cc, ${data.Color});">Planos ${proposalMetadata.torre}-${proposalMetadata.apartamento}</h1>
	 <br>
	 <img src="${data.Plano}" alt="plano ${metadata.layout}" class="img-cover" style="margin-top: 0px; margin-bottom: 20px;">	
	 <h6 style="font-size:0.8rem">Las imágenes son ilustrativas y corresponden a una interpretación del artista que no comprometen al promotor. Los detalles, color y especificaciones de materiales estan sujetos a modificaciones y ajustes durante el proceso de construcción.</h6>
	 <br>
	 
	 ${data.Recorrido 
	 ? `<div id="recorrido">
    <h1 style="background:${data.Color}; background: radial-gradient(circle, ${data.Color}cc, ${data.Color});">Recorrido 360°</h1>
	   <iframe src="${data.Recorrido}" class="img-cover" style="height:600px; margin-top:0px; margin-bottom:60px;"></iframe>
  </div>
  <div class="text-right my-2"><a href="#indice" class="btn-volver">Volver al índice</a></div>`
	 : `<br>`}
  </div>
		   `;
		 }).join('');
	   };
   
	 return `
  <style>
	 #ingeurbeSnippet h1 {
    font-size:2.5rem;
    line-height:1.2;
    text-align:center;
    color:#fff;
    padding:40px;
    margin-top:30px;
    margin-bottom:30px;   
    margin-left: -60px;
    max-width: inherit;
    width: calc(100% + 120px);
	 }  
	 #ingeurbeSnippet .caja {
	 border-left:1px solid #000;
	 padding-left: 25px;
	 margin-bottom:30px;
	 }  
	 #ingeurbeSnippet p.item {
	 font-size:2rem;
	 line-height:1;
	 font-weight:300;
	 text-align:left;
	 }     
	 #ingeurbeSnippet p.valor {
	 font-size:3.4rem;
	 line-height:1.2;  
	 font-weight:300;
	 text-align:left;
	 }  
  </style>
  ${generateSnippet(mergeData)}
	 `;
   } catch (err) {
	 return `Error: ${err.message}`;
   }
   }