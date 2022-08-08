let kobay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//genel dizi fonksiyonu
const arrayGeneral = (dizi,arrayProcess) => {
  let resultArray = [];

  
  dizi.forEach((element) => {
    let product = arrayProcess(element);
    resultArray.push(product);
    console.log(product);
  });
  return resultArray;
};

const arrayIterativeSum = (dizi,arrayProcess) => {
  //kendinden bir öncekinin işlemi olup üstüne eklensin TODO: 
  let resultArray = [];
  let total=0;
  for (const item of dizi) {
    resultArray.push(total);
    console.log(item,total);
    let product=arrayProcess(item);
    total+=product;
  }
  return resultArray;
}

const squareProcess = (raw) => {
  //işlem: An=n²+1
  return raw ** 2 + 1;
};
const divisionProcess = (raw) => {
  //1/2n
  return 1/(2*raw);
};

const iterationProcess = (raw) => {
  return (2*raw)+9
}

// arrayGeneral(kobay,divisionProcess);
arrayIterativeSum(kobay,iterationProcess);

module.exports = {
  arrayGeneral,
  squareProcess,
  divisionProcess
};
