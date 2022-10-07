//--------------------------- task 1
 


 
var str = ['a', 'b', 'c'],
    num = [1, 2, 3];
var strNum = str.concat(num);

document.getElementById('task1').innerHTML = strNum;
 

//--------------------------- task 2
var str1 = ['a', 'b', 'c'];

str1.push('d','e')

document.getElementById('task2').innerHTML = str1;
//--------------------------- task 3
 var num1 = [1, 2, 3];

 num1 = num1.reverse();
 
 document.getElementById('task3').innerHTML = num1;
 //--------------------------- task 4


 var arr1 = ['js', 'css', 'jq']

 document.getElementById('task4').innerHTML = arr1.pop();

 //--------------------------- task 5
var arr2 =[1,2,3,4,5]
 arrSilce = arr2.slice(3,5)
 document.getElementById('task5').innerHTML = arrSilce;
//--------------------------- task 6

var arr3 =[1,2,3,4,5]
  arr3.splice(1,2)
  document.getElementById('task6').innerHTML = arr3;
//--------------------------- task 7
var arr3 =[1,2,3,4,5]
arrSplice = arr3.splice(1,3)
document.getElementById('task7').innerHTML = arrSplice;
//--------------------------- task 8

var arr3 = [1, 2, 3, 4, 5];
arr3.splice(3,0, "a", "b", "c");
document.getElementById('task8').innerHTML = arr3;

//--------------------------- task 9

arr3 = [1, 2, 3, 4, 5];
arr3.splice(1,0, "a", "b",);
arr3.splice(6,0, "c",);
arr3.splice(8,0, "e",);

document.getElementById('task9').innerHTML = arr3;

//--------------------------- task 10
const points = [3, 4, 1, 2, 7];
points.sort(function(a, b){return a-b});
document.getElementById("task10").innerHTML = points;

//--------------------------- task 11
var objectTask11 = {
  js: 'test',
   jq: 'hello', 
  css: 'world'
};
  document.getElementById("task11").innerHTML = Object.keys(objectTask11);

//--------------------------- task 12
var str = 'aaa@bbb@ccc';
document.getElementById("task12").innerHTML = str.replace(/@/g, '!');

//--------------------------- task 13
var date = new Date('2025-12-31')
date = ('31/12/2025')
document.getElementById("task13").innerHTML =date;

//--------------------------- task 14
 
str = 'я вчу javascript!'
document.getElementById("task14").innerHTML = str.split('');

//--------------------------- task 15
arr = ['x']
arr.length = 6

for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i - 1] + 'x'
}

    
document.getElementById("task15").innerHTML = arr;



//--------------------------- task 16

function arrayFill(str, numEl) {
  let arr = []
  arr.length = numEl
  for (let index = 0; index < arr.length; index++) {
      arr[index] = str
  }
  return arr;
}
arr = arrayFill('x', 4)
document.getElementById("task16").innerHTML = arr
//--------------------------- task 17

arr = [
  [
      [1, 2],
      [3, 4]
  ],
  [
      [5, 6],
      [7, 8]
  ]
]

let sum = 0;

arr = arr.flat(Infinity)

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
document.getElementById("task17").innerHTML = sum
//--------------------------- task 18
function task18Foo() {
let styles = ['Jazz', 'Blues']
styles.push('Rock-n-Roll')
styles[Math.round((styles.length - 1) / 2)] = 'Classics'
styles.unshift('Rap', 'Reggae')
document.getElementById("task18").innerHTML = "Додано два елементи в початок -> " + styles + "<br>"
}

task18Foo()
//--------------------------- task 19
function camelize(str) {
  return str
      .split('-')
      .map(function(word, index) {
          return index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      })
      .join('');
      
}
document.getElementById("task19").innerHTML = "Перетворено на -> " + camelize('list-style-image') + "<br>"
//--------------------------- task 20
function filterRange(arr, a, b) {
  return arr.filter(function(item) {
      return a <= item && item <= b
  });
}
arr = [5, 3, 8, 1];

document.getElementById("task20").innerHTML = "Перетворено:" + filterRange(arr, 1, 4) + "<br>"

//--------------------------- task 21
function copySort(arr) {
  return arr.slice().sort()
}

arr = ["HTML", "JavaScript", "CSS"]
document.getElementById("task21").innerHTML ="Скопійовано і відсортовано ->" + copySort(arr) + "<br>"

//--------------------------- task 22
function sortByAge(arr) {
  arr.sort(function(a, b) { a.age - b.age });
}

let ivan = { name: " Іван", age: 25 };
let petro = { name: " Петро", age: 30 };
let mariya = { name: " Марія", age: 28 };

arr = [petro, ivan, mariya];
sortByAge(arr)
document.getElementById("task22").innerHTML ="Відсортовано: "+ "<br>" + arr[0].name+ "<br>" + arr[1].name+"<br>" + arr[2].name + "<br>"

//--------------------------- task 23
function getAverage(users) {
  return users.reduce(function(prev, user) {
      return prev + user.age
  }, 0) / users.length;
}

ivan = { name: "Іван", age: 25 };
petro = { name: "Петро", age: 30 };
mariya = { name: "Марія", age: 29 };

arr = [ivan, petro, mariya];


document.getElementById("task23").innerHTML ="Середнє ->" + getAverage(arr) + "<br>"

//--------------------------- task 24
let users = [
  { id: 'іван', name: "Іван Іванко", age: 20 },
  { id: 'ганна', name: "Ганна Іванко", age: 24 },
  { id: 'петро', name: "Петро Петренко", age: 31 },
];
let index = 0

function groupById(array) {
  return array.reduce(function(obj, value) {
      obj[value.id] = value;
      return obj;
  }, {})
}

let usersById = groupById(users);
document.getElementById("task24").innerHTML ="В консолі" + "<br>"
console.log(users)
console.log(usersById)
//--------------------------- task 25
function sumSalaries(salaries) {

  let sum = 0;
  for (let salary of Object.values(salaries)) {
      sum += salary;
  }
  return sum;
}


let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
document.getElementById("task25").innerHTML = "Сума ->" + sumSalaries(salaries) + "<br>"