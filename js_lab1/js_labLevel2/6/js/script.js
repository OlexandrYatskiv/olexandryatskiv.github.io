
var a361 = document.getElementById('a361')
var a362 = document.getElementById('a362')
a361.onclick = foo1;
a362.onclick = foo2;
function foo1() {
    let firstNumber, secondNumber
 firstNumber = prompt("Введіть перше число: ")
 secondNumber = prompt("Введіть друге число: ")
 var result = (+firstNumber) +(+secondNumber);
 result = alert(result)}

 function foo2() {
    let firstNumber, secondNumber
 firstNumber = prompt("Введіть перше число: ")
 secondNumber = prompt("Введіть друге число: ")
 var result = (firstNumber) +(secondNumber);
 result = alert(result)}
