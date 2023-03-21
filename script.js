// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  var charOptions  = ["special", "numeric", "lowercase","uppercase"];
  // Function to prompt user for password options
  var userChoice = Number(prompt('Enter password lenght (Min. 8 characters - Max 20 characters'));  
  for (var i = 0; i < 127; i++) {
    if (userChoice === 8 || userChoice > 8 && userChoice < 128) {
      alert('Select the desired character types:' + charOptions); 
    }
    // Confirmation
    var specialCharactersChoice = confirm('Would you like to include special characters?');
    var numericCharactersChoice = confirm('Would you like to include numers?');
    var lowerCharactersChoice = confirm('Would you like to include lowercase characters?');
    var upperCharactersChoice = confirm('Would you like to include uppercase characters?');
  
    return {
    userChoice: numericCharactersChoice,
    specialCharactersChoice:specialCharactersChoice,
    numericCharactersChoice:numericCharactersChoice,
    lowerCharactersChoice:lowerCharactersChoice,
    upperCharactersChoice:upperCharactersChoice
    };
  }
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
    }
  
  // Function to generate password with user input
  function generatePassword() {
    getPasswordOptions();
    return "test password";
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
