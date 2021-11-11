var counter = 5; /*Counter который нам известен*/
while (counter < 10) /*блок операторов*/{
    counter++;/*Вычисляет counter*/
    document.write("Counter" + counter);/*покажет изменение*/
    break;/*убирает нижний оператор*/
    document.write("Эта строка не выполнится.");
}
