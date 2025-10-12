let expr = "";
let f;
let x = prompt("Input x");
expr = prompt("Input expression like x * x");
let fstr = 'f = function (x) {return ' + expr + ';}'
//console.log(fstr); 
eval(fstr);
alert(f(x));

let fF = new Function("x", "return " + expr);
alert(fF(x));