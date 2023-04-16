function showMessage() {
    let sum = prompt("Введите сумму депозита")
    let year = prompt("Укажите долгосрочность вашей инвестиции")
    let percent = prompt ("Укажите процентную ставку вашего депозита")

    for (i = 1; i <= year; i++) {
        sum = sum * (1 + percent/100);
        // alert(sum); Если это будет тут, то он будет указывать поочередное возрастание процентной ставки
    }
    alert(sum);
}
showMessage();
