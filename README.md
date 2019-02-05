# Backend Developer Assignment
Your assignment is to develop a Product service using either Node.js or PHP. The service should store product data in some kind of database and expose *products* and *collections* through a simple API. We recommend that you use a framework for your application, but it's not required. Think of your work as a starting point for a bigger project, something that could be built upon by other developers in the future. Write the tests that you find suitable for this project.

## Requirements
### Data import
* The API should provide a PUT or POST endpoint to add or update products from a JSON encoded list.
* A sample list of products is available in the `products.json` file.
* It should be possible to process only one data import request at a time.
* The import requests should be handled in the order they are received.
* The service should be able to withstand sudden spikes in import requests.
### Products
* The API should have an endpoint returning a list of all products.
* The API should provide an endpoint returning detailed product information given a certain product ID.
* It should be possible to retrieve a list of IDs of all the products of the same size
### Collections
* The API should have an endpoint returning a list of all collections
* It should be possible to retrieve a list of IDs of all the products in the same collection

Collections and Product service API.

1. How to build and run:
npm install
npm run dev

2. Tools used: 
NodeJS    - The primary tech stack.
Express   - Web server and routing
MongoDB   - DB and storage
Mongoose  - DB Abstraction and ORM
Gulp      - Some automation

3. Why the tools above:
NodeJS together with express and mongoDB is quite simple and good for quickly creating APIs and prototyping. NoSQL DBs have the extra advantage of flexibility with design.ss

4. Not completed:
There was a misunderstanding about the tasks so I only received this task on the 30th (Wednesday). I opted to bash it out overnight so unfortunately, there are components that are not completed. They are listed below:
- Data validation for duplication on data import
- Only managed to set up the tests but did not have the time to write any good tests :/
- Also did not have the time to squash commits all and have a clean respository for version control