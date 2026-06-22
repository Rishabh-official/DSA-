let main = document.querySelector("#main");
let form = document.querySelector("form");
let inp = document.querySelector("#inp");
function createToaster(config){
    return function(str){
     let div = document.createElement("div");
     div.textContent = str;
     document.querySelector("#main").appendChild(div);
    }
}

form.addEventListener("submit",function(dets){
    dets.preventDefault();
    console.log(dets);
    toaster(`${inp.value}`)
})
let toaster = createToaster({
  name : `${inp.value}`,
})
