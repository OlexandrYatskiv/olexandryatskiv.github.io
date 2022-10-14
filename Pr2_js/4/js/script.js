function randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.round(rand);
  }
  while (true) {
var sum = prompt("Введіть суму ставки:");
if (isNaN(sum) == true || sum <= 0) continue
    else break
  }
    var num = randomInteger(-5, 5)  
    



function check ()
    {
if(num<=0)
{ 
    setTimeout('',2000)
    
    alert("Ви програли:(")
    

    
}
else
{
setTimeout('',2000)
var reward = num * sum

alert('Ви виграли ' + reward + ' гривень')


}
    }
   
    setTimeout('check()',1000)
