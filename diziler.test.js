const diziler = require('./diziler');

let example=[1,2,3,4,5,50];

test('n²+1 kare kontrolü', () => {       
    expect(diziler.arrayGeneral(example,diziler.squareProcess)).toEqual([2,5,10,17,26,2501])
});