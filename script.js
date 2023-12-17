const keyboard = document.querySelector(".keyboard");

function genKeyboard(){
    for(let i=0;i<150;i++){
        keyboard.innerHTML+="<div class=\"key key1\"></div>";
    }
}

const html = document.querySelector("html");
const body = document.querySelector("body");
html.addEventListener("keydown", (e)=>{body.innerText+=`<div class="key ${e.code}"></div>\n`})

//genKeyboard();