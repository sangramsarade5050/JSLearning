

class Vehicle {
     constructor(company, model, year, color, mileage){
        this.company = company;
        this.model = model;
        this.year =year;
        this.color =color;
        this.mileage = mileage;
    }
}
//Create 5 object from Vehicle class 

const vehicle1 = new Vehicle('Toyota','Supra',2023, 'Stratosphere','13,000');
const vehicle2 = new Vehicle('Ford', 'Endeavour',2003,'Black', '30000');
const vehicle3 = new Vehicle('Honda', 'Civic', 2019,'Red',40000);
const vehicle4 = new Vehicle('Mahindra','XUV 700',2021,'White',27000);
const vehicle5 = new Vehicle('Nissan', 'Altima', 2017, 'White', 40000)

//Add Vehicle into array 

const arrayOfVehicle=[vehicle1,vehicle2,vehicle3,vehicle4,vehicle5];

//Traversing an array  and log on details
for (const element of arrayOfVehicle) {
    console.log(element);
}

console.log(vehicle1 instanceof Vehicle);

//Define a class for college 
 class College {
    constructor( name, location, foundedYear, university){
       this.name =name;
       this.location =location;
       this.foundedYear=foundedYear;
       this.University =university;
    }
    display(){
        console.log(`College Name: ${this.name}`);
        console.log(`Location: ${this.location}`);
        console.log(`Founded Year: ${this.foundedYear}`);
        console.log(`University : ${this.University}`);
        console.log(`\n`);
    }
 }

 // Create 4 Objects from college class 
 
 const college1 = new College('Institute of Computer And Management studies (ICMS) ', 'Pandharpur',  1990, ' Solapur University');
const college2 = new College('Symbiosis Institute of Business Management (SIBM):', 'Pune', 1985, 'Pune University');
const college3 = new College('National Institute of Fashion Technology (NIFT)', 'Mumbai', 2000 ,'Pune University');
const college4 = new College('College of Engineering, Pune (COEP)', 'Pune', 1978,'Pune University');

// Invoke the display() method for each college
college1.display();
college2.display();
college3.display();
college4.display();



// Function to traverse an object
function traverseObject(obj) {
    for (const key in obj) {
        console.log(`${key}: ${obj[key]}`);
    }
}

// Call traverseObject() for each college object
console.log('Traversing College 1:');
traverseObject(college1);
console.log("=====================================");
console.log('Traversing College 2:');
traverseObject(college2);
console.log("=====================================");
console.log('Traversing College 3:');
traverseObject(college3);
console.log("=====================================");
console.log('Traversing College 4:');
traverseObject(college4);

