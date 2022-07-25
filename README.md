
### Access all the routes by clicking the button below, or at localhost:3333/docs (swagger)!
<a href="https://insomnia.rest/run/?label=NODE-TYPESCRIPT-RESTAPI&uri=https%3A%2F%2Fgithub.com%2Fdanny-oli%2FNode-Typescript-RestAPI%2Fblob%2Fmain%2FInsomnia%2FInsomnia_2022-07-25.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>



# <a target='_blank'><img align="left" width=50px height=50px src='https://user-images.githubusercontent.com/54849358/79355817-8d9a6200-7f14-11ea-9c3c-5ba42c4ce12a.png' /></a> NodeJs - Typescript - Mongodb - RestAPI

<br>

## <a target='_blank'><img align="left" width=40px height=40px src='https://user-images.githubusercontent.com/54849358/79353989-2f6c7f80-7f12-11ea-8f2a-39aaf259ad81.png' /></a> Welcome to my Node.Js API

In this API you are able to retrieve  Hotels using the Amadeus API 
There is also a User's CRUD.
 
 <br>
 
## <a target='_blank'><img align="left" width=40px height=40px src='https://user-images.githubusercontent.com/54849358/79358887-372f2280-7f18-11ea-9c5f-a1da33e7a719.png' /></a> Features

### API Setup

- Restful API using json;
- Node.Js;
- Express.Js;
- MongoDb;
- Nodemoon;
- Mongoose;
- Jest;
- Swagger;
- Insomnia;
- Dotenv;
- Uuid;

### Functional Requirements
- Locked Routes using user integrationKey (received when creating a new User);
- Complete User CRUD;
- Able to find Hotels using a city code e.g. LON from Londom;
- Get all previous searches from the database;

### Not Functional Requirements
- Use [Amadeus](https://developers.amadeus.com/) as Hotels provider;
- Use [MongoDB](https://mongodb.com) as a NoSql database;
- Jest testing;
- Swagger for documentation;
- Restful API;
- Environment variables;

### Documentation

- [Swagger](https://swagger.io/) documentation for easy testing.

<br>


## :rocket: Start the project!

- Start by cloning the repo.
- Install project dependencies:
```
yarn install
```
- With everything setup, duplicate the .env.example file to a new file called .env 
- Run application testes with the command:
```
yarn test
```
- Run application with the command:
```
yarn dev
```
- At the end, you can confirm that all routes are working fine.

<br> 

## :rocket: Insomnia testing!

Routes info!

  ROUTES                     |     HTTP          |      DESCRIPTION      | 
---------------------------  | ----------------- | --------------------- | 
/user/create                 |       POST        | Create User           | 
/user/find-by-email/:email   |       GET         | Find by Email         | 
/user/find-by-id/:id         |       GET         | Find by Identity      | 
/user/find-all/              |       GET         | Find All              | 
/user/update/:id             |       PUT         | Update User           |    
/user/delete/:id             |       DELETE      | Delete User           |
/hotel/find/:cityCode        |       GET         | Find Hotels by CityCode|      |

<br>

*Thanks for giving me this chance. I hope you like this API code sample. I am available if you have any questions about the project.*

<br>

https://www.github.com/danny-oli
