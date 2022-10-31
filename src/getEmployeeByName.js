const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  let result = {};
  data.employees.forEach((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      result = employee;
    }
  });
  return result;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
