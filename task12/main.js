function atmPoint(AmountRequired) {
    const avaibleNotes = [100, 50, 20, 10, 5, 1];
    const result = [];

    if (AmountRequired > 0) {
        for (let i = 0; i < avaibleNotes.length; i++) {
            let note = avaibleNotes [i];

            while (AmountRequired - note >= 0)  {
                AmountRequired -= note;
                result.push(note);
            }
        }
    } else  {
        console.log("Введите сумму вывода:");
    }

    return result;  
}

console.log(atmPoint(789));