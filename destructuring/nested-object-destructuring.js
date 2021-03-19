function data() {
  return {
    a: 1,
    b: {
      c: 3,
      d: 4,
    },
  };
}

var tmp = data() || {};
var a = tmp.a;
var b = tmp.b;
var c = b.c;
var d = b.d;

console.log(`a = ${a}, b = ${b}, c = ${c}, d = ${d}`);

function data2() {
  return {
    a2: 1,
    b2: {
      c2: 3,
      d2: 4,
    },
  };
}

var { a2, b2: { c2, d2 } = {} } = data2() || {};

console.log(`a2 = ${a2}, b = {}, c = ${c2}, d = ${d2}`);
