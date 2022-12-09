const port = process.env.PORT || 3000;
const db = require('./configuration/config_db');
var inquirer = require("inquirer");




// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const prompt = () => {
  inquirer
    .prompt([
      {
          type: "list",
          name: "Option",
          message: "what would you like?",
          choices: ["view all roles", "view all employees", "add a department", "add a role", "add an employee", "update and employee role"],
      },
  /* Pass your questions in here */
  ])
    .then((answers) => {
      var choice = answers["Option"]
      if (choice == "view all roles")
      {
        // view_all_roles();
        console.log("view all roles")
      }
      if (choice == "view all employees")
      {
        // view_all_employees();
        console.log("view all employeess")
      }
      if( choice === "add a department")
      {
        // add_a_role();
        console.log("add a department")
      }
      
      if (choice == "add a role")
      {
          console.log("add a role");
      }
      if (choice == "add an employee")    
      {
        console.log("and an employee")
        // add_an_employee();
      }
      if (choice == "update an employee role")
      console.log("update an employee")
      {
        console.log("update an employee");
      }

    })
    .catch((error) => {
      if (error) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
  }

prompt()