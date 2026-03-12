const post1 = document.getElementById('post01').innerHTML

const posts = document.getElementsByClassName('post')
console.log(posts)
console.log(posts[0])
console.log(posts[1])

const paragrafo = document.getElementsByTagName('p')
console.log(paragrafo)

const formulario = document.getElementsByTagName ('form')
console.log(formulario)

//autores
const autores = document.getElementsByClassName('post-autor')
for(let i=0; i<autores.length; i++){
    console.log(autores[i].innerText)
}

//redes sociais
const redes = document.querySelectorAll('.lista_redes a')
console.log(redes)
for (let item of redes) {
    console.log(item.innerHTML)

}