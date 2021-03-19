function data() {
  return;
}

var tmp = data() || {};
var a = tmp.a;
var b = tmp.b;

function data2() {
  return;
}

var { a = 42, b } = data() || {};

// if the source and the target are the same, you can just list it once.
