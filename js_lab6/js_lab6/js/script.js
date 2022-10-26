function start() {
    let elementsH = document.getElementsByTagName('h3')
    let elementsP = document.getElementsByTagName('p')
    let tabel = document.getElementById('mytbl')
    for (let i = 0; i < 1; i++) {
        for (let j = 0; j < 3; j++) {
            tabel.rows[i].cells[j].textContent = elementsH[j].textContent
            tabel.rows[i + 1].cells[j].textContent = elementsP[j].textContent
        }
    }

    let list = document.getElementById("top");
    for (let i = 0; list.hasChildNodes(); i++) {
        if (i == 12) { break }
        list.removeChild(list.firstChild)
    }
    let img = document.createElement('img')
    img.src = "/img/Гіга.jpg"
    img.style = "height: 200px; display: block; margin: 0 auto;"
    document.body.prepend(img);
    let elementsI = document.getElementsByTagName('img')
    elementsI[1].remove()



}
