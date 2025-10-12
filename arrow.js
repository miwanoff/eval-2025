let inc = function (x) {
  return x + 1;
};

let inc1 = (x) => x + 1;
let inc_10 = () => {
  console.log(10);
};
// console.log(inc(4))
// console.log(inc1(4))
// inc_10()

let arr = [2, 30, 10];
// let sorted = arr.sort((a, b) => (a < b ? -1 : a == b ? 0 : 1));
console.log(arr.sort((a, b) => a - b)); // [2, 10, 30]
