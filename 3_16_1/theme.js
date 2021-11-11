var ya = prompt ("Введите имя");/*Требует написать имя*/

if (ya){
alert (`Привет, ${ya} !`);
}else{
    while(!ya){
        var ya = prompt ("Введите имя");
    }
}