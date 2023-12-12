console.log(`=====First And Last Element ========`);
const  arrayFruits =["Banana","Orange","Apple","Mango","Water Melon"];
 result = arrayFruits[0];
console.log(`First Fruit :${result}`);
  lastFruit =arrayFruits[arrayFruits.length-1];
 console.log(`lastFruit:${lastFruit}`);

 console.log(`=====Add Element Papaya before the element Banana  =======`);
arrayFruits.splice(0,0,"Papaya");
console.log(arrayFruits);

console.log(`==========Remove Mango From Array==============`);
arrayFruits.splice(4,1);
console.log(arrayFruits);

console.log(`===========Add Element Pineapple at the last position =============`);
arrayFruits.push("Pineapple");
console.log(arrayFruits);
 
console.log(`=========Insert And Element Dragon Fruit Before Water Melon ========`);
arrayFruits.splice(4,0,"Dragon Fruit");
console.log(arrayFruits);

console.log(`========Replace and Element Orange with Kiwi ============`);
arrayFruits.splice(2,1,"Kiwi");
console.log(arrayFruits);

console.log(`======Log the element from index 1 to 4 =======`);
const arrayElements = arrayFruits.splice(1,4);
console.log(arrayElements);

console.log("select last 3 element and log on console: Use the length property");
const lastThree= arrayFruits.slice(-3);
console.log(lastThree);

