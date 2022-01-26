function calcular() {
  let adultos = document.getElementById("adultos").value,
    kids = document.getElementById("criancas").value,
    duracao = document.getElementById("horas").value,
    results = document.getElementById("results");

  let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2) * kids,
      qtdTotalCerveja = cervejaPP(duracao) * adultos,
      qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2) * kids;
  
    results.innerHTML =
    `
      <p>${qtdTotalCarne/1000} Kg de Carne</p>
      <p>${Math.ceil(qtdTotalCerveja/355)} latas de Cervejas</p>
      <p>${Math.ceil(qtdTotalBebidas/2000)} garrafas de Refrigerantes</p>
    `
  
  function carnePP(duracao) {
    if (duracao >= 6) {
      return 650;
    } else {
      return 400;
    }
  }
  function cervejaPP(duracao) {
    if (duracao >= 6) {
      return 2000;
    } else {
      return 1200;
    }
  }
  function bebidasPP(duracao) {
    if (duracao >= 6) {
      return 1500;
    } else {
      return 1000;
    }
  }

  
}
