let prompt = require('prompt-sync')();
let enter = prompt('you want to login yes or no');

if(enter == "yes"){
    
    console.log(` here's youu otp ${(Math.trunc((Math.random()*9000)+1000))}`);
}
else console.log("please say yes or no");