function showMessage() {
    let n = prompt('Укажите номер числа из ряда');
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    alert(b);
}
showMessage();