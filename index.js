let vastus = document.getElementById("vastus");

go.onclick = function () {
  let o = document.getElementById("o").value;
  let x = Number(document.getElementById("x").value);
  let y = Number(document.getElementById("y").value);
  switch (o) {
    case "a":
      vastus.textContent = `Result is ${x + y}`;
      break;
    case "s":
      vastus.textContent = `Result is ${x - y}`;
      break;
    case "m":
      vastus.textContent = `Result is ${x * y}`;
      break;
    case "d":
      vastus.textContent = `Result is ${x / y}`;
      break;
    case "e":
      vastus.textContent = `Result is ${x ** y}`;
      break;
    case "r":
      vastus.textContent = `Result is ${x % y}`;
      break;
    default:
      vastus.textContent = "Unknown operation";
  }
};
