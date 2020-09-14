const connection = require('./server.js');

class Database {
  // constructor(connection){
  //   this.connection = connection
  // }

  findAllDepartments(){
    return connection.promise().query(
      "SELECT *" //get the emplyee info, role info, department, etc
    )
  }



}


module.exports = Database