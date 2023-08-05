const userName = 'blackpink';
const userInput = 'BLACKPINK';
console.log(userName.toUpperCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());

if ( userName.toLowerCase() == userInput.toLowerCase() ){
    console.log('valid user')
}
else {
    console.log('invalid user')
}