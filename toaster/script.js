let main = document.querySelector("#main");
let form = document.querySelector("form");
let inp = document.querySelector("#inp");

function createToaster(config) {
    return function (str) {
        let div = document.createElement("div");

        div.textContent = str;
        div.style.backgroundColor = config.bgColor;
        div.style.color = config.color;
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.style.borderRadius = "5px";

        main.appendChild(div);

        // Remove toast after 3 seconds
        setTimeout(() => {
            div.remove();
        }, 3000);
    };
}

let toaster = createToaster({
    bgColor: "green",
    color: "white"
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (inp.value.trim() === "") return;

    toaster(inp.value);
    inp.value = "";
});