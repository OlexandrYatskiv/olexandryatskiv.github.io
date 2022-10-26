function checkNumber(Str) {
    Str = Str.replace(/[\s\-,(,)]/g, '');
    return Str.match(/^(((0)?3)?2)?((2)9)\d{5}$/)!= null;

}
  function showCheck(Str) {
    console.log(checkNumber(Str));
  }





