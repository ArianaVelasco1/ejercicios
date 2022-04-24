// var ancho=200;
// var alto=250;

// if(ancho===alto){
//     console.log('es cuadrado')
// }
// else{
//     console.log('no es cuadrado')
// }

// var num1=2;
// var num2=10;
// var num3=5;
// if (num3>num2){
//     console.log('numer3 es mayor a numero2 ')
// }
// else{
//     console.log('numero3 es menor a numero2')
// }
// if (num3>num1){
// console.log('numero3 mayor a numero1')
// }
// else{
//     console.log('numero 1 mayor a numero3')
// }
// if(num2>num1){
//     console.log(numero2 mayor a numero 1)
// }
// else{
//     console.log('numero1 mayor a numero2)
// }

var enteredMarks = 75;

if(enteredMarks<=24){
    console.log('F')
}
if(enteredMarks>=25 && enteredMarks<=44){
    console.log('E')
}
if(enteredMarks>=45 && enteredMarks<=49){
    console.log('D');
}
if(enteredMarks>=50 && enteredMarks<=59){
    console.log('C');
}
if(enteredMarks>=60 && enteredMarks<=79){
    console.log('B');
}
else{
    console.log('A')
}
console.log('end')

function newFunction() {
    console.log('D');
}

var numberOfItemPurchased=10;
var cost=100;
var total=numberOfItemPurchased*cost;
var descuento= total-(total*0.10);
if (total>=1000){
    console.log(descuento);
}
else{
    console.log(total)
}