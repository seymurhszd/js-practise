function showMessage() {
  let length = prompt("Введите длину товара:");
  let width = prompt("Введите ширину товара:");
  let height = prompt("Введите высоту товара:");
  let weight = prompt("Введите вес товара:");
  let distance = prompt("Введите километраж до вашего адреса:");

  if (length + width + height <= 150 && length < 100 && width < 100 && height < 100 && weight <= 10 && distance >=3 && distance <=10) {
      alert('Отправляемый вами товар является малогабаритным');
  } else {
      alert('Ваш товар крупно габаритный');
  }

//   if (length + width + height <= 150) {
//     if (length <= 100 && width <= 100 && height <= 100) {
//       if (weight <= 10) {
//         if (distance >= 3 && distance <= 10) {
//           alert("melkaya posilka");
//         } else {
//           alert("Ваша посылка не подходит по дистанции");
//         }
//       } else {
//         alert("Ваша посылка не подходит по весу");
//       }
//     } else {
//       alert("Ваша посылка не подхолит по размерам");
//     }
//   } else {
//     alert("Ваша посылка не подхолит по размерам");
//   }
// }



// В чем ошибка?((((
}
showMessage();
