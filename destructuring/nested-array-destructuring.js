function data() {
  return [1, [2, 3], 4];
}

var tmp = data() || [];

var first = tmp[0];
var tmp3 = tmp[1];
var second = tmp3[0];
var third = tmp3[1];
var fourth = tmp[2];

console.log(first, second, third, fourth);

//------------------------------------->

function data2() {
  return [1, [2, 3], 4];
}

var tmp2;

var [first2, [second2, third2], fourth2] = (tmp2 = data2() || []);

console.log(first2, second2, third2, fourth2);
