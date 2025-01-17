const passwordChecker = require('../src/passwordChecker');
     describe('passwordChecker tests', () => {
       test('Should fail if less than 8 chars', () => {
         expect(passwordChecker('Ab!1')).toBe(false);
       });

       test('Should fail if special character not present', () => {
        expect(passwordChecker('Abcd75524')).toBe(false);
      });

     });