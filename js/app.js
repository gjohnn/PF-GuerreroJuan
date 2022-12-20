
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
  
    let trabajadores = [
        {id:37, emp: "Juan"},
        {id:56, emp: "Martín"},
        {id:12, emp: "María"},
        {id:67, emp: "Ana"},
        {id:41, emp: "Pablo"},
    ]

    let empid = parseInt(prompt("Ingrese ID"))
    
    


    //pusher
    function cargarel(arr,el){
        arr.push(el);
    }
    //MOTHERBOARD
    const motherss = []
    const mother1 = {nom:"H610", precio: 15000, stock:5};
    const mother2 = {nom:"Z690", precio: 90000, stock:5};
    const mother3 = {nom:"H610", precio: 15000, stock:5};

    cargarel(motherss,mother1);
    cargarel(motherss,mother2);
    cargarel(motherss,mother3);

    for(const mother of motherss){
        console.log(mother.nom);
        console.log("$"+mother.precio);
        console.log("Stock: "+mother.stock);
    }
    //GPU
    const gpuss = [];
    const gpu1 = {nom:"RTX 3070", precio:170000, stock:15};
    const gpu2 = {nom:"RTX 3080 TI", precio:250000, stock:15};
    const gpu3 = {nom:"RTX 4080", precio:400000, stock:15};
    cargarel(gpuss,gpu1);
    cargarel(gpuss,gpu2);
    cargarel(gpuss,gpu3);
    for(const gpu of gpuss){
        console.log(gpu.nom);
        console.log("$"+gpu.precio);
        console.log("Stock: "+gpu.stock);
    }
}