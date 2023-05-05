const form = document.getElementById("novoItem")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    
    console.log(evento.target.elements['nome'].value)
    console.log(evento.target.elements['quantidade'].value)
})

//arrow fuction usar mais vezes () => {

//}
//colocando um atributo com algum personalizado nas tag html podemos buscar la usando o querySelectorAll e o nome desse atributo que foi colocado no html entre colchetes ficaria assim: document.querySelectorAll("[nome-do-atributo-do-html]")
//ou podemos usar o elementos.getAttribute("[data-cor]") / como fica no html: <li data-cor="laranja" data-tipo="tinta-exterior" onclick="mudaCores(this)" class="item">Tinta laranja</li>
//parentNode / data-attributes
//console.log(evento.target[0].value)
// console.log(evento.target.elements['nome'].value)
// console.log(evento.target.elements['quantidade'].value)