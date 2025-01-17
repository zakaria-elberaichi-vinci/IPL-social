function passwordChecker(password) {
    
    if (password.length < 8) {
      return false;
    }
     
     const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
     if (!specialCharRegex.test(password)) {
       return false;
     }

     const digitRegex = /\d/;
     if (!digitRegex.test(password)) {
       return false;
     }

      if (password.toLowerCase().includes('ipl')) {
        return false;
      }
    return true;
  }

  module.exports = passwordChecker;