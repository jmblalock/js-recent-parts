function data() {
  return [1, 2, 3];
}

var tmp = data();

var first = tmp[0];
// var second = tmp[1]; what if we didn't care about two?
var third = tmp[2];
var fourth = tmp.slice(3);

console.log(tmp);

//------------------------------------->

function data2() {
  return [1, 2, 3];
}

var tmp2;

var [first2, , second2, third2, ...fourth2] = (tmp2 = data2()); // notice comma

console.log(second2); // skipped over 2 and went to three because of comma
