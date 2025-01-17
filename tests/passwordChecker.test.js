const passwordChecker = require('../src/passwordChecker');
     describe('passwordChecker tests', () => {
       test('Should fail if less than 8 chars', () => {
         expect(passwordChecker('Ab!1')).toBe(false);
       });
     });