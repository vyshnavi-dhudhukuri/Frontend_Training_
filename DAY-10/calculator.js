function calculateResult(){
    let display = document.getElementById("display");
    let answer = eval(display.innerHTML);
    display.innerHTML=answer;
}
function pressnumber(number){
    let display = document.getElementById("display");
    display.innerHTML += number;
}
function pressoperator(operator){
    let display = document.getElementById("display");
    let lastChar = display.innerHTML[display.innerHTML.length - 1];

    if (
        lastChar == '+' ||
        lastChar == '-' ||
        lastChar == '*' ||
        lastChar == '/'
    ){
       display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
       
    }
    display.innerHTML += operator;
}
function resetcalculator(){
    let display = document.getElementById("display");
    display.innerHTML = "";
}
function deletenumber(){
    let display = document.getElementById("display");
    let str = display.innerHTML.length;
    let res = display.innerHTML.slice(0,str - 1);
    display.innerHTML=res;
}
