function (options = "proposal=this products=this.products") {
  try {
    // Accedemos correctamente a los datos dentro de 'options'
    const proposal = options.hash.proposal;
    const products = options.hash.products;
    
    // Aseguramos que los productos están definidos y extraemos la metadata
    const metadata = products[0] ? products[0].product.metadata : {}; // Accede al primer producto

function generateHTML(metadata) {
  let html = '<div class="tabla">';
  let hasValidData = false;  // Variable para verificar si hay datos válidos
  const keysToExclude = ["initialPublicPrice", "initialPublicPriceCurrency"];   

  for (const [key, value] of Object.entries(metadata)) {
    if (!keysToExclude.includes(key) && value !== "" && value !== null) { // Solo agregar los que no son vacíos ni null
      hasValidData = true;  // Si hay al menos un valor válido, lo marcamos
      html += `
        <div class="cell">
          <h3>${key.replace(/-/g, " ")}</h3>
          <span class="separator"></span>
          <p>${value}</p>
        </div>
      `;
    }
  }

  html += '</div>';

  // Si no hay datos válidos, devolvemos un string vacío
  if (!hasValidData) {
    return '';  // Si no hay datos válidos, no mostramos nada
  }

  // Si hay datos válidos, devolvemos el HTML con el título
  return `
    <style>
      #snippet .tabla {
        margin: 30px auto 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
      }
      #snippet .cell {
        margin: 20px auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        width: 20%;
      }
      #snippet h3 {
        font-size: 2rem;
        font-weight: 700 !important;
        font-family: 'HelveticaNeueLTStd Cn' !important;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #snippet p {
        font-size: 1.5rem;
        font-weight: 300;
      }        
      #snippet .separator {
        display: block;
        width: 60px;
        height: 2px;
        background: #C71C2C;
        margin: 15px auto;
      }
    </style>    
    <div class="pt-5 pb-4">
      <h1 style="color:#232323; text-align:center;">ESPECIFICACIONES</h1><br>
      ${html}
    </div>
  `;
}


    return `
      ${generateHTML(metadata)}
    `;
  } catch (err) {
    return `Error: ${err.message}`; 
  }
}