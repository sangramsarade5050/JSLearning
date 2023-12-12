console.log(`(1==>)`);
var square =  function(num) {
console.log(`(**) The Square of "${num}" is: ${num*num}`);
}
square (5)
square (6)
square (25)
square (100)
square (67)
square (89)
square (59)
console.log("=============================================================");
console.log(`(2==>)`);
var square =  function(){
    console.log(`(**) The log type of variable is: ${typeof(square)}`);
}
square()
console.log("=============================================================");
console.log(`(3==>)`);
var areaRec= function (value1, value2){
    var result= value1*value2
    return result;
}
var length = 499;
var width = 917;
var result = areaRec(length, width);
console.log(`(**) Area of Length ${length} and Width ${width} is: ${result}`);
console.log("=============================================================");
console.log(`(4==>)`);
var swapValues= function (arg1,arg2){
    console.log('(**) Before swap ==>', arg1, arg2);
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log('(**) After swap ==>', arg1, arg2);
}
swapValues('Mahi', 'Raina');
swapValues(55,77);
console.log("=============================================================");
console.log(`(5==>)`);
var string= function(){
    var str= "JS is the most popular Language of Internet"
    console.log(`(**) The given string is "${str}"`);
    console.log(`(**) total character present in ["${str}"] is: "${str.length}"`);
    console.log(`(**) Character on Index number 6 is: "${str[6]}"`);
    console.log(`(**) Character on Index number 11 is: "${str[11]}"`);
    console.log(`(**) Character on Last Index using Length property is: "${str[str.length -1]}"`);
    console.log(`(**) Character on First Index using charAt property is: "${str.charAt (0)}"`);
    console.log(`(**) Character on Last Index using charAt property is: "${str.charAt (41)}"`);
    var splitValue= str.split(" ");
    var splitLength= splitValue.length;
    console.log(`(**) Total Length of splitted value is: ${splitLength}`);
    var splitSquare= splitLength*splitLength
    console.log(`(**) The Square of Splitted words is: "${splitSquare}"`);
}
string ()