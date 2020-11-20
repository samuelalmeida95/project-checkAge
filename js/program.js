function verificar() {
  let anoNasc = document.querySelector("input#ano")
  let sex = document.getElementsByName("rad-sex")
  let res = document.querySelector("div#res")

  let data = new Date()
  let atual = data.getFullYear()

  let calculaIdade = atual - anoNasc.value
  let genero = ""

  let img = document.createElement("img")
  img.setAttribute("id", "foto")

  if (anoNasc.value.length == 0 || anoNasc.value > atual) {
    alert(" entrada inválida")
  } else {
    if (sex[0].checked) {
      genero = "Homem"

      if (calculaIdade >= 0 && calculaIdade < 12) {
        img.src = "../images/criancam.png"
      } else if (calculaIdade < 21) {
        img.src = "../images/jovemm.png"
      } else if (calculaIdade < 50) {
        img.src = "../images/adultom.png"
      } else {
        img.src = "../images/velhom.png"
      }
    } else {
      genero = "Mulher"

      if (calculaIdade >= 0 && calculaIdade < 12) {
        img.src = "../images/criancaf.png"
      } else if (calculaIdade < 21) {
        img.src = "../images/jovemf.png"
      } else if (calculaIdade < 50) {
        img.src = "../images/adultaf.png"
      } else {
        img.src = "../images/velhaf.png"
      }
    }
    res.innerHTML = `Detectamos ${genero} com idade de ${calculaIdade} anos, nasceu em ${anoNasc.value}`
    res.appendChild(img)
  }
}
