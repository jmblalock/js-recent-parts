// Imperative approach
function data() {
  return [1, 2, 3, 4, 5];
}

var tmp = data();
// var first = tmp[0];
// var second = tmp[1] !== undefined ? tmp[1] : 10;
// var third = tmp[2];
// var fourth = tmp.slice(3);

var first, second, third, fourth;
// var o = {};
var o = [];

// first = tmp[0];
// second = tmp[1];
// third = tmp[2];
// fourth = tmp.slice(3);

// o.first = tmp[0];
// o.second = tmp[1];
// o.third = tmp[2];
// o.fourth = tmp.slice(3);

o[1] = tmp[0];
o[2] = tmp[1];
o[3] = tmp[2];
o[4] = tmp.slice(3);

// console.log(first, second, third, fourth);
console.log(tmp);

// Declarative approach
function data2() {
  return [1, 2, 3, 4, 5];
}

var tmp2;
// var o2 = {};
var o2 = [];
var first2, second2, third2, fourth2;
// var [first2, second2 = 10, third2, ...fourth2] = (tmp2 = data2());
// [first2, second2, third2, ...fourth2] = tmp2 = data2();
// [o.first2, o.second2, o.third2, ...o.fourth2] = tmp2 = data2();
// [o[1], o[2], o[3], ...o[4]] = tmp2 = data2();

tmp2 = [o[3], ...o[4]] = data2(); // important to know that this still points at the entire array.

// console.log(first2, second2, third2, fourth2);
console.log(tmp2);
