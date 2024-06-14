# Welcome to Flights Service
This a backend system that supports different features for an airline company. Our end user is going to be someone who wants to book flights and query about flights this project features a robust system to help them give the best possible experience. I have prepared the whole backend keeping the code base as maintainable as possible.

# High Level Design 
![Flight Management System HLD (1)](https://github.com/AmanSingh1611/Flight-Management-Search-Service/assets/78806052/9e89cbe2-ff12-480f-ada0-bd705202b5a4)


# Microservices Architecture

The project adheres to a microservices architecture, where independent services collaborate to deliver the complete flight management experience. Here's a breakdown of the service interactions:

- Flight Management Backend API Gateway: This service manages flight data and interacts with other services as needed.
- Authentication Service: Handles user login/logout and access control for secure flight data access (link provided below).
- Booking Service: Manages flight reservations and passenger information (link provided below).
- Notification Service: Sends updates and alerts related to flights (link provided below).

# Links for other microservices 

Authentication Service: https://github.com/AmanSingh1611/Flight-Management-Auth-Service
Booking Service: https://github.com/AmanSingh1611/Flight-Management-Air-Ticket-Booking-service
Notification Service: https://github.com/AmanSingh1611/Flight-Management-Reminder-Service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of teh downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

```
- `npx sequelize db:migrate`
```

# DB Design
  - Airplane Table
    - Id
    - model_number
    - capacity
    - created_at
    - updated_at
  - Flight
    - id
    - src_airport_id
    - dest_airport_id
    - departure_date
    - arrival_date
    - arrival_time
    - departure_time
  - Airport
    - id
    - name
    - city_id
    - address
  - City 
    - id
    - name

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city has many airports but one airport belongs to a city
  - One airport can have many flights, but a flight belongs to one airport



# Tables

- City -> id, name, created_at, updated_at
- Airport -> id, name, address, city_id, created_at, updated_at
    - Relationship -> City has many airports and Airport belongs to a city (one to many)


```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

```
