const shoppingCart=[ 
{ name: "apple", quantity: 4 },
{ name: "banana", quantity: 2 },
{ name: "orange", quantity: 5 },
{ name: "milk", quantity: 1 },
{ name: "bread", quantity: 2 }
]

// 1.
function getSum(total, item) {
  return total + item.quantity;
}

console.log(shoppingCart.reduce(getSum, 0)  );

// 2.

shoppingCart.push({ name: "yogurt", quantity: 3 });
console.log(shoppingCart);

// 3.

const item = shoppingCart.find(product => product.name === "apple");

if (item) {
  item.quantity += 3;
} else {
  shoppingCart.push({ name: "apple", quantity: 3 });
}

console.log(shoppingCart);

// 4.

const item2 = shoppingCart.findIndex(product => product.name === "banana");

if (item2 !== -1) {
  shoppingCart.splice(item2, 1);
}

console.log(shoppingCart);

// 5.
const productNames = shoppingCart.map(product => product.name);

console.log(productNames);

// 6.

const kontroll = shoppingCart.findIndex(product => product.name === "milk");

if (kontroll !== -1) {
  console.log("True")
}
else{
  console.log("False")
}

// 7.

console.log(shoppingCart.sort((a,b) => b.quantity - a.quantity));