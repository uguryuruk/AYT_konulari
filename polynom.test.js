const polynom = require("./polynom");

let coefs = [3, 2];
let constant = 7;
let x = 2;

test("P(x)=3x²+2x+7", () => {
  //x =2
  expect(polynom.classicPolynom(coefs, constant, x)).toBe(23);
});

test("sum of coefficents", () => {
  //katsayı toplamı- sum of coefficents
  expect(polynom.classicPolynom(coefs, constant, 1)).toBe(12);
});

test("finding the constant", () => {
  //sabit terim- constant term
  expect(polynom.classicPolynom(coefs, constant, 0)).toBe(7);
});
test("P(x)=5x⁵+3x²+2x+9", () => {
    //x =2
    coefs = [5, 0, 0, 3, 2];
    constant = 9;
    x = 2;
    expect(polynom.classicPolynom(coefs, constant, x)).toBe(185);
  });

  //iterating Polynom
  test('iterating polynom:P(x)=3x²-1+P(x-1), P(3) should be 41', () => {
    expect(polynom.iteratingPolynom(3)).toEqual(41);
  });