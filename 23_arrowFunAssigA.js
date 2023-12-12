
let arrowFun = ()=>{
    console.log(`Good  Morning, Today is Wednesday`);
}
arrowFun();

let mul = (num1,num2,num3=1)=>{
    console.log(`Multiplication is:${num1*num2*num3}`);
}
mul(5,5,2);
mul(10,4);

let add = (n1,n2,n3,n4,n5)=>{
let result = n1+n2+n3+n4+n5;
return result;
}
let result1 = add(100,100,200,349,756);
console.log(`Addition of  numbers is: ${result1}`);

let result2 = add("I am ","learning ","ES6 ","features ","in depth");
console.log(`Addition of String is : ${result2}`);