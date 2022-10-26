let str = prompt("Введіть текст з тегами")

function checkTag(str) {

    if (!str.length)
        alert("Немає таких тегів");
    var template = new RegExp("<p>|<br>|<font>|<hr>", "g");
    str = str.replace(template, "");
    if (str != "")
        alert("Немає таких тегів");
}

checkTag(str)
alert("Текст ->" + str);