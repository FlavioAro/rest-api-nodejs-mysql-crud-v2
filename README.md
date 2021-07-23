# rest-api-nodejs-mysql-crud-v2

# RestAPI template using NodeJS + Express + MySQL

_Example to create RESTFul API for CRUD operations using MySQL as Database. 
Using [Babel](https://babeljs.io/) to transform modern Javascript syntax to versions that any browser can understand._

## What you can do with this examples ? 

_You will be able to test the differents endpoints that I wrote and make the classics request methods as GET, POST, PUT and DELETE operations._

## What knowledge do you need to understand this examples ?

_You need to have basic knowledge of the technologies used in the creation. I use_ 

* [NodeJS](https://nodejs.org/es/) - As main language
* [Express](https://expressjs.com/es/) - To have our server
* [MySQL](https://www.mysql.com/) - As database to store the data. 


## Installation

_Download the project and open it in your code editor. And put on the console_

```
npm install

npm start

```

_If everything went well, you should see something like this on the console_

```
Server Running in Port xxxx
Database Connected
```

_In this point we are more than ready to make the tests!!_

## MySQL

_Before make test check the file with name createcompanyDB.sql en run the commands in Workbench o console_

## Endpoints

_For test in my case I use [POSTMAN](https://www.postman.com/)_

_Main URL: localhost:xxxx/company_ 

---
_This request will return the complete list of company._
_GET method:_ **localhost:xxxx/company**

_The answer will be something like:_ 
```
[
    {
        "id": 1,
        "first_name": "Flavio",
        "last_name": "Aro",
        "email": "flavio.aro@gmail.com",
        "age": 33
    },
    {
        "id": 2,
        "first_name": "Teste",
        "last_name": "Teste",
        "email": "teste@gmail.com",
        "age": 30
    }
]
```

---
_This request will return only 1 company._
_GET by ID method:_ **localhost:xxxx/company/id/:id**

_The answer will be something like:_ 
```
{
    "id": 1,
    "first_name": "Flavio",
    "last_name": "Aro",
    "email": "flavio.aro@gmail.com",
    "age": 33
}
```

---
_This request will create a company._
_POST method:_ **localhost:xxxx/company/add**

_The company information you enter on Postman should look something like:_ 
```
{
    "first_name": "You new company name",
    "last_name": "company last name",
    "email": "company@examplemail.com",
    "age": The company age as number value
}
```

---
_This request will be able to update the data of a specific company._
_PUT method:_ **localhost:xxxx/company/edit/:id**

_You can change the data of a specific company for example:_ 
```
{
    "first_name": "Flavio",
    "last_name": "Aro",
    "email": "flavio.aro@gmail.com",
    "age": 33
}
```

_to_:
```
{
    "first_name": "Flavio",
    "last_name": "Aro",
    "email": "flavio.aro@gmail.com",
    "age": 33
}
```

---
_This request will remove a specific company._
_DELETE by ID method:_ **localhost:xxxx/company/delete/:id**

---
_This request will remove all records from the company table._
_DELETE method:_ **localhost:xxxx/company/deletecompany**

---

####  I hope this example is helpful to you. Feel free to use it or modify it to your liking. I will update it over time