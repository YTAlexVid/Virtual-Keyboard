//defining constants
const engLayout = '<div class="key key2 Backquote"><div class="keySymbol">`</div><div class="keySymbol keySymbol_upper">~</div></div>\n' + '        <div class="key key2 Digit1"><div class="keySymbol">1</div><div class="keySymbol keySymbol_upper">!</div></div>\n' + '        <div class="key key2 Digit2"><div class="keySymbol">2</div><div class="keySymbol keySymbol_upper">@</div></div>\n' + '        <div class="key key2 Digit3"><div class="keySymbol">3</div><div class="keySymbol keySymbol_upper">#</div></div>\n' + '        <div class="key key2 Digit4"><div class="keySymbol">4</div><div class="keySymbol keySymbol_upper">$</div></div>\n' + '        <div class="key key2 Digit5"><div class="keySymbol">5</div><div class="keySymbol keySymbol_upper">%</div></div>\n' + '        <div class="key key2 Digit6"><div class="keySymbol">6</div><div class="keySymbol keySymbol_upper">^</div></div>\n' + '        <div class="key key2 Digit7"><div class="keySymbol">7</div><div class="keySymbol keySymbol_upper">&</div></div>\n' + '        <div class="key key2 Digit8"><div class="keySymbol">8</div><div class="keySymbol keySymbol_upper">*</div></div>\n' + '        <div class="key key2 Digit9"><div class="keySymbol">9</div><div class="keySymbol keySymbol_upper">(</div></div>\n' + '        <div class="key key2 Digit0"><div class="keySymbol">0</div><div class="keySymbol keySymbol_upper">)</div></div>\n' + '        <div class="key key2 Minus"><div class="keySymbol">-</div><div class="keySymbol keySymbol_upper">_</div></div>\n' + '        <div class="key key2 Equal"><div class="keySymbol">=</div><div class="keySymbol keySymbol_upper">+</div></div>\n' + '        <div class="key key4 Backspace"><div class="keySymbol">Backspace</div></div>\n' + '        <div class="key key2 Tab"><div class="keySymbol">Tab</div></div>\n' + '        <div class="key key2 KeyQ"><div class="keySymbol">Q</div></div>\n' + '        <div class="key key2 KeyW"><div class="keySymbol">W</div></div>\n' + '        <div class="key key2 KeyE"><div class="keySymbol">E</div></div>\n' + '        <div class="key key2 KeyR"><div class="keySymbol">R</div></div>\n' + '        <div class="key key2 KeyT"><div class="keySymbol">T</div></div>\n' + '        <div class="key key2 KeyY"><div class="keySymbol">Y</div></div>\n' + '        <div class="key key2 KeyU"><div class="keySymbol">U</div></div>\n' + '        <div class="key key2 KeyI"><div class="keySymbol">I</div></div>\n' + '        <div class="key key2 KeyO"><div class="keySymbol">O</div></div>\n' + '        <div class="key key2 KeyP"><div class="keySymbol">P</div></div>\n' + '        <div class="key key2 BracketLeft"><div class="keySymbol">[</div></div>\n' + '        <div class="key key2 BracketRight"><div class="keySymbol">]</div></div>\n' + '        <div class="key key2 Backslash"><div class="keySymbol">\\</div><div class="keySymbol keySymbol_upper">|</div></div>\n' + '        <div class="key key2 Delete"><div class="keySymbol">Del</div></div>\n' + '        <div class="key key4 CapsLock"><div class="keySymbol">Caps Lock</div></div>\n' + '        <div class="key key2 KeyA"><div class="keySymbol">A</div></div>\n' + '        <div class="key key2 KeyS"><div class="keySymbol">S</div></div>\n' + '        <div class="key key2 KeyD"><div class="keySymbol">D</div></div>\n' + '        <div class="key key2 KeyF"><div class="keySymbol">F</div></div>\n' + '        <div class="key key2 KeyG"><div class="keySymbol">G</div></div>\n' + '        <div class="key key2 KeyH"><div class="keySymbol">H</div></div>\n' + '        <div class="key key2 KeyJ"><div class="keySymbol">J</div></div>\n' + '        <div class="key key2 KeyK"><div class="keySymbol">K</div></div>\n' + '        <div class="key key2 KeyL"><div class="keySymbol">L</div></div>\n' + '        <div class="key key2 Semicolon"><div class="keySymbol">;</div></div>\n' + '        <div class="key key2 Quote"><div class="keySymbol">\'</div></div>\n' + '        <div class="key key4 Enter"><div class="keySymbol">Enter</div></div>\n' + '        <div class="key key4 ShiftLeft"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key2 IntlBackslash"><div class="keySymbol">\\</div></div>\n' + '        <div class="key key2 KeyZ"><div class="keySymbol">Z</div></div>\n' + '        <div class="key key2 KeyX"><div class="keySymbol">X</div></div>\n' + '        <div class="key key2 KeyC"><div class="keySymbol">C</div></div>\n' + '        <div class="key key2 KeyV"><div class="keySymbol">V</div></div>\n' + '        <div class="key key2 KeyB"><div class="keySymbol">B</div></div>\n' + '        <div class="key key2 KeyN"><div class="keySymbol">N</div></div>\n' + '        <div class="key key2 KeyM"><div class="keySymbol">M</div></div>\n' + '        <div class="key key2 Comma"><div class="keySymbol">,</div></div>\n' + '        <div class="key key2 Period"><div class="keySymbol">.</div></div>\n' + '        <div class="key key2 Slash"><div class="keySymbol">/</div></div>\n' + '        <div class="key key2 ArrowUp"><div class="keySymbol">Up</div></div>\n' + '        <div class="key key2 ShiftRight"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key3 ControlLeft"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 MetaLeft"><div class="keySymbol">Win</div></div>\n' + '        <div class="key key2 AltLeft"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key12 Space"><div class="keySymbol"> </div></div>\n' + '        <div class="key key2 AltRight"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key3 ControlRight"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 ArrowLeft"><div class="keySymbol">Left</div></div>\n' + '        <div class="key key2 ArrowDown"><div class="keySymbol">Down</div></div>\n' + '        <div class="key key2 ArrowRight"><div class="keySymbol">Right</div></div>'
const rusLayout = '<div class="key key2 Backquote"><div class="keySymbol">Ё</div></div>\n' + '        <div class="key key2 Digit1"><div class="keySymbol">1</div><div class="keySymbol keySymbol_upper">!</div></div>\n' + '        <div class="key key2 Digit2"><div class="keySymbol">2</div><div class="keySymbol keySymbol_upper">"</div></div>\n' + '        <div class="key key2 Digit3"><div class="keySymbol">3</div><div class="keySymbol keySymbol_upper">№</div></div>\n' + '        <div class="key key2 Digit4"><div class="keySymbol">4</div><div class="keySymbol keySymbol_upper">;</div></div>\n' + '        <div class="key key2 Digit5"><div class="keySymbol">5</div><div class="keySymbol keySymbol_upper">%</div></div>\n' + '        <div class="key key2 Digit6"><div class="keySymbol">6</div><div class="keySymbol keySymbol_upper">:</div></div>\n' + '        <div class="key key2 Digit7"><div class="keySymbol">7</div><div class="keySymbol keySymbol_upper">?</div></div>\n' + '        <div class="key key2 Digit8"><div class="keySymbol">8</div><div class="keySymbol keySymbol_upper">*</div></div>\n' + '        <div class="key key2 Digit9"><div class="keySymbol">9</div><div class="keySymbol keySymbol_upper">(</div></div>\n' + '        <div class="key key2 Digit0"><div class="keySymbol">0</div><div class="keySymbol keySymbol_upper">)</div></div>\n' + '        <div class="key key2 Minus"><div class="keySymbol">-</div><div class="keySymbol keySymbol_upper">_</div></div>\n' + '        <div class="key key2 Equal"><div class="keySymbol">=</div><div class="keySymbol keySymbol_upper">+</div></div>\n' + '        <div class="key key4 Backspace"><div class="keySymbol">Backspace</div></div>\n' + '        <div class="key key2 Tab"><div class="keySymbol">Tab</div></div>\n' + '        <div class="key key2 KeyQ"><div class="keySymbol">Й</div></div>\n' + '        <div class="key key2 KeyW"><div class="keySymbol">Ц</div></div>\n' + '        <div class="key key2 KeyE"><div class="keySymbol">У</div></div>\n' + '        <div class="key key2 KeyR"><div class="keySymbol">К</div></div>\n' + '        <div class="key key2 KeyT"><div class="keySymbol">Е</div></div>\n' + '        <div class="key key2 KeyY"><div class="keySymbol">Н</div></div>\n' + '        <div class="key key2 KeyU"><div class="keySymbol">Г</div></div>\n' + '        <div class="key key2 KeyI"><div class="keySymbol">Ш</div></div>\n' + '        <div class="key key2 KeyO"><div class="keySymbol">Щ</div></div>\n' + '        <div class="key key2 KeyP"><div class="keySymbol">З</div></div>\n' + '        <div class="key key2 BracketLeft"><div class="keySymbol">Х</div></div>\n' + '        <div class="key key2 BracketRight"><div class="keySymbol">Ъ</div></div>\n' + '        <div class="key key2 Backslash"><div class="keySymbol">\\</div><div class="keySymbol keySymbol_upper">/</div></div>\n' + '        <div class="key key2 Delete"><div class="keySymbol">Del</div></div>\n' + '        <div class="key key4 CapsLock"><div class="keySymbol">Caps Lock</div></div>\n' + '        <div class="key key2 KeyA"><div class="keySymbol">Ф</div></div>\n' + '        <div class="key key2 KeyS"><div class="keySymbol">Ы</div></div>\n' + '        <div class="key key2 KeyD"><div class="keySymbol">В</div></div>\n' + '        <div class="key key2 KeyF"><div class="keySymbol">А</div></div>\n' + '        <div class="key key2 KeyG"><div class="keySymbol">П</div></div>\n' + '        <div class="key key2 KeyH"><div class="keySymbol">Р</div></div>\n' + '        <div class="key key2 KeyJ"><div class="keySymbol">О</div></div>\n' + '        <div class="key key2 KeyK"><div class="keySymbol">Л</div></div>\n' + '        <div class="key key2 KeyL"><div class="keySymbol">Д</div></div>\n' + '        <div class="key key2 Semicolon"><div class="keySymbol">Ж</div></div>\n' + '        <div class="key key2 Quote"><div class="keySymbol">Э</div></div>\n' + '        <div class="key key4 Enter"><div class="keySymbol">Enter</div></div>\n' + '        <div class="key key4 ShiftLeft"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key2 IntlBackslash"><div class="keySymbol">\\</div></div>\n' + '        <div class="key key2 KeyZ"><div class="keySymbol">Я</div></div>\n' + '        <div class="key key2 KeyX"><div class="keySymbol">Ч</div></div>\n' + '        <div class="key key2 KeyC"><div class="keySymbol">С</div></div>\n' + '        <div class="key key2 KeyV"><div class="keySymbol">М</div></div>\n' + '        <div class="key key2 KeyB"><div class="keySymbol">И</div></div>\n' + '        <div class="key key2 KeyN"><div class="keySymbol">Т</div></div>\n' + '        <div class="key key2 KeyM"><div class="keySymbol">Ь</div></div>\n' + '        <div class="key key2 Comma"><div class="keySymbol">Б</div></div>\n' + '        <div class="key key2 Period"><div class="keySymbol">Ю</div></div>\n' + '        <div class="key key2 Slash"><div class="keySymbol">.</div></div>\n' + '        <div class="key key2 ArrowUp"><div class="keySymbol">Up</div></div>\n' + '        <div class="key key2 ShiftRight"><div class="keySymbol">Shift</div></div>\n' + '        <div class="key key3 ControlLeft"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 MetaLeft"><div class="keySymbol">Win</div></div>\n' + '        <div class="key key2 AltLeft"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key12 Space"><div class="keySymbol"> </div></div>\n' + '        <div class="key key2 AltRight"><div class="keySymbol">Alt</div></div>\n' + '        <div class="key key3 ControlRight"><div class="keySymbol">Ctrl</div></div>\n' + '        <div class="key key2 ArrowLeft"><div class="keySymbol">Left</div></div>\n' + '        <div class="key key2 ArrowDown"><div class="keySymbol">Down</div></div>\n' + '        <div class="key key2 ArrowRight"><div class="keySymbol">Right</div></div>'
const keyboard = document.querySelector(".keyboard");
const textField = document.querySelector(".textField");
const body = document.querySelector("body");
const layouts = [engLayout, rusLayout];
const controlKeys = {Shift: false, Control: false, Alt: false, CapsLock: false};

