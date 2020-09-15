const connection = require('./connection.js');

class Database {
  constructor(connection){
    this.connection = connection
  }

  // findAllDepartments(){
  //   return this.connection.promise().query(
  //     "SELECT *" //get the emplyee info, role info, department, etc
  //   )
  // }

  findAllEmployees(){
    return this.connection.promise().query(
      "SELECT * FROM employee"
      // `SELECT employee.id, employee.first_name, employee.last_name`
      // role.title, department.name AS department, role.salary` 
      // LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN`
    )
  }

  }


module.exports = new Database(connection);