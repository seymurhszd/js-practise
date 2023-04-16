function showMessage() {
    let name = prompt('Ваше имя:')
    let age = prompt ('Ваш возраст:')
    let numberOfOrders = prompt ('Количество ваших заказов:')
    let amountOfOrders = prompt ('Введите сумму ваших заказов:')

    if (age >= 60) {
        alert ('Вам пологается скидка!')
    }   else if  (numberOfOrders >= 4 && amountOfOrders >= 100) {
        alert ('Вам пологается скидка!')
    }
        else {
            alert ('Спасибо за вашу информацию!')
        }
        
}
showMessage(); //ariqato!