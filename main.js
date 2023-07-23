const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const btnOpenCookie = document.querySelector("#open-cookie")
const btnOpenAnotheCookie = document.querySelector("#open-another-cookie")

const phasesDisplay = document.querySelector(".screen2 p")

const phases = [
  "Que bom que você existe. O universo estaria incompleto sem você!",
  "O segredo do sucesso é a constância do propósito.",
  "Você é do tamanho do seu sonho.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Não posso te ajudar. Sou apenas uma frase no biscoito."
]

btnOpenCookie.addEventListener('click', handleOpenCookie)
btnOpenAnotheCookie.addEventListener('click', handleOpenAnotherCookie)

function handleOpenCookie() {
  toogleScreen()
  let randomNumber = Math.floor(Math.random() * 6)

  phasesDisplay.innerHTML = phases[randomNumber]
}

function handleOpenAnotherCookie() {
  toogleScreen()
}

function toogleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}