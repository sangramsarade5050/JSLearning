console.log(`=======Length of an array =========`);
const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
arrayNumbers[arrayNumbers.length];
console.log(arrayNumbers);
console.log(`==============================`);

console.log(
  "First element and Last Last element in array is ",
  arrayNumbers[0],
  "and",
  arrayNumbers[arrayNumbers.length - 1]
);

console.log(`===========Third Last element ==================`);
let result = arrayNumbers[arrayNumbers.length - 3];
console.log(`Last third Number : ${result}`);

console.log(`==========All even numbers in array==================`);

for (const index in arrayNumbers) {
  if (arrayNumbers[index] % 2 == 0) {
    console.log(arrayNumbers[index]);
  }
}

console.log(`=====Odd numbers in array  ==========`);
for (const key in arrayNumbers) {
  if (arrayNumbers[key] % 2 != 0) {
    console.log(arrayNumbers[key]);
  }
}

console.log(`=====Sum the Even positioned arrayNumbers ============`);
let even = 0;

for (let index = 0; index < arrayNumbers.length; index += 2) {
  even += arrayNumbers[index];
}
console.log(`Sum of even position element is :${even}`);

console.log("===============`Odd Position Elements are`==================");
let odd = 0;
for (let index = 1; index < arrayNumbers.length; index += 2) {
  odd += arrayNumbers[index];
}
console.log(`Sum of odd Position Elements is "${odd}"`);

console.log(`====Sum of All array Elements =======`);
let sum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
   sum += arrayNumbers[index];
    
}console.log(`Sum of All array Elements:${sum}`);

console.log(`===================`);
for (const index in arrayNumbers) {

    if (arrayNumbers[index]%5===0 ) {
        
        console.log(arrayNumbers[index]);
    }
}

console.log("===============================================");
function searchEle(value) {
    if (arrayNumbers.includes(value)) {
      console.log(`Yes The Element "${value}" is available in array`);
    }else{
      console.log(`No The Element "${value}" is NOT available in array`);
    }
  }
  searchEle(115)
  searchEle(23)

  console.log("===============================================");
arrayNumbers.splice(3,0,55,66)
console.log(arrayNumbers);

console.log("===============================================");
arrayNumbers.splice(4,3)
console.log(arrayNumbers);