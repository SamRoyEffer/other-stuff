const whichSchool = function (age) {
  
  
  if ((age >= 1) && (age <= 12)) {
    return "Elementary School"; 
    // Tell which school 1 to 12 year olds can got to
    
  } else  if ((age >= 13) && (age <= 18)){
    return "Secondary School";
    // Returns which school 13 to 18 years can go to
    
  } else if ((age = 18) && (age <= 100)) {
    return "Lighthouse Labs";
    // Returns which school anyone over the age of 18 and below 100 can go to
    
  }
};

console.log("I am 35. Which school should I go to?");

console.log(whichSchool(35));

console.log("I am 8. Which school should I go to?");

console.log(whichSchool(8));

console.log("I am 14. Which school should I go to?");

console.log(whichSchool(14));