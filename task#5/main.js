function showMessage() {
    var array = [25, 32, 27, 52, 17, -20, 5]
    array.sort(function(a,b){
        return b - a // return a - b (в порядке убывания)
    })
    console.log(array);
}
showMessage ();