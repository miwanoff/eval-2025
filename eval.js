let expr = "";
let f;
let x = prompt("Input x");
expr = prompt("Input expression like x * x");
let fstr = 'f = function (x) {return ' + expr + ';}'
//console.log(fstr); 
eval(fstr);
let quadratic = f(x);
alert(quadratic);