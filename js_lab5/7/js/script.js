function checkYear(str) {
    str = str.replace(/[\s\-,(,)]/g, '');
    return str.match(/^[1-2]{1}[9|0]{1}[7|9|9|0|1|2]{1}[0-9]{1}$/)!= null;

}
  function showCheck(str) {
    alert(checkYear(str));
  }
