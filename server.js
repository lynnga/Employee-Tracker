const port = process.env.PORT || 3000;
const db = require("./configuration/config_db");
var inquirer = require("inquirer");
const { query } = require("./configuration/config_db");

// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const prompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "Option",
        message: "what would you like?",
        choices: [
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update and employee role",
          "view all departments",
        ],
      },
      /* Pass your questions in here */
    ])
    .then((answers) => {
      var choice = answers["Option"];
      if (choice == "view all roles") {
        view_all_roles();
      }
      if (choice == "view all employees") {
        // view_all_employees();
        showEmployees();
      }

      if (choice == "view all departments") {
        viewDepartments();
      }

      if (choice === "add a department") {
        // add_a_role();
        addDepartment()
      }

      if (choice == "add a role") {
        addRole();
      }
      if (choice == "add an employee") {
        console.log("and an employee");
        // add_an_employee();
      }
      if (choice == "update an employee role")
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
};

// prompt()
function showEmployees() {
  db.promise()
    .query("select * from employee")
    .then((query) => {
      console.table(query[0]);
      prompt();
    });
}
// prompt()
function view_all_roles() {
  db.promise()
    .query("select * from role")
    .then((query) => {
      console.table(query[0]);
      prompt();
    });
}
function viewDepartments() {
  db.promise()
    .query("select * from department")
    .then((query) => {
      console.table(query[0]);
      prompt();
    });
}
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department_name",
        message: "what is the deparment name?",
      },
    ])
    .then((deparment) => {
      db.promise().query("insert into department set ?", deparment).then (response => {
        console.log("department added")
        viewDepartments()
      })
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "what is the title?",
      },
      {
        type: "input",
        name: "department_id",
        message: "what is the deparment id",
        
      },
      {
        type: "input",
        name: "salary",
        message: "what is the salary",

      },
    ])
    .then((role) => {
      db.promise().query("insert into role set ?", role).then (()=> {
        console.log("role added")
        view_all_roles()
      })
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "what is the first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "what is the last name",
        
      },
      {
        type: "input",
        name: "role_id",
        message: "what is the role id",

      },
      {
        type:"input",
        name: "manager_id",
        message: "what is the managers id",
      },
    ])
    .then((employee) => {
      db.promise().query("insert into employee set ?", employee).then (()=> {
        console.log("employee added")
        showEmployee()
      })
    });
}

prompt();
