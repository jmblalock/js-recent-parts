// array destructurings in parameter positions
function data(tmp = []) {
  var [first = 10, second = 20, third = 30] = tmp;
  console.log(tmp, first, second, third);
}

arr = [1, 2, 3];
data(arr);

//------------------------------------->
function data2([first2 = 10, second2 = 20, third2 = 30] = []) {
  // ..
}
