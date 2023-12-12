let bankSbi = {
    name : "Sangram Sarade",
    bankName : "SbiBank",
    ifscCode: "SBIN005469",
    accountNo : 53246854525,
}
console.log(`The bankSbi Object Before Clone `);
console.log(bankSbi);
console.log(``);
console.log(`The bankSbi Object After Cloning With bankLocation Clone`);
let bankLocation = {

    street : "Bank Road ",
    city : "Mumbai",
    pin : 451254 
}

Object.assign(bankSbi,bankLocation)
console.table(bankSbi);

let rateOfInterest ={
    homeLone :"12%",
    personalLoanInterest : "10",
    dueInterest : "18%"
}
const sbiDetails = Object.assign({},bankSbi,bankLocation,rateOfInterest)
console.log(`Merging Object bankSbi,bankLocation and rateOfInterest in sbiDetails`);
console.table(sbiDetails)
console.log(`===========`);
console.log(`Traversing of an object sbiDetails`);
for (const key in sbiDetails) {
   console.log(key, sbiDetails[key]);
}