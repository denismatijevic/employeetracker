  CREATE DATABASE employees; 
  USE employees;

  CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) UNIQUE NOT NULL
  );
   CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT NOT NULL,
    INDEX deparment_index (department_id),
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
  );
  CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    INDEX role_index (role_id),
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id)
  );
