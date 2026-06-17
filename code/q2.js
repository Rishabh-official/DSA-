// heron's problem of triangle

let prompt = require('prompt-sync')();
let a = Number(prompt('enter the first side: '));
let b = Number(prompt('enter the first side: '));
let c = Number(prompt('enter the first side: '));

let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
if(a,b,c>0 && a+b>=c && a+c >=b && b+c>=a){
    console.log(`the area of triangle is : ${area}`);
}
else console.log('it is not validate the rule of triangle');


// shou;d be optimized when we handle the input too 
// input should not be negative