function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1' cellspacing='0'>");
  document.write("<tr><th>x</th><th>f(x)</th></tr>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}

function quadratic(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

let f = prompt("Input function name (cube, quadratic)");
if (f == "cube") {
  printTable(-10, 10, 0.5, cube);
}

if (f == "quadratic") {
  printTable(-10, 10, 0.5, quadratic);
}
