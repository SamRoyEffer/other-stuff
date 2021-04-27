/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */
 
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 0.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
        //Checks if there is money and the account is active

    } else if (isActive === false) {
        console.log("Your account is no longer active.");
        //Checks if the account is active or not
        
    } else if (isActive === true && balance === 0) {
        console.log("Your account is empty.");
        // Checks if the account is active and there is not money

    } else if (isActive === true && balance < 0) {
        console.log("Your balance is negative. Please contact bank.");
        //Checks if account is active and the balance is negative

    }
} else if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");  
}