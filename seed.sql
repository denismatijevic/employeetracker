use employees;

INSERT INTO department (name)
VALUES ("sales"), ("engineering"), ("human resources");
INSERT INTO role (title, salary, department_id)
VALUES ("sales person", 100000, 1), ("software engineer", 85000, 2), ("HR", 50000, 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", 1), ("Denis", "Matijevic", 2), ("Sunny", "Bright", 3);