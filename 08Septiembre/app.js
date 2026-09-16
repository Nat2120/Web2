//  let frutas = ("manzana", "pera", "uva", "fresa", "arandano", "durazno");
//  console.log(frutas);

//  for (const fruta in frutas) {
//     console.log(frutas(fruta));
//  }

//  for (const fruta of frutas) {
//     console.log(fruta);
//  }

//  frutas.forEach((fruta)=> console.log(fruta));

 const carrito = [];
 const fruta = prompt("Ingresa una ruta");
 carrito.push(fruta);
 while(confirm("Quieres agregar otra fruta")){
    const fruta = prompt("Ingresa otra fruta");
    carrito.push(fruta);

 }
 console.log("usted compro");
 carrito.forEach((fruta,indice)=>{
console.log(`${indice+1} .- ${fruta}`);

 });