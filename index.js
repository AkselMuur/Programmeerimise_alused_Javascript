function rollDice() {
  const numofDice = document.getElementById("myText").value;
  const diceResult = document.getElementById("DieResult");
  const diceImages = document.getElementById("DieResult");
  //console.log(numofDice);
  //console.log(diceResult);
  const values = [];
  const images = [];
  let sum = 0;
  for (let i = 0; i < numofDice; i++) {
    let max = 6;
    // console.log(Math.floor(Math.random() * max + 1));
    const value = Math.floor(Math.random() * max + 1);
    values.push(value);
    sum += value;
    images.push(`<img src="Dice/${value}.png" alt="Dice ${value}">`);
  }
  //console.log(values);
  //console.log(images);

  DiceResult.textContent = `Sum: ${sum}, dice:${values.join(", ")}`;
  DiceImages.innerHTML = images.join("");
}

function reset() {
  location.reload();
}
