function passwordChecker(password) {
    // 1) min 8 chars
    if (password.length < 8) {
      return false;
    }


    return true;
  }

  module.exports = passwordChecker;