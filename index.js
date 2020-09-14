const {prompt} = require("inquirer");
const mainPrompts = ()=>{
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
            name: "View all departments.",
            value: "viewDepartments"
        },
        {
            name: "View all roles.",
            value: "viewRoles"
        },
        {
            name: "View all employees.",
            value: "viewEmployees"
        },
        {
            name: "Add a department.",
            value: "addDepartment"
        },
        {
            name: "Add role.",
            value: "addRole"
        },
        {
            name: "Add employee.",
            value: "addEmployee"
        },
        {
            name: "Update employee.",
            value: "updateEmployee"
        }
      ]
    }
  ]).then(res=> {
    switch(res.choice){
      case "viewDepartments":
        viewDepartments();
        break;
    }
  })
}