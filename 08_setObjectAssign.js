

class Bank  {
     constructor(bankName,location, accountNo, ifsc, interestRate) {
       this.bankName = bankName;
       this.location = location;
       this.accountNo =accountNo;
       this.ifsc= ifsc;
       this.interestRate= interestRate;
    }
    
}

const axisBank = new Bank("Axis Bank","Pandharpur,",547852496584,"UTI0000003", 0.12) ;
const SBIBank = new Bank("SBI Bank", "Akluj ", 854569857524,"SBIN0000340", 0.08  ) ;
const state = new Bank ("ICICI Bank","Solapur ", 587694852423, "icici000452601",0.14);
const kotak = new Bank ("Kotat Bank","Mohal",758496241502,"kotak002546566",0.11);
const hdfc = new Bank ("HDFC Bank","SHELVE",546985234525,"HDFC0458796",0.15);
const punjab = new Bank ("Punjab Bank","Pandharpur ",574589621582,"pukjC065265886",0.05);

const banks = new Set([axisBank,SBIBank,state,kotak,hdfc,punjab]);

for (const bank of banks) {
    console.log(`Bank name==> ${bank.bankName}, Location==> ${bank.location} Account No ==> ${bank.accountNo} `);
}