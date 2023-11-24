document.getElementById("form").addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)
    alert("Recebi o evento");
})

const btnEmail = document.getElementById("textInput")
//Focar no Elemento 
btnEmail.addEventListener('focus', (event) => {
    console.log("Focou no Elemento")
})
//Desfocar do elemento
btnEmail.addEventListener('blur', (event) => {
    console.log("Tirou foco do elemento")
})


document.addEventListener('scroll', (event) => {
    console.log(window.screenY)
    console.log("Scroller funcionando")
    console.log(event)
})

window.addEventListener("resize", (event) => {
console.log("Mudou o tamanho da janela")
})