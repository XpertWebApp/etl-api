# ETL Demo

> ETL Demo Api

it has a static json file in the uploads folder on its root. This app will simply reading the file and insert that data in the database

# Endpoints

> http://localhost:5000/records (Method: Post)

it will read the file and insert the records in the database

> http://localhost:5000/records (Method: Get)

it will fetch all the saved records

## About

A nodejs sequelize backend for ETL Demo.

## Requirements

get the .env file for setting the credentials first. You need to place that file on root directory. Before running the project you need to create an empty mysql database and setup its details in the .env file

## Development

To install the dependencies simply run:

```
npm install
```

To launch the development environment simply run:

```
npm start
```

The api config is on config/config.json

##
