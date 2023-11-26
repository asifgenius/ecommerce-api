# Ecommerce api with express

## Features
- Create, read, update, delete of user
- Create, read, update, delete of product 
- Create, read, update, delete of category 
- Create, read, update, delete of subCategory 
- Create, read, update, delete of purchase 

## Tech
- Express JS

## Installation
Install the dependencies and devDependencies and start the server.
```sh
$ npm i
```
Run the Server Project
```sh
$ npm start
```
Verify the deployment to your server address in your browser
```sh
$ 127.0.0.1:5000
```

## Endpoints
```http
POST /api/v1/users 
GET /api/v1/users?offset=2&limit=2
POST /api/v1/categories 
GET /api/v1/categories?offset=2&limit=2
POST /api/v1/subCategories
GET /api/v1/subCategories?offset=2&limit=2
POST /api/v1/products
GET /api/v1/products?offset=2&limit=2
POST /api/v1/purchases
GET /api/v1/purchases?offset=2&limit=2
```
## Status Code
| Status Code | Description |
| ------ | ------ |
| 200  | OK |
| 201 | CREATE |
| 400 | BAD REQUEST |
| 404 | NOT FOUND |
| 500 | INTERNAL SERVER ERROR |


## Generator Sceret Key
```
openssl rand -hex 32
```