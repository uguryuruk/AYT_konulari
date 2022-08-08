const classicPolynom = (coefficents, constant, x = 0) => {
  //should use 0 in coefficents for missing powers
  //"P(x)=5x⁵+3x²+2x+9" tarzı polinomda, x için verdiğiniz değeri hesaplar.
  let result = constant;
  let power = coefficents.length;
  for (const index in coefficents) {
    result += coefficents[index] * x ** power;
    power -= 1;
  }
  console.log(`the result of the polynomial is:${result}\ndegree is ${
    coefficents.length
  }
    \nlength of terms are ${coefficents.length + 1}`);
  return result;
};

const iteratingPolynom = (value) => {
  //P(x)=3x²-1+P(x-1)
  //sabit terimi P(0)=2
  let startValue = 2;
  let total = startValue;

  for (let i = 1; i <= value; i++) {
    total += (3*(i**2))-1
  }

  return total;
};

console.log(iteratingPolynom(3))

module.exports = {
  classicPolynom,
  iteratingPolynom,
};
