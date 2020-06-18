function passwordIsValid(password) {
  try {
    if (password == "") throw "password cannot be Empty";
    if (password.length <= 8)
      throw "password should be longer than 8 characters";
    if (password.match(/[a-z]/) == null)
      throw "password should have at least one lowercase letter.";
    if (password.match(/[A-Z]/) == null)
      throw "password should have at least one uppercase letter.";
    if (password.match(/[0-9]/) == null)
      throw "password should have at least one digit.";
    if (password.match(/[{ # % & * " ' ! @ $ ^]/) == null)
      throw "password should have at least one special character.";
  } catch (error) {
    console.log(error);
  }
}

passwordIsValid("SIBO@G=g97@$>");

function passwordIsOk(password0) {
  let smallLetter = /^[a-z]/g;
  let bigLetter = /^[A-Z]/g;
  let numbers = /^[0-9]/g;
  let specialChar = /^[\[\#\?\*\&\^\%\$\"\'\@\_]/g;
  let result = true;

  if (password0.length > 8 && password0 != "") {
    if (
      bigLetter.test(password0) ||
      smallLetter.test(password0) ||
      numbers.test(password0) ||
      specialChar.test(password0)
    ) {
      result = true;
    }
  } else {
    result = false;
  }
  return result;
}
console.log(passwordIsOk("SIBO@G=g97@$>"));
module.exports = {
  passwordIsValid,
  passwordIsOk,
};
