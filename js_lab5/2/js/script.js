function checkCityIndex(Str) {
    
    return Str.match(/^((7)9)\d{3}$/) != null;
  }
  
  function showCheck(Str) {
    console.log(checkCityIndex(Str));
  }