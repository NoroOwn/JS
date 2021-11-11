var x = 2;/*Нам дана переменная "X"*/ 
var y = 2;/*Нам дана переменная "Y"*/ 
counter = 1;/*Нам известен counter который равен 1*/
chislo=x;/*Найти "chislo"*/
while(counter < 10) {
    chislo = Math.pow(x, y);/*возвращает основание, возведённое в степень показатель, то есть, значение выражения*/
    counter++;/*Вычисляет counter*/
}

alert(chislo);/*Вывод "chislo"*/