
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
    constructor(id, marca, nombre, cat, precio){
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.cat = cat;
        this.precio = precio;
    }
    pushto() {
        prodarray.push(this);
    }
}

function show(msj){
    console.log(msj);
    
}
const prodarray = [];
const prod1 = new Producto(1, "Asus ROG STRIX", "B450-F", "MOTHERBOARD", 51000);
prod1.pushto();
const prod2 = new Producto(2, "Gigabyte", "Z590", "MOTHERBOARD", 95000);
prod2.pushto();
const prod3 = new Producto(3, "Asus ROG STRIX", " X570-E WIFI II", "MOTHERBOARD", 110000);
prod3.pushto();
const prod4 = new Producto(4, "AMD", "Rx 580", "GPU", 50000);
prod4.pushto();
const prod5 = new Producto(5, "NVIDIA", "Rtx 3080 TI", "GPU", 220000);
prod5.pushto();
const prod6 = new Producto(6, "AMD", "Rx 7900 XTX", "GPU", 360000);
prod6.pushto();



function elim(){
    const index = prodarray.findIndex(item => item.nombre === elimprodname);
    prodarray.splice(index, 1)}

function ValidarSinEspacio(dato){
    while (dato == ""){
        show("Faltan datos");
    }
}
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
   
/*Coding for delete product
let elimprodname = document.getElementById("eprodname").value;
let btndelete = document.getElementById("deleteprod");
btndelete.onclick = elim();*/











/*let verifilt = prompt("Buscar productos? (Categoria = 1 / Nombre = 2)")
if (verifilt == 2){
    let buscar = prompt("Buscar por nombre...")
    const filt = prodarray.filter(item =>item.nombre === buscar)
    console.log(filt);
}else if (verifilt == 1){
    let buscar = prompt("Buscar por categoria...")
    const filt = prodarray.filter(item =>item.cat === buscar)
    console.log(filt);
}


let verielim = prompt(`Eliminar producto?`)
if (verielim == "Si" || verielim == "SI"||verielim == "si"){
    function elim(){
        const index = prodarray.findIndex(item => item.nombre === elimprodnom);
        prodarray.splice(index, 1)
    }

    do{
        elimprodnom = prompt("Ingrese el nombre del producto que quiere eliminar")
        elim();
        verielim = prompt(`Eliminar otro producto?`)
    }while (verielim == "Si" || verielim == "SI"||verielim == "si")
    console.log(prodarray);
}*/

//coding for product cards













