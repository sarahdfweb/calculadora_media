function resultado() {
  let nome = document.getElementById('nome').value
  let nota1 = Number(document.getElementById('nota1').value)
  let nota2 = Number(document.getElementById('nota2').value)
  let nota3 = Number(document.getElementById('nota3').value)
let nota4 = Number(document.getElementById('nota4').value)
 let result = document.querySelector('#result')

  mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4

  if (mediaFinal < 7) { 
    resultadoFinal = "Reprovado"    
  }
   else{
    resultadoFinal = "Parabéns, Aprovado"
  }


  result.innerHTML = 
  `
  <p class="top">Na materia de ${nome},</p>
  <p class="color"> sua média foi <strong>${mediaFinal}</strong>.</p>
  <p class="color" id="bkg">${resultadoFinal}</p>
  `
  
}
