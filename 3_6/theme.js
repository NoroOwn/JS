var number = prompt("Введите чилсо 1 и 2");/*Условие*/
switch (number) {
case "1":/*Блок операторов*/
    {
     document.write("Один");/*Вы поставили 1*/
    };
     break;
    
case "2":/*Блок операторов*/
    {
     document.write("Два");/*Вы поставили 2*/
    }; 
     break;
default:/*Блок операторов*/
    {
    document.write("Вы ввели значение, отличающиеся от 1 и 2");/*Ваше число либо больше, либо меньше 1 и 2*/
    };
}