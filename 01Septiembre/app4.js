let frutas = ["Manzana", "Banana", "Cereza", "Pera", "Arandano"];
console.log(frutas);
for (let fruta of frutas ){ // cada fruta en el arreglo de frutas, basicamente como recorrer un arreglo en python for of
    console.log("la fruta es: "+ fruta);
}

for (let fruta in frutas) {
    console.log("El indice de la fruta es : " + fruta) //for in es solo el indice del arreglo
    
}