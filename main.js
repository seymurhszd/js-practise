function showMessage() {
  let name = prompt("Enter your first name:");
  let secondName = prompt("Enter your last name:");
  let age = prompt("Enter your age:");
  let email;
  if (age < 18) {
    alert("You are not adult((");
  } else {
    email = prompt("Enter your Email Address:");
    alert(`${secondName}, ${name}, ${age}, ${email}!`);
    alert("It is oke :)");
  }
}

showMessage();

