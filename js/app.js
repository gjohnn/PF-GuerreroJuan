let nomprod = prompt("Ingrese el nombre del producto")
while (nomprod==""){
    nomprod = prompt("Ingrese el nombre correcto del producto");
}
let precio = parseInt(prompt("Ingrese el precio del producto"));
let preciof= 0;
let nada = NaN
while ((precio<=0)){
     precio = parseInt(prompt("Ingrese el precio correcto del producto"));
}
let cuota = parseInt(prompt("Ingrese las cuotas (3, 6 o 12) en las que desea pagar, ingrese 0 si desea en efectivo/transferencia bancaria."));
while((cuota<0) ||(cuota>12)|| (cuota==1) || (cuota==2) || (cuota>=4 && cuota<=5) || (cuota>=7 && cuota<=11)){
    cuota = parseInt(prompt("Ingrese las cuotas (3, 6 o 12) en las que desea pagar, ingrese 0 si desea en efectivo/transferencia bancaria."));
}

function efectivo(){
    preciof = precio*0.90 
}

function cuota3(){
    preciof = precio*1.15
}

function cuota6(){
    preciof = precio*1.35
}

function cuota12(){
    preciof = precio*1.70
}

function showprod(){
    console.log("Producto: "+nomprod)
    console.log("Precio: $"+ precio)
}

if (cuota == 0){
        efectivo();
        showprod();
        console.log("10% de descuento: $"+preciof);
}else if (cuota == 3){    
        cuota3();
        console.log( "15% de interés: $"+preciof);
}else if (cuota == 6){
        cuota6();
        showprod();
        console.log("35% de interés: $"+preciof);
}else if (cuota == 12){
        cuota12();
        showprod();
        console.log("70% de interés: $"+preciof);
}