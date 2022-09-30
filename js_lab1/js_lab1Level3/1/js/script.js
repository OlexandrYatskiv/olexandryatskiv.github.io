let studentcount
let studentName
while (true) {
    studentcount = +prompt("Введіть кількість студентів");
    if (Number.isInteger(studentcount) == false || studentcount <= 0) continue;
    else break;
}

for (let i = 0; i < studentcount; i++) {    
    studentName =prompt("Введіть студента")
    document.write(studentName)
    document.write("<br><br>")
    
}


