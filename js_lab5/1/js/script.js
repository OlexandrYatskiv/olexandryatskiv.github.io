function checkNumber(PhoneNumber) {
    PhoneNumber = PhoneNumber.replace(/[\s\-]/g, '');
    return PhoneNumber.match(/^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))\d{7}$/) != null;
  }
  
  function showCheck(PhoneNumber) {
    console.log(checkNumber(PhoneNumber));
  }