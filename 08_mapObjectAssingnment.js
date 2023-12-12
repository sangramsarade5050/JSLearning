
class Bank{
    constructor(bankName,location, accountNo,ifsc,interestRate){
        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;
    }

}

const axisBank = new Bank ("Axis BAnk","Pandharpur",65874651436312,"ASX5484521",0.12);
const SBIBank = new Bank("SBI Bank", "Akluj ", 854569857524,"SBIN0000340", 0.08  ) ;
const stateBank = new Bank ("ICICI Bank","Solapur ", 587694852423, "icici000452601",0.14);
const kotakBank = new Bank ("Kotat Bank","Mohal",758496241502,"kotak002546566",0.11);
const hdfcBank = new Bank ("HDFC Bank","SHELVE",546985234525,"HDFC0458796",0.15);
const punjabBank = new Bank ("Punjab Bank","Pandharpur ",574589621582,"pukjC065265886",0.05);


const  bankMap =new Map();
bankMap.set(axisBank.accountNo,axisBank);
bankMap.set(SBIBank.accountNo,SBIBank);
bankMap.set(stateBank.accountNo,stateBank);
bankMap.set(kotakBank.accountNo,kotakBank);
bankMap.set(hdfcBank.accountNo,hdfcBank);
bankMap.set(punjabBank.accountNo,punjabBank);

const totalKes= bankMap.keys();
for (const key of totalKes) {
    const details=bankMap.get(key);
    console.log(`Bank Name:${details.bankName} Account No:${details.accountNo} Interest Rate:${details.interestRate} `);
}