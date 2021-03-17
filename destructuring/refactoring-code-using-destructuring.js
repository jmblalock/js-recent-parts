// Imperative approach
function data() {
  return [1, 2, 3, 4, 5];
}

var tmp = data();
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);

console.log(first, second, third, fourth);
console.log(tmp);

// Declarative approach
function data2() {
  return [1, 2, 3, 4, 5];
}

var [first2, second2 = 10, third2, ...fourth2] = (tmp2 = data2());

console.log(first2, second2, third2, fourth2);
console.log(tmp2);
