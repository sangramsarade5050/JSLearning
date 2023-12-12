var voteEligibility= function (age) {
    var result=+age
    console.log("");
    if (age<=0 || age>130  || isNaN(result)) {
        console.log(`**) The given age is "${age}" "That's the Invalid input"`);
    } else {
        if (age<18) {
            console.log(`**) The given age is "${age}" which is less then "18", Thus you are not Eligible to Give Vote this Year`);
        }
        else{
            console.log(`**) The given age is "${age}", Thus you are Eligible to give vote`);
        }
    }
}
voteEligibility (45)
voteEligibility (17)
voteEligibility (20)
voteEligibility (8)
voteEligibility (-10)
voteEligibility (200)
voteEligibility (0)
voteEligibility (null)
voteEligibility ("College")