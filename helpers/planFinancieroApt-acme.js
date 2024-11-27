function (options = "proposal=this products=this.products") {
  try {
    const proposal = options.hash.proposal
    const products = options.hash.products
    const metadata = proposal.metadata || {};
				const { PlanDePago } = metadata;

			/* MONEDA */
			function formatCurrency(value) {
				const roundedValue = Math.round(value); // Redondear el valor
				return roundedValue.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
						minimumFractionDigits: 0,
				});
			}

			/* PORCENTAJES */
			function formatPercentage(valor) {
				const valorNumerico = parseFloat(valor);
				// Validar si el valor es un número válido
				if (isNaN(valorNumerico)) {
						return 'El valor ingresado no es un número válido.';
				}
				return (valorNumerico * 100).toFixed(1) + '%';
			} 

    // Valores predeterminados
    const valoresFijos = {
     separacion: 0,
     cesantias: 0,
     subsidio: 0,
     ahorros: 0,
     primas: 0,
     PlazoCredito: 0,
     TasaEA: 0
   };

    /*VARIABLES*/
    let total = proposal.total || 0;
    let {
      separacion = valoresFijos.separacion, 
      cesantias = valoresFijos.cesantias, 
      subsidio = valoresFijos.subsidio, 
      ahorros = valoresFijos.ahorros, 
      primas = valoresFijos.primas, 
      PlazoCredito = valoresFijos.PlazoCredito, 
      TasaEA = valoresFijos.TasaEA
    } = PlanDePago || {};

    let FechaEntrega = proposal.metadata && proposal.metadata.PlanDePago && proposal.metadata.PlanDePago.FechaEntrega !== undefined ? new Date(proposal.metadata.PlanDePago.FechaEntrega) : new Date();
    let hoy = new Date();
    const tasaRow = TasaEA ? `<tr><td>Tasa E.A:</td><td>${formatPercentage(TasaEA)}</td></tr>` : '';

    /*CALCULOS*/
    let abonosCuotaInicial = separacion + cesantias + subsidio + ahorros + primas
    let PabonosCuotaInicial = (abonosCuotaInicial / total) * 100

    let cuotaInicialCalculada;
    if (PabonosCuotaInicial > 30) {
        cuotaInicialCalculada = PabonosCuotaInicial / 100;
    } else {
        cuotaInicialCalculada = 0.3;
    }

    let valorCuotaInicial = total * cuotaInicialCalculada
    let Pcredito = (1 - cuotaInicialCalculada)   
    let valorCredito = total * (1 - cuotaInicialCalculada)
    
    let saldoCuotaInicial = valorCuotaInicial - abonosCuotaInicial

    let anosDiferencia = FechaEntrega.getFullYear() - hoy.getFullYear();
    let mesesDiferencia = FechaEntrega.getMonth() - hoy.getMonth();
    let plazoCuotaInicialMeses = (anosDiferencia * 12) + mesesDiferencia;    
    let cuotaMensual = plazoCuotaInicialMeses > 0 ? saldoCuotaInicial / plazoCuotaInicialMeses : saldoCuotaInicial;
    
    const tasaMensual = Math.pow(1 + TasaEA / 100, 1 / 12) - 1;
    const cuotaCredito = PlazoCredito > 0 
    ? (tasaMensual > 0 
        ? valorCredito * (tasaMensual * Math.pow(1 + tasaMensual, PlazoCredito)) / 
          (Math.pow(1 + tasaMensual, PlazoCredito) - 1) 
        : valorCredito / PlazoCredito)
    : valorCredito;
    
    let htmlsaldoCuotaInicial = "";
    if (saldoCuotaInicial > 0) {
        htmlsaldoCuotaInicial = `
            <tr><td>Plazo (Meses)</td><td>${plazoCuotaInicialMeses}</td></tr>
            <tr><th>Cuota mensual</th><th>${formatCurrency(cuotaMensual)}</th></tr>
        `;
    } 
    
    return `
<style>
	#planFinancieroApt th, #planFinancieroApt td {
		font-size:1.28rem;
  text-align:right;
		vertical-align:middle;
		border:1px solid #ccc;
		padding:10px 40px;
		width:50%;
	}
	#planFinancieroApt th {
		font-weight:700 !important;
		padding:10px 20px;
	}
	#planFinancieroApt tr th:last-child {
		text-align: left !important;
	}	
</style>

<div id="planFinancieroApt">
  <div class="row">
    <div class="column column-12">
      <h1>Detalle plan de pago</h1><br>
    </div>
    <div class="column column-6">
      <table class="table">
        <tbody>
          <tr><th>Cuota inicial (${formatPercentage(cuotaInicialCalculada)})</th><th>${formatCurrency(valorCuotaInicial)}</th></tr>
          <tr><td>Separación:</td><td>${formatCurrency(separacion)}</td></tr>
          <tr><td>Subsidio</td><td>${formatCurrency(subsidio)}</td></tr>
          <tr><td>Cesantías</td><td>${formatCurrency(cesantias)}</td></tr>
          <tr><td>Ahorros</td><td>${formatCurrency(ahorros)}</td></tr>
          <tr><td>Primas</td><td>${formatCurrency(primas)}</td></tr>
          <tr><td>TOTAL</td><td>${formatCurrency(abonosCuotaInicial)}</td></tr>
          <tr><th>Saldo cuota Inicial</th><th>${formatCurrency(saldoCuotaInicial)}</th></tr>
          ${htmlsaldoCuotaInicial}
        </tbody>
      </table>
    </div>
    <div class="column column-6">
      <table class="table">
        <tbody>
          <tr><th>Valor del crédito (${formatPercentage(Pcredito)})</th><th>${formatCurrency(valorCredito)}</th></tr>
          ${tasaRow}
          <tr><td>Plazo (Meses)</td><td>${PlazoCredito}</td></tr>
          <tr><th>Cuota de crédito Aprox.</th><th>${formatCurrency(cuotaCredito)}</th></tr>
        </tbody>
      </table>
    </div>    
  </div>
</div>`
  } catch (err) {
    return err
  }
}