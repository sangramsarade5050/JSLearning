
const strAleix=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married": false,
    "address":{
        "street":"32,Laham St.",
        "city":"Innsbruck",
        "country":"Austria"
    },
    "referred-by":"E0012"
}`
// Convert the JSON string to an object
const alexin =JSON.parse(strAleix);
console.log(alexin);
//log the 'role' property in uppercase('Dev')
const alex=alexin.role[0].toUpperCase();
console.log(alex);

//Log only the last name ("Melon")
const fullName =alexin.name.split(" ");
console.log("Last Name:", fullName [1]);

//Log only Joining  year of the employee ('2019')

const doj = alexin.doj.split("-")[2];
console.log("Joining Year:",doj);

