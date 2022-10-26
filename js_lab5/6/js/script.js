
var str = prompt("Введіть текст з пробілами")


function removeRedundantSpaces(str)
{
var extraSpaces = new RegExp("[ ]{2,}","g");
return str.replace(extraSpaces," ");
}


alert(removeRedundantSpaces(str))