//on page load init
textField.value='';
let capsCd=false;
let curLayout = +localStorage.getItem('curLayout');
keyboard.innerHTML = layouts[curLayout];

switch(+localStorage.getItem('theme')){
    case 1:
        setTheme1();
        break;
    case 2:
        setTheme2();
        break;
    case 3:
        setTheme3();
        break;
}

//theme click event listeners
document.querySelector('.themeKey1').addEventListener('click', ()=>{
    setTheme1();
})
function setTheme1(){
    localStorage.setItem('theme', 1);
    changeStylesheetRule(document.styleSheets[1], '.key', 'border', 'solid 3px darkslateblue');
    changeStylesheetRule(document.styleSheets[1], 'body', 'background', 'rgb(29, 37, 47)');
    changeStylesheetRule(document.styleSheets[1], 'body', 'color', 'white');
    changeStylesheetRule(document.styleSheets[1], '.active', 'background', 'rgb(91, 77, 177)');
    changeStylesheetRule(document.styleSheets[1], '.clickActive', 'background', 'rgb(91, 77, 177)');
}
document.querySelector('.themeKey2').addEventListener('click', ()=>{
    setTheme2()
})
function setTheme2(){
    localStorage.setItem('theme', 2);
    changeStylesheetRule(document.styleSheets[1], '.key', 'border', 'solid 3px deeppink');
    changeStylesheetRule(document.styleSheets[1], 'body', 'background', 'white');
    changeStylesheetRule(document.styleSheets[1], 'body', 'color', 'black');
    changeStylesheetRule(document.styleSheets[1], '.active', 'background', 'hotpink');
    changeStylesheetRule(document.styleSheets[1], '.clickActive', 'background', 'hotpink');
}
document.querySelector('.themeKey3').addEventListener('click', ()=>{
    setTheme3()
})
function setTheme3(){
    localStorage.setItem('theme', 3);
    changeStylesheetRule(document.styleSheets[1], '.key', 'border', 'solid 3px black');
    changeStylesheetRule(document.styleSheets[1], 'body', 'background', 'white');
    changeStylesheetRule(document.styleSheets[1], 'body', 'color', 'black');
    changeStylesheetRule(document.styleSheets[1], '.active', 'background', 'darkgray');
    changeStylesheetRule(document.styleSheets[1], '.clickActive', 'background', 'darkgray');
}


