// Temperature conversion program


const textBox = document.getElementById("textBox")
const toFahren=document.getElementById("toFahrenheit")
const toCelsius=document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp;

function convert(){
  if(toFahren.checked){
    temp=Number(textBox.value)
    temp=temp*9/5+32
    result.textContent=temp.toFixed(1)+" Farenheiti"
  }
else if(toCelsius.checked){
  temp=Number(textBox.value)
  temp=(temp-32)*(5/9)
  result.textContent=temp.toFixed(1)+" Celsiust"
}
else{
  result.textContent="Select a unit"
}



}