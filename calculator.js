

// const display = document.getElementById('display');

// console.log(display,"display");

function HandleOnClick(value)
{
    // console.log( input,"input")
    document.getElementById("display").value += value;

    console.log( input,"input1")
}

function calucalate()
{
 try{
    document.getElementById("display").value = eval(display.value);
 }
 catch(error){
    document.getElementById("display").value= "Error";
 }
}

function clearDisplay()
{
    document.getElementById("display").value  = '';
}