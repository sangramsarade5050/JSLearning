console.log(`=========even position==============`);

let arrayNum = [22, 11, 44, 55, 77, 33];

for (let index = 0; index < arrayNum.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNum[index];
    console.log(element);
  }
}
console.log(`========= Adding of an array===========`);

let arrayNumber = [22, 11, 44, 55, 77, 33];
let sum =0;
for (let index = 0; index < arrayNum.length; index++) {
  const element = arrayNum[index];
sum =sum + element;
  console.log(sum);
}