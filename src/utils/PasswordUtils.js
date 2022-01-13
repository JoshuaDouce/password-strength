const hasLowerCase = (password) => {
  const regexLowerCase = new RegExp('(?=.*[a-z])');

  return regexLowerCase.test(password);
};

const hasUpperCase = (password) => {
  const regexUpperCase = new RegExp('(?=.*[A-Z])');

  return regexUpperCase.test(password);
};

const hasNumber = (password) => {
  const regexOneNumeric = new RegExp('(?=.*\\d)');

  return regexOneNumeric.test(password);
};

const hasSpecialCharacter = (password) => {
  const regexOneSpecial = new RegExp('(?=.*[-+_!@#$%^&*., ?])');

  return regexOneSpecial.test(password);
};

const isLongEnough = (password) => {
  return password.length > 7;
};

const isValid = (password) => {
  const validPassword = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$');

  return validPassword.test(password) && isLongEnough(password);
};

export { hasLowerCase, hasUpperCase, hasNumber, hasSpecialCharacter, isLongEnough, isValid };
