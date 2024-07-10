// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: '123 Main St.'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
const newEmployee = deleteFromEmployeeByKey(employee, 'name');
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}



