function data() {
  return { a: 1, b: 2, c: 3, d: 4 };
}

var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

//------------------------------------->

function data2() {
  return { a: 1, b: 2, c: 3, d: 4 };
}

var { a: first2 = 42, b: second2, ...third2 } = data();

console.log(first2, second2);
console.log(third2);

//------------------------------------->

// var o = {
//   prop: value,
//   target: source,
// };

// var { prop: value, source: target } = p;
