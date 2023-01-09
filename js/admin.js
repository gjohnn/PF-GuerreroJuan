
//coding for search a product
const formsearch = document.getElementById("formsearch")
let btnsearchadminname = document.getElementById("btnsearchadminname")
btnsearchadminname.addEventListener("click",function(e){
    e.preventDefault;
    let searchname = document.getElementById("searchprodname").value;
    const searchprod = prodarray.filter(item => item.nombre == searchname)
    show(searchprod);
    formsearch.reset();
});

let btnsearchadmincat =  document.getElementById("btnsearchadmincat")
btnsearchadmincat.addEventListener("click",function(e){
    e.preventDefault;
    let searchcat = document.getElementById("searchprodcat").value;
    const searchprod = prodarray.filter(item => item.cat == searchcat)
    show(searchprod);
    formsearch.reset();
});



//Coding for add product
const formadd = document.getElementById("formadd")
const btnadd = document.getElementById("agregarprod");
show(prodarray);
btnadd.addEventListener("click", function(e){
    e.preventDefault;
    let prodid = parseInt(document.getElementById("aprodid").value);
    let prodmarca = document.getElementById("aprodmarca").value;
    let prodnom = document.getElementById("aprodname").value;
    let prodcat = document.getElementById("aprodcat").value;
    let prodprecio = parseInt(document.getElementById("aprodprecio").value);
    let newprod = new Producto(prodid, prodmarca, prodnom, prodcat, prodprecio);
    prodarray.push(newprod);
    show(newprod);
    show(prodarray)
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
let sectioncard = document.getElementById(`allcard`);
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