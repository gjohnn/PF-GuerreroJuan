//Product card admin



let prodcardmother = document.getElementById(`prodcardmother`);
for(const prod of prodarraymother){
let contentsectioncard = document.createElement("ARTICLE")
prodcardmother.appendChild(contentsectioncard)
contentsectioncard.innerHTML = `
<div class="card__imgcontainer_prod">
<img class="card__img__prod" src="../prod/prodimg/${prod.prodimage}"></div>
<div class="card__text">
<div class="card__text__prod">${prod.nombre}</div>
<div class="card__price__prod">$${prod.precio}</div></div>`
}
let prodcardram = document.getElementById(`prodcardram`);
for(const prod of prodarrayram){
let contentsectioncard = document.createElement("ARTICLE")
prodcardram.appendChild(contentsectioncard)
contentsectioncard.innerHTML = `
<div class="card__imgcontainer_prod">
<img class="card__img__prod" src="../prod/prodimg/${prod.prodimage}"></div>
<div class="card__text">
<div class="card__text__prod">${prod.nombre}</div>
<div class="card__price__prod">$${prod.precio}</div></div>`
}
let prodcardgpu = document.getElementById(`prodcardgpu`);
for(const prod of prodarraygpu){
let contentsectioncard = document.createElement("ARTICLE")
prodcardgpu.appendChild(contentsectioncard)
contentsectioncard.innerHTML = `
<div class="card__imgcontainer_prod">
<img class="card__img__prod" src="../prod/prodimg/${prod.prodimage}"></div>
<div class="card__text">
<div class="card__text__prod">${prod.nombre}</div>
<div class="card__price__prod">$${prod.precio}</div></div>`
}














