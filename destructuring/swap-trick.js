var x = 10;
var y = 20;
{
  let tmp = x;
  x = y;
  y = tmp;
}

console.log(x, y);

//------------------------------------->

var x = 10;
var y = 20;
[y, x] = [x, y];

console.log(x, y);
