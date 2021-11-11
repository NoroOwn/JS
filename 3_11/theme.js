var a = prompt("Введите '1' - текстовое поле, '2' - кнопка, '3' - radio");/*Вы вели какое-нибудь чило от 1 до 3*/
var kolvo = prompt ('Введите количество');/*Вы пишете число которое вы выбрали от 1 до 3*/
kolvo = parseInt(kolvo);
    if(a=='1')
    for (var i=1;i<=kolvo;i++)
        document.write('<br><input type="text">');/*по является текстовое поле*/
    else if (a=='2')
    for (var i=1;i<=kolvo;i++)
        document.write('<br><input type="button">');/*по является кнопка*/
    else if (a=='3')
    for (var i=1;i<=kolvo;i++)
        document.write('<br><input type="radio">');/*по является переключатель*/
    else {
        alert("Введите правильный тип");/*Вы ввели число которое не является "1", "2", "3"*/
        exit;
        }