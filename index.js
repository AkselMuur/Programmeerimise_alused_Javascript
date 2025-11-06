let shoppingCart = [
  { name: "apple", quantity: 4 },
  { name: "banana", quantity: 2 },
  { name: "orange", quantity: 5 },
  { name: "milk", quantity: 1 },
  { name: "bread", quantity: 2 },
];
console.log(shoppingCart);


//1.
console.log(shoppingCart.reduce(sum, 0) + "tk");

function sum(total, num) {
  return total + num.quantity;
}

//2.
shoppingCart.push({ name: "yogurt", quantity: 3 });

console.log(shoppingCart[5]);

//3.

let appleitem=shoppingCart.find(item => item.name === "apple")
if (appleitem){
  appleitem.quantity+=3
}
else{
  shoppingCart.push({name: "apple", quantity: 3 })
}

console.log(shoppingCart);

//4

