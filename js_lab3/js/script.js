var task1 = new Date('2021-02-20')
task1.setHours(3,12)


document.getElementById('task1').innerHTML = task1;

//----------------------------------task2
function getWeekDay(date) {
    let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ','НД'];
  
    return( days[date.getDay()])
  }
  
let task2 = new Date(2012, 0 ,3)

document.getElementById('task2').innerHTML = getWeekDay(task2);
//--------------------------------------task3


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }
  document.getElementById('task3.1').innerHTML = getLastDayOfMonth(2020, 1);
  

  function getSecondsToTomorrow() {
    let now = new Date();
  
    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
   
  }
  
  document.getElementById('task3.2').innerHTML = getSecondsToTomorrow();


//--------------------------------------task4
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматування
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо зараз';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} хв. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
  }
  
  document.writeln('<br>'+ formatDate(new Date(new Date - 1)) ); // "прямо зараз"
  
  document.writeln( '<br>'+formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
  
  document.writeln('<br>'+ formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 хв. назад"
  
  // вчорашня дата, як 31.12.2016 20:00
  document.writeln( '<br>'+formatDate(new Date(new Date - 86400 * 1000)) );