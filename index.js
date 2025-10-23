let x = prompt("Sisesta vanus");

if (isNaN(x)) {
  alert("Ei sisestatud number!");
  x = prompt("Sisesta vanus");
} else if (x < 0) {
  alert("Ei ole negatiivseid vanuseid");
} else if (x >= 0 && x <= 6) {
  alert("Kasva veel veidi");
} else if (x >= 99) {
  alert("Söögilt maha arvatud");
} else if (x >= 7 && x <= 16) {
  alert("Söögi aeg on kell 10.00");
} else if (x >= 17 && x <= 20) {
  alert("Söögi aeg on kell 11.00");
} else if (x >= 21 && x <= 99) {
  alert("Söögi aeg on kell 12.00");
}
