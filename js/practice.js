
/*
---------------------------------------- DOM -------------------------------------------------
getElemnetsByTagName
getElemntesByClassName
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


const btnsaludo = document.getElementById("saludogen");
function saludo(){
    let nom = prompt("Ingrese su nombre")
    alert("Hola, "+ nom);
}
//btnsaludo.addEventListener("click",saludo);


btnsaludo.onclick = saludo;

const codigo = document.getElementById(`titulo`);



const arrayprueba = [
    "moco","pape"
]
codigo.onclick =()=>{
    console.log(arrayprueba);
}
*/

class Producto{
    constructor(id, marca, nombre, cat, precio, prodimage){
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.cat = cat;
        this.precio = precio;
        this.prodimage = prodimage;
    }
    pushto() {
        prodarray.push(this);
    }
}

function show(msj){
    console.log(msj);
    
}
const prodarray = [];
//MOTHERBOARD
const prod1 = new Producto(1, "ASUS PRIME", "B560M-A Intel 11ª 10ª LGA1200", "MOTHERBOARD", 50000, "prod1.png");
prod1.pushto();
const prod2 = new Producto(2, "GIGABYTE", "A520M-H AMD AM4", "MOTHERBOARD", 95000, "prod2.png");
prod2.pushto();
const prod3 = new Producto(3, "GIGABYTE", "B450 AORUS M AMD AM4", "MOTHERBOARD", 110000, "prod3.png");
prod3.pushto();
const prod4 = new Producto(4, "ASUS ROG STRIX", "Z590-E WIFI Bluetooth ATX ARGB Intel 11ª 10ª LGA1200", "MOTHERBOARD", 110000, "prod4.png");
prod4.pushto();
//RAM
const prod5 = new Producto (5, "Crucial", "Crucial Basics DDR4 8GB 2666mhz CL19", "MEMORIA RAM", 11000, "prod5.png");
prod5.pushto();
const prod6 = new Producto (6, "Patriot", "Viper Steel DDR4 8GB 3600MHz CL20", "MEMORIA RAM", 17000, "prod6.png");
prod6.pushto();
const prod7 = new Producto (7, "Patriot", "Viper Steel RGB DDR4 8GB 3600MHz CL20", "MEMORIA RAM", 27000, "prod7.png");
prod7.pushto();
const prod8 = new Producto (8, "PNY", "XLR8 RGB DDR4 16GB 3200MHz CL16 Negra", "MEMORIA RAM", 25000, "prod8.png");
prod8.pushto();
//GPU
const prod9 = new Producto(9, "GIGABYTE", "RX 580 8GB GDDR5", "GPU", 55000, "prod9.png");
prod9.pushto();
const prod10 = new Producto(10, "EVGA", "RTX 3070 EVGA 8GB GDRR6", "GPU", 180000, "prod10.png");
prod10.pushto();
const prod11 = new Producto(11, "ASROCK", "AMD Radeon RX 6800 XT 16GB", "GPU", 155000, "prod11.png");
prod11.pushto();
const prod12 = new Producto(12, "MSI", "Radeon RX 6600 XT MECH 2X 8G OC", "GPU", 100000, "prod12.png");
prod12.pushto();



//coding for searching
const formsearch = document.getElementById("formsearch")
let btnsearchadmin = document.getElementById("btnsearchadmin")
btnsearchadmin.addEventListener("click",function(e){
    e.preventDefault;
    let searchname = document.getElementById("searchprodname").value;
    const searchprod = prodarray.filter(item => item.nombre === searchname)
    show(searchprod);
    formsearch.reset();
});



//Coding for add product
const formadd = document.getElementById("formadd")
const btnadd = document.getElementById("agregarprod");
show(prodarray);
btnadd.addEventListener("click", function(e){
    e.preventDefault;
    let prodid = document.getElementById("aprodid").value;
    ValidarSinEspacio(prodid);
    let prodmarca = document.getElementById("aprodmarca").value;
    let prodnom = document.getElementById("aprodname").value;
    let prodcat = document.getElementById("aprodcat").value;
    let prodprecio = document.getElementById("aprodprecio").value;
    let newprod = new Producto(prodid, prodmarca, prodnom, prodcat, prodprecio);
    prodarray.push(newprod);
    show(newprod);
    formadd.reset();
});
   
//Coding for delete product
const formdelete = document.getElementById("formdelete");
let btndelete = document.getElementById("deleteprod");
btndelete.addEventListener("click", function(e){
    e.preventDefault();
    let elimprodname = document.getElementById("eprodname").value;
    const index = prodarray.findIndex(item => item.nombre === elimprodname);
    prodarray.splice(index, 1);
    console.log("Producto eliminado");
    show(prodarray)
    formdelete.reset();
})

//Product card
let sectioncard = document.getElementById("card");

for(const prod of prodarray){
let contentsectioncard = document.createElement("ARTICLE")
sectioncard.appendChild(contentsectioncard)
contentsectioncard.innerHTML = `
<div class="card__imgcontainer_prod">
<img class="card__img__prod" src="../prod/prodimg/${prod.prodimage}"></div>
<div class="card__text">
<div class="card__text__prod">${prod.nombre}</div>
<div class="card__price__prod">$${prod.precio}</div></div>`
}
















