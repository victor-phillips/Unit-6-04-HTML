// sets default values
let l1 = 0
let l2 = 0
let h = 0
let output = 0
// detects when button is pressed
document.getElementById('button').addEventListener('click', solve)
// calculates the area and tests if inputs are 0 or below
function solve () {
  l1 = document.getElementById('num1').value
  l1 = parseInt(l1)
  l2 = document.getElementById('num2').value
  l2 = parseInt(l2)
  h = document.getElementById('num3').value
  h = parseInt(h)
  output = l1 + l2
  output = output * h
  output = output * 2
  document.getElementById('output').innerHTML = output
  if (l1 < 1) {
    document.getElementById('output').innerHTML = 'error:one or more of your imputed numbers are ether 0 or negative'
  }
  if (l2 < 1) {
    document.getElementById('output').innerHTML = 'error:one or more of your imputed numbers are ether 0 or negative'
  }
  if (h < 1) {
    document.getElementById('output').innerHTML = 'error:one or more of your imputed numbers are ether 0 or negative'
  }
}
