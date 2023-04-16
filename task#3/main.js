function showMessage() {
    let name = prompt("Enter name:");
    let unitPrice = prompt("Введите цену за товар");
    let quantity = prompt("Введите количество купленного товара");
    let promotion = prompt("Являетесь ли вы участником компании?");
    let price;


    

      if (quantity >= 5 && promotion === "yes") {
        price = (unitPrice - (unitPrice * 0.25)) * quantity;
        alert (price);
    }


        else if (promotion === "yes") {
        // price = (unitPrice - (unitPrice * 0,15)) * quantity; ---- почему это не работает? он делит на 2 и выдaет минусовое значение 0_o
        price = (unitPrice * 0.85) * quantity;
        alert (price);
    }

        else if (quantity >= 5) {
        price = (unitPrice - (unitPrice * 0,10)) * quantity ;
        alert (price);
      }
    
    else {
        price = unitPrice * quantity;
        alert (price);
    }
}

showMessage();
  

