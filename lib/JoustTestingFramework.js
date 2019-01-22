const describe = (description, fn) => {
   console.log(description);
   fn();
}

const it = (message, fn) => describe('  ' + message, fn)

const expect = (exp) => matchers(exp)

const matchers = (exp) => ({
  toEqual: (assertion) => {
    if (exp === assertion) {
      console.log(`%c${exp} is equal to ${assertion}`, 'color: limegreen')
      return true
    } else {
      console.log(`%c${exp} is not equal to ${assertion}`, 'color: red')
      return false
    }
  },

  toThrowError: (error) => {
    try {
     exp();
   }
   catch(err) {
     var caughtErrorText = err.toString();
    }
    finally {
       var errorText = 'Error: ' + error
       if (errorText === caughtErrorText) {
       console.log(`%c"${caughtErrorText}" has been thrown!`,'color: limegreen')
       } else {
        console.log(`%c"${caughtErrorText}" has not been thrown even though it should have been.`, 'color: red')
       }
   }
 }
  })
