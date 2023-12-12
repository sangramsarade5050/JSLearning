
console.log("=====two function with no arguments=======");
function simple (){
    console.log("Good Morning ");
}
 simple()
  
function Second (){
    console.log("This is JavScript ");
}
Second ()

console.log("===============2nd Part==============");
function personalDetails (firstName ,lastName , collegeName){
    console.log("fistName:",firstName);
    console.log("lastName:", lastName);
    console.log("collegeName:",collegeName);

}
personalDetails("Sangram","Sarade","kpc college pandharpur");

console.log("=========3rd part =========");
function swapValues(Virat, Anushka){
    console.log("Before Swapping ====> ", Virat, Anushka);
    var temp = Virat;
    Virat = Anushka;
    Anushka = temp; //this will not work as we are trying to assign values of variable which has been declared outside the function scope
    console.log("After Swapping ===>",Virat, Anushka); 
}
swapValues("Virat","Anushka");
swapValues("1000","2000");

console.log("=======4th part============");
function addThreeValues( arg1, arg2, arg3){
    var temp = valueOne;
    console.log(arg1+arg2+arg3);
    
}
addThreeValues(10.23,600,40);
addThreeValues("Hello"," Good", " Morning");