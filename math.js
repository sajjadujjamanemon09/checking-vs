const result = Math.pow(3, 2);
console.log(result);

const num1= 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if (gap < 5){
    console.log('you are friends');
}
else {
    console.log('stay away')
}


// ----------------------------------------------------------------------

const number = 2.89999;
const fullNumber = Math.round(number);
console.log(fullNumber)

const result2 = Math.ceil(2.0001);
console.log(result2)
const result3 = Math.floor(456.259);
console.log(result3);

// ---------------------------------------------
// random

console.log (Math.random());
console.log (Math.random()*100);

for ( let i = 0; i <20 ; i++){
    const random1 = Math.round(Math.random()*6);
    console.log(random1)
}
