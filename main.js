//variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset") 

let randomNumber = Math.round(Math.random() * 10); //colocar a criação do número radomico fora da função para ser criado e colocado em memória assim que a aplicação começar
let xAttempts = 1
//eventos
btnTry.addEventListener('click', handleTryClick) //adicionando um ouvidor de eventos, quando o evento for ouvido, será executado a função callback - quando o botão 'tentar' for clicado...
btnReset.addEventListener('click', handleResetClick) //adicionando mais um ouvidor de eventos, quando o botão tentar novamente for clicado, vai ser executada a função callback (uma função chamando outra função)
//funções callback
btnReset.addEventListener('keypress', function(e) { //para ativar a função handleResetClick ao apertar Enter
  if(e.key == 'Enter') {
    handleResetClick();
  }
})
function handleTryClick(event) {
  event.preventDefault() //event é um objeto com todos os dados do evento e com várias funcionalidades - função para que a página não seja recarregada ao clicar no button (que seria o padrão)
  const inputNumber = document.querySelector("#inputNumber") //pegando o elemento HTML através do seu id e colocando numa variável
  //console.log(inputNumber.value) //usar o value para mostrar o valor do input - não é innerText porque o input não tem texto interno
  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen() //adicionando a classe hide (que tem o display none) na div com classe screen1 - isso vai fazer com que o "miolo" da primeira janela fique "invisível" assim que o teste lógico acima for verdadeiro //removendo a classe hide da classe screen2, o "miolo" da segunda janela aparecerá...
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativas!` //pegando a tag html h2 dentro da div com classe screen2 e modificando o texto interno dela
  }
  inputNumber.value = "" //para limpar o espaço onde o número é digitado
  xAttempts++ 
}
function handleResetClick() {
  toggleScreen()//o miolo da tela inicial vai ficar visível //o miolo da segunda tela vai ficar invisível
  xAttempts = 1; //resetando o contador de tentativas
  randomNumber = Math.round(Math.random() * 10) //para modificar o número escolhido pelo computador
}
function toggleScreen() {
  screen1.classList.toggle("hide") 
  screen2.classList.toggle("hide")
}