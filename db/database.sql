CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
	id INT(11) NOT NULL auto_increment,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;