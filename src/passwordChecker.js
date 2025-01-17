function passwordChecker(password) {
    // 1) min 8 chars
    if (password.length < 8) {
      return false;
    }
     // 2) at least one special character
     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
     if (!specialCharRegex.test(password)) {
       return false;
     }

    return true;
  }

  module.exports = passwordChecker;