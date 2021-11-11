var counter = prompt("Введите число");/*вылезает окно и требует вести число*/
var factorial = 1;
var k = 2;
document.write("Факториал числа:" + counter + "! = ");
do {
    if(counter == 0){
        factorial = 1;
        break;
    }
    if (counter == 1) {
        console.log(factorial);
        break;
    }
    else{
    factorial = factorial * k;
    console.log(factorial);
    }
    k++;/*Вычисляет k*/
    counter--;/* Не будет вычисляет counter */
}while(counter > 1);
document.write(factorial)/*Будет выдовать число factorial*/