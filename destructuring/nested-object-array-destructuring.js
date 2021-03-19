var obj = {
  a: 1,
  b: {
    x: 2,
  },
  c: 3,
};

var {
  a,
  b,
  b: { x: y },
  c,
} = obj;

console.log(y);

var obj2 = {
  a2: 1,
  b2: [500, 5000],
  c2: 3,
};

var { a2, b2: [x2, y2] = [], c2 } = obj2;

console.log(x2, y2);
