// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function(){
  const employeesArray = [];
  let username = "yes";

  while(username.toLowerCase() === "yes"){
  const firstName = prompt("Enter First Name");
  const lastName = prompt("Enter Last Name");
  const salary = prompt("Enter Salary");
  const employeesObject = {firstName, lastName, salary};
  employeesArray.push(employeesObject);

  username = prompt("Do you want to add another employee? (yes/no)");
}
return employeesArray;


// TODO: Get user input to create and return an array of employee objects
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  const numberOfEmployees = employeesArray.length;
  let totalSalary = 0;
  for (let i = 0; i < numberOfEmployees; i++) {
    totalSalary += Number(employeesArray[i].salary);
  }

  const averageSalary = totalSalary / numberOfEmployees;

  console.log(`Average Salary: ${averageSalary}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
