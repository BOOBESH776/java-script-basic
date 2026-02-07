let num = 153;  
let sum = 0;

// Convert number to string to loop through digits

let digits = num.toString();

for (let i = 0; i < digits.length; i++)
  
{
  let digit = Number(digits[i]);
  sum = sum + digit ** digits.length;   
}

if (sum === num) {
  console.log(num + " is an Armstrong number");
} 
else {
  console.log(num + " is NOT an Armstrong number");
}


