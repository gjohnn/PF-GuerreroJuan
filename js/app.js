//Indentificar tipo de usuario
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
    //cuotas
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

    
    //base de datos
    class Producto{
        constructor(id,marca,nombre,cat,precio){
            this.id = id;
            this.marca = marca;
            this.nombre = nombre;
            this.cat = cat;
            this.precio = precio;
        }
        pushto(){
            prodarray.push(this);
        }
    }
    
    const prodarray = [];
    const mother1 = new Producto (1,"Asus ROG STRIX", "B450-F", "Motherboard", 51000);
    mother1.pushto();
    const mother2 = new Producto (2,"Gigabyte", "Z590", "Motherboard", 95000);
    mother2.pushto();
    const mother3 = new Producto (3,"Asus ROG STRIX", " X570-E WIFI II", "Motherboard", 110000);
    mother3.pushto();
    const gpu1 = new Producto (4,"AMD", "Rx 580", "GPU", 50000);
    gpu1.pushto();
    const gpu2 = new Producto (5,"NVIDIA", "Rtx 3080 TI", "GPU", 220000);
    gpu2.pushto();
    const gpu3 = new Producto (6,"AMD", "Rx 7900 XTX", "GPU", 400000);
    gpu3.pushto();
    
    //Verificar si  el trabajor es de la empresa
    const trabajadores = ["Juan","Martín","María","Ana","Pablo"];
    nom = prompt("Ingrese nombre")
    while (nom==""){
        nom = prompt("Ingrese nombre correcto")
    }
    let trabveri = trabajadores.includes(nom)
    if (trabveri == true){
        console.log("Bienvenido, "+ nom);
        console.log(prodarray);
        //pedir si quiere agregar productos
        let veriagregar = prompt("Agregar producto? (Si/No)")
        while (veriagregar==""){
            veriagregar = prompt("Agregar producto? (Si/No)")
        }
        if (veriagregar=="Si"||veriagregar=="si"||veriagregar=="SI"){
            function agregar(){
                prodarray.push(nuevoproducto)
            }
            do {
                let prodid = parseInt(prompt("Ingrese ID del producto"));
                /* No encontre la forma todavia de validar el ID
                while (prodidverif == true){
                let prodidverif = prodarray.includes(prodid);
                    prodid = parseInt(prompt("ID ocupado, ingrese otro"));
                    prodidverif = prodarray.filter(prodid);
                }*/
                let prodmarca = prompt("Ingrese marca del producto");
                let prodnom = prompt("Ingrese nombre del producto");
                let prodcat = prompt("Ingrese categoría del producto");
                let prodprecio = parseInt(prompt("Ingrese precio del producto"));
                alert("Listo!");
                nuevoproducto = new Producto (prodid,prodmarca,prodnom,prodcat,prodprecio)
                agregar();
                veriagregar = prompt("Desea agregar otro producto? (Si/No)")
            } while (veriagregar =="Si"||veriagregar =="si"||veriagregar =="SI");
            console.log(prodarray);
        }else if (veriagregar == "No"||veriagregar=="no"||veriagregar=="NO"){
            console.log(prodarray);
        }

   }else
    alert("Usuario no válido")
   }

