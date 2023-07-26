const colores= Array.of("rojo","verde","azul");
const colores2= ["amarillo","negro","blanco"];
console.log(colores);
console.log(colores2);

colores.forEach(function(color,index){
console.log("<li id="+index+">"+color+"</li>");
});

colores2.forEach((color,index) =>{
    console.log("<li id="+index+">"+color+"</li>");
});