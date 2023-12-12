let array = [10, 20, 30, 40, 50, 60];

console.log(typeof array);

console.log(array);

console.log(`Total elements in array is : ${array.length}`);

console.log(`=========== Accessing or updating array element===============`);

let element0thIndex = array[0];

console.log(element0thIndex);

console.log(array[1]);

console.log(array[array.length - 1]);

console.log(`Second last element in array is:  ${array[array.length - 2]}`);

console.log(`========= Updating an element===========`);

array[1] = 70;

console.log(array);

console.log(`========= indexOf()===========`);

console.log(array.indexOf(30));

console.log(`========= Traversing an array===========`);

let arrayNum = [22, 11, 44, 55, 77, 33];

for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];

  console.log(element);
}

console.log(`========= Traversing an array in reverse order===========`);

for (let index = arrayNum.length - 1; index >= 0; index--) {
  const element = arrayNum[index];

  console.log(element);
}

console.log(`=========even position==============`);

for (let index = 0; index < array.length; index++) {
  if (index % 2 == 0) {
    const element = array[index];
    console.log(element);
  }
}

let arrayNumbs = [22, 11, 44, 55, 77, 33];

console.log(`====== Adding element in last=========`);

arrayNumbs.push(88);

console.log(arrayNumbs);

let arrayNumbers = [22, 11, 44, 55, 77, 33];

console.log(`====== Removing element in last=========`);

arrayNumbers.pop();

console.log(arrayNumbers);

console.log(`====== Adding element in first position  =========`);

arrayNumbers.unshift(99);

console.log(arrayNumbers);

let arrayN = [22, 11, 44, 55, 77, 33];

console.log(`====== Removing element in first position =========`);

arrayN.shift();

console.log(arrayN);

console.log(`========= Adding of an array===========`);

let arrayNumber = [22, 11, 44, 55, 77, 33];
let sum =0;
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
sum =sum + element;
  console.log(sum);
}

let arrayNumb= [22, 11, 44, 55, 77, 33];

console.log(`====== slice() =========`);

const arraySliced = arrayNumber.slice(3);

console.log(arraySliced);

 

const arrayElements = arrayNumber.slice(1, 4);

console.log(arrayElements);

console.log(`====== splice() =========`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

const splicedElements = arrayNumber.splice(4);

console.log(arrayNumber);

console.log(splicedElements);

 

console.log(`====== splice() to remove elements with index and delete count =========`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

var removedElements = arrayNumbe.splice(2, 2);

console.log(arrayNumbe);

console.log(removedElements);

console.log(`====== splice() to insert element =========`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

// Insert element 99 at index 2 ==> [22, 11, 99, 44, 55, 77, 33]

arrayNumber.splice(2,0,99);

console.log(arrayNumber);

 

console.log(`Insert elements 100, 200, 400 at index 3 and at the time of insertion don't replace any elements`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

// Insert elements 100, 200, 400 at index 3 ==> [22, 11, 44, 100,200,400,55, 77, 33];

arrayNumber.splice(3, 0, 100, 200, 400);

console.log(arrayNumber);

 

console.log(`Insert an element 500 at index 2 by replacing an element `);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

// [22, 11, 500, 55, 77, 33];

arrayNumber.splice(2, 1, 500);

console.log(arrayNumber);

 

console.log(`Insert an element 700 at index 3 by replacing 2 elements`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

// [22, 11, 44, 700, 33]

arrayNumber.splice(3, 2, 700)

console.log(arrayNumber);

console.log(`for in loop`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

for (const index in arrayNumber) {

    const element=arrayNumber[index];

    console.log(`Index: ${index}, value: ${element}`);

}

console.log(`========= Traversing an array using while loop ==============`);

var arrayNumbe = [22, 11, 44, 55, 77, 33];

let index=0;

while (index<arrayNumber.length) {

    console.log(arrayNumber[index]);

    index++;

}

// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS

// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS

var arrayNumbe = [22, 11, 44, 55, 77, 33];

console.log(`for of loop`);

for (const element of arrayNumber) {

    console.log(element);

}

console.log(`Join method`);
const joinedElement =arrayNumb.join("_");
console.log(joinedElement);

console.log(`============Concat method===========`);
let arr1 =[1,2,3];
let arr2 = [5,6,4];
let arr3 = arr1.concat(arr2);
console.log(arr3);