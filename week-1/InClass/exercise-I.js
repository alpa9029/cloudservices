console.log("Hello World!")
function birthYear(year) {
    return 2023 - year;
  }
  
  function nameYear(name, year) {
    const yearBirth = birthYear(year);
    const message =
      "Your name is " + name + " and you were born in  " + yearBirth;
    return message;
  }