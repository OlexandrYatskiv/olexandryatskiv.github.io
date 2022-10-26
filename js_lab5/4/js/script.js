let str = prompt("Текс з коментарем")

function checkComment(str) {

    if (!str.length)
        alert("Немає коментарів");
    var template = RegExp("<!--(.*?)-->", "g")
    str = str.replace(template, "");
    if (str != "")
        alert("Немає коментарів");
}

checkComment(str)
