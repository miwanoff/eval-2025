try {
  let expr = "";
  let f;
  let x = prompt("Input x");
  if (isNaN(x)){
    throw new Error("Ви ввели не число!");    
  }
  expr = prompt("Input expression like x * x");
  let fstr = "f = function (x) {return " + expr + ";}";
  //console.log(fstr);
  eval(fstr);
  alert(f(x));

//   let fF = new Function("x", "return " + expr);
//   alert(fF(x));
} catch (ex) {
  alert("Вибачте, виникла помилка: " + ex.message);
}
