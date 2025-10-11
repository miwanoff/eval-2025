"use script";
let val1 = 0;
let val2 = 0;
result = 0;

let action = "";

function add() {
  val1 = +document.getElementById("num").value;
  console.log(val1);
  action = "+";
}

function minus() {
  val1 = +document.getElementById("num").value;
  console.log(val1);
  action = "-";
}

function calc() {
  val2 = +document.getElementById("num").value;
  let expr = `${val1} ${action} ${val2}`;
  console.log(expr);
  result = eval(expr);
  document.getElementById("num").value = result;
}

function reset() {
  val1 = 0;
  val2 = 0;
  result = 0;
  action = "";
  document.getElementById("num").value = 0;
}
