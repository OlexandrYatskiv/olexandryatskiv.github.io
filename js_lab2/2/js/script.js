let button1 = document.getElementById('button1')
button1.onclick = showConfitm
function showConfitm(event) {
    if(confirm('Ви хочете відкрити вкладку?'))
    {
      window.open('https://www.google.com/')
    }else 
        window.close()
  }

 