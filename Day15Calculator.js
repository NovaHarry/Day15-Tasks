let Op = document.getElementById("inputscreen");

function clicking(event)
{
    operator = ['+','-','/','*','='];
    if(!(operator.includes(Op.value.slice(-1)) && operator.includes(event.innerText)))
    {
    Op.value += event.innerText;
    }
    else
    {
        alert("Only Numbers are allowed");
    }
}
function calc()
{
    Op.value = eval(Op.value);
}
function clrAll()
{
    Op.value= "";
}
function del()
{
    Op.value = Op.value.slice(0,-1);
}

window.addEventListener('keydown',(event)=>{
    operator = ['+','-','/','*','='];
    key = event.key;
    code = event.code;
    if(!(operator.includes(Op.value.slice(-1)) && operator.includes(event.key)))
    {
    if(code.includes('Digit') || operator.includes(key))
    {
        Op.value += event.key;
    }
    else if(code.includes('Backspace'))
    {
        Op.value = Op.value.slice(0,-1);
    }
    else if(key.includes("Enter"))
    {
        Op.value = eval(Op.value);
    }
    }
    else
    {
        alert("Only Numbers are allowed");
    }
})