body.addEventListener("keydown", (e)=>{
    e.preventDefault();

    //define, check, activate key on virtual keyboard
    let el = keyboard.querySelector(`.${e.code}`);
    if(el==null) return;
    if(!el.classList.contains('active')) el.classList.toggle('active');

    //save control keys state
    controlKeys["Shift"]=e.shiftKey;
    controlKeys["Control"]=e.ctrlKey;
    controlKeys["Alt"]=e.altKey;
    if(!capsCd && e.code==='CapsLock'){
        controlKeys["CapsLock"]=!controlKeys["CapsLock"];
        capsCd=true;
    }

    keyPress(el, e.code);
})
body.addEventListener("keyup", (e)=>{

    //define, check, deactivate key on virtual keyboard
    let el = keyboard.querySelector(`.${e.code}`);
    if(el==null) return;
    if(el.classList.contains('active')) el.classList.toggle('active');

    keyUnpress(el, e.code);

    //save control keys state
    controlKeys["Shift"]=e.shiftKey;
    controlKeys["Control"]=e.ctrlKey;
    controlKeys["Alt"]=e.altKey;
    if(e.code==='CapsLock'){
        capsCd=false;
    }
})
keyboard.addEventListener("click", (e)=>{

    //define, check, activate key on virtual keyboard
    let el = e.target.closest('.key')
    if(el===null) return;
    if(!el.classList.contains('clickActive')) el.classList.toggle('clickActive');
    if(el.classList.item(2)==='CapsLock'){
        controlKeys["CapsLock"]=!controlKeys["CapsLock"];
    }
    keyPress(el, el.classList.item(2));
    keyUnpress(el, el.classList.item(2));
    setTimeout(`if(document.querySelector('.${el.classList.item(2)}').classList.contains('clickActive')) document.querySelector('.${el.classList.item(2)}').classList.toggle('clickActive')`, 150);

    //check hotkeys
    if(controlKeys["Shift"] && el.classList.item(2)=== 'AltLeft'
        || controlKeys["Alt"] && el.classList.item(2).includes('Shift')){
        curLayout = (curLayout+1)%2;
        keyboard.innerHTML = layouts[curLayout];
        localStorage.setItem('curLayout', curLayout);
    }
})
function keyPress(el, keyCode){
    //edit textarea
    let keyText = el.querySelector('.keySymbol').innerText;

    if(controlKeys['Control'] && keyCode === 'KeyC'){
        navigator.clipboard.writeText(textField.value);
        return;
    }
    if(controlKeys['Control'] && keyCode === 'KeyV'){
        navigator.clipboard.readText().then(text=>textField.value+=text);
        return;
    }
    if(controlKeys['Control'] && keyCode === 'Digit1'){
        setTheme1();
        return;
    }
    if(controlKeys['Control'] && keyCode === 'Digit2'){
        setTheme2();
        return;
    }
    if(controlKeys['Control'] && keyCode === 'Digit3'){
        setTheme3();
        return;
    }

    if(keyText.length===1){
        if(el.querySelector('.keySymbol_upper')!==null && controlKeys['Shift']){
            textField.value+=el.querySelector('.keySymbol_upper').innerText;
        }
        else if(controlKeys['Shift'] ^ controlKeys['CapsLock']){
            textField.value+=el.querySelector('.keySymbol').innerText;
        }
        else{
            textField.value+=el.querySelector('.keySymbol').innerText.toLowerCase();
        }
    }
    else{
        switch(keyCode){
            case 'Space':
                textField.value+=' ';
                break;
            case 'Backspace':
                if (textField.value != null && textField.value.length > 0) {
                    textField.value = textField.value.substring(0, textField.value.length - 1);
                }
                break;
            case 'Tab':
                textField.value+='\t';
                break;
            case 'Enter':
                textField.value+='\n';
                break;
            case 'ArrowUp':
                textField.value+='↑';
                break;
            case 'ArrowLeft':
                textField.value+='←';
                break;
            case 'ArrowDown':
                textField.value+='↓';
                break;
            case 'ArrowRight':
                textField.value+='→';
                break;

        }

    }

}
function keyUnpress(el, keyCode){
    //check hotkeys
    if(controlKeys['Shift'] && keyCode === 'AltLeft'
        ||  controlKeys['Alt'] && keyCode.contains('Shift')){
        curLayout = (curLayout+1)%2;
        keyboard.innerHTML = layouts[curLayout];
        localStorage.setItem('curLayout', curLayout);
    }
}
function changeStylesheetRule(stylesheet, selector, property, value) {
    // Change it if it exists
    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        let rule = stylesheet.cssRules[i];
        if(rule.selectorText === selector) {
            rule.style[property] = value;
            return;
        }
    }
}