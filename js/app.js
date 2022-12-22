
let usu = prompt("Ingrese tipo de usuario (Cliente/Vendedor)")
while (usu == ""){
    usu = prompt("Ingrese tipo de usuario (Cliente/Vendedor)");
}

if (usu == ("cliente")|| usu==("Cliente")){
    let nomprod = prompt("Ingrese el nombre del producto")
    while (nomprod==""){
        nomprod = prompt("Ingrese el nombre correcto del producto");
    }
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    
    while ((precio<=0)){
         precio = parseInt(prompt("Ingrese el precio correcto del producto"));
    }
    let cuota = parseInt(prompt("Ingrese las cuotas (3, 6 o 12) en las que desea pagar, ingrese 0 si desea en efectivo/transferencia bancaria."));
    while((cuota<0) ||(cuota>12)|| (cuota==1) || (cuota==2) || (cuota>=4 && cuota<=5) || (cuota>=7 && cuota<=11)){
        cuota = parseInt(prompt("Ingrese las cuotas (3, 6 o 12) en las que desea pagar, ingrese 0 si desea en efectivo/transferencia bancaria."));
    }
    
    function cuotas(){
        if (cuota==0){
        precio = precio*0.90 
        }else if (cuota==3){
            precio = precio*1.15
        }else if (cuota==6){
            precio = precio*1.35 
        }else if(cuota==12){
            precio = precio*1.70
        }
        console.log("Precio final: "+precio);
    }
    
    function showprod(){
        console.log("Producto: "+nomprod);
        console.log("Precio: $"+ precio);
    }
    showprod();
    cuotas();
}else if (usu == ("vendedor")||usu==("Vendedor")){
    const motherss = []
    const mother1 = {nom:"H610", precio: 15000, stock:5};
    const mother2 = {nom:"Z690", precio: 90000, stock:5};
    const mother3 = {nom:"H610", precio: 15000, stock:5};
    const gpuss = [];
    const gpu1 = {nom:"RTX 3070", precio:170000, stock:15};
    const gpu2 = {nom:"RTX 3080 TI", precio:250000, stock:15};
    const gpu3 = {nom:"RTX 4080", precio:400000, stock:15};
    
    const trabajadores = ["Juan","Martín","María","Ana","Pablo"];
   nom = prompt("Ingrese nombre")
   while (nom==""){
    nom = prompt("Ingrese nombre correcto")
   }

   let trabveri = trabajadores.includes(nom)

   if (trabveri == true){
    console.log("Bienvenido, "+ nom);
       //pusher
       function cargarel(arr,el){
           arr.push(el);
       }
       //MOTHERBOARD
    
       cargarel(motherss,mother1);
       cargarel(motherss,mother2);
       cargarel(motherss,mother3);
    
       for(const mother of motherss){
           console.log(mother.nom);
           console.log("$"+mother.precio);
           console.log("Stock: "+mother.stock);
       }
       //GPU
       cargarel(gpuss,gpu1);
       cargarel(gpuss,gpu2);
       cargarel(gpuss,gpu3);
       for(const gpu of gpuss){
           console.log(gpu.nom);
           console.log("$"+gpu.precio);
           console.log("Stock: "+gpu.stock);
       }

       let eleveri = parseInt(prompt("Añadir motherboard = 1 ; gpu = 2"))

       if (eleveri == 1){
            motherss.push(prompt("Ingrese nombre"))
            veri = prompt("Desea agregar más? (Si/No)")
            while ((veri == "Si")||(veri == "si")){
            motherss.push(prompt("Ingrese nombre"))
            veri = prompt("Desea agregar más? (Si/No)")
        }
       }else if (eleveri==2){
            motherss.push(prompt("Ingrese gpu"))
            veri = prompt("Desea agregar más? (Si/No)")
            while ((veri == "Si")||(veri == "si")){
            gpuss.push(prompt("Ingrese gpu"))
            veri = prompt("Desea agregar más? (Si/No)")
            }
       }


   }else{
    alert("Usuario no válido")
   }

}