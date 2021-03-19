function data() {
  return { a: 1, b: 2, c: 3, d: 4 };
}

var tmp = data();
var first, second;

first = tmp.a;
second = tmp.b;

//------------------------------------->

function data2() {
  return { a: 1, b: 2, c: 3, d: 4 };
}

var tmp2;
var first2, second2;

({ a: first2, b: second2 } = data());

// have to wrap the entire thing in parantheses or this:

tmp2 = { a: first2, b: second2 } = data();

console.log(first2, second2);
console.log(tmp2);
