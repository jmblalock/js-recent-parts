function data(tmp = {}) {
  var { a, b } = tmp;
  //..
}

function data2({ a, b } = {}, x) {
  //..
  console.log(a, b, x);
}

data2({ a: 1, b: 2 }, 42);
