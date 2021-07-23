/* 
* This query check if there is a schema called test or not 
*/
CREATE SCHEMA IF NOT EXISTS boomer;


/*
* But if the table doesn't exist this query will create it with the data that we specify below
*/
CREATE TABLE IF NOT EXISTS company (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    company_name VARCHAR(50) NOT NULL,
    segment VARCHAR(100) NOT NULL,
    street_name_and_number VARCHAR(300) NOT NULL, 
    district VARCHAR(100) NOT NULL
);