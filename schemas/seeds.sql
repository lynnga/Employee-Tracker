USE employees;

INSERT INTO department(department_name)
VALUES ("management"),
("accounting"),
("engineering");

INSERT INTO role(title, department_id, salary)
VALUES("CEO", 1, 1000000), 
("accountant", 2, 500000),
("senior enginner", 3, 400000),
("junior accountant", 2, 150000),
("intern enginner", 3, 10000);

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ("john", "smith", 1, NULL),
("bob", "frank", 2, 1),
("john", "smith jr", 4,2),
("peter", "jackson", 3,1),
("sally", "tally", 5,3);