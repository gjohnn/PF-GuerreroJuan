/*
---------------------------------------- DOM -------------------------------------------------
getElemnetsByTagName
getElemntesByClass
getElementsById
innerText: agrega al contenedor de html
innerHTML : cambia el html
const parrafo = document.createElemnt("p");
parrafo.innerText = "parrafo desde JS"

append: para agregar al flujo => document.body.append(parrafo) 
document.body.appendChild(parrafo): append al hijo 
document.body.prependChild(parrafo) : al principio lo agrega

.querySelector : 
.className: agregar clases desde js
.remove(); : elimina el elemento dinámico tmb puedo [....]

const list = document.querySelector("div#messi, OtraClaseOid"); :
.log(list)


const personas = ["messi","lol","Juan"]
personas.push("pepe");
for(const nombre of personas){
    let li = document.createElemnt("li")
    li.innerText = nombre;
    lista.append(li);
}segun array

-- Plantillas literales =>  ` `
let concatenado = "hola soy "+ nom + " tengo " + 5 + " manzanas"
console.log(concatenado)
//-PERO-
//interpolacion de variables
nom = "pepe"
pert = 5

let plant = `Hola soy ${nom} tengo ${pert} manzanas`

console.log(plant);
*/




