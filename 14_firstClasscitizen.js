
//IN JS WE CALL FUNCTION AS FIRST CLASS CITIZEN 
//1. function can be stored in a variable ( Function Expression )
//2. function can be passed as an argument to another function (Callback Function)
//3.function can  return another function 
function outer (){
    console.log('Inside outer function ');
    function inner (){
        console.log('Inside inner function ');
    }
    return inner;
}
outer()();