//Snake  Case : Variable Naming convention
class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(22, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(22, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(22, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

arrayEmployees.forEach((emp) => {
  if (emp.emp_company == "TCS") {
    console.log(emp.emp_name, emp.emp_company);
  }
});
console.log("=============================");

arrayEmployees.forEach((emp) => {
  if (emp.emp_dept == "Finance") {
    console.log(emp.emp_name, emp.emp_dept);
  }
});

console.log("==============================");

arrayEmployees.forEach((emp) => {
    if (emp.emp_name.startsWith('R')) {
      console.log(emp.emp_name);
    }
  });

  console.log("==============================");

  arrayEmployees.forEach((emp) => {
    if (emp.emp_salary > 75000) {
      console.log(emp.emp_name,emp.emp_company,emp.emp_salary);
    }
  });

  console.log("============================");

  arrayEmployees.forEach((emp) => {
    if (emp.emp_salary>=50000 && emp.emp_dept== "IT") {
      console.log(emp.emp_id,emp.emp_name,emp.emp_dept,emp.emp_salary,emp.emp_company);
    }
  });

  console.log("=====================");

  arrayEmployees.forEach((emp) => {
    if (emp.emp_company== "Infy") {
      console.log(emp.emp_id,emp.emp_name,emp.emp_dept,emp.emp_salary,emp.emp_company);
    }
  });
  