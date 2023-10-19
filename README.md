## NodeJs Assignment - (To Do)

This is and Assignment project for the `todo-backend app`, A simple todo *app backend* with some basic features like,

1. User - Registration and Login.
2. Todo - Get All Todos, Update and Delete.

This is designed using `NodeJs`, `MySql` and `MVC` architecture. All the softwares used are.

1. `NodeJs` - *v20.8.1*
2. `MySQL`  - *v8.0.33*

## Project Overview
![Picture](./repoassets/images/main_arch.png)

This project is designed using `MVC` architecture that involves the following three compenents.

1. `Model` - This represents the data that is being used by `DBMS` or the `response/requests`.
2. `View` - This represents the `UI-Views` that are being served to the user (here it's not used in this project).
3. `Controllers` - This represents the controllers that controls the incoming requests.


More details on architecture and complete project info is [here](./repoassets/docs/docs.md)

## Getting Started
To get started with the project download thw above software and install. Then follow the steps given below.

1. Clone the repository

    ```shell
    git clone https://github.com/abhijeet-Bh/nodejs-assignment.git
    ```
2. Navigate to the `nodejs-assignment` folder.

    ```shell
    cd nodejs-assignment
    ```

3. Install all the dependencies `node_modules`.

    ```shell
    npm install
    ```

4. Now Create the `.env` file in the root directory, and paste the below code in this file.

    ```dotenv
    DB_HOST=Your_DB_Host
    DB_USER=Your_DB_userName
    DB_PASS=Your_Password
    DB_NAME=Your_DB_Name
    JWT_SECRET=your_jwt_secret
    PORT_NO=3000
   ```

5. Now, you're all set. Just create two table in your database, `users` and `todos`.
6. Finally, to run your server run the below command from the root directory.

    ```shell
    npm run dev
    ```
   >"Cheers, now you'll have your server running at `http://localhost:3000/`"

## Endpoints

### `POST /user/signup`

#### Example Request
* Body
```json
{
    "username":"username",
    "firstname":"Abhijeet",
    "lastname":"Bhardwaj",
    "email":"abhijeet@email.com",
    "password":"password"
}
```
#### Example Response
```json
{
    "id": 0,
    "userid": "89793e80-6e44-11ee-b09b-654e7005d9bd",
    "username":"username",
    "firstname":"Abhijeet",
    "lastname":"Bhardwaj",
    "email":"abhijeet@email.com",
    "password":"password"
}
```

### `POST /user/login`

#### Example Request
* Body
```json
{
  "username":"username",
  "password":"password"
}
```
#### Example Response
```json
{
   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NjEzMywiZXhwIjoxNjk3Njk5NzMzfQ.20fFttFjNXBr3IE0B7YGoRD9mWp11Nd0LMBpPF-m3rE"
}
```

### `POST /user/login`

#### Example Request
* Body
```json
{
  "username":"username",
  "password":"password"
}
```
#### Example Response
```json
{
   "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NjEzMywiZXhwIjoxNjk3Njk5NzMzfQ.20fFttFjNXBr3IE0B7YGoRD9mWp11Nd0LMBpPF-m3rE"
}
```
>Note :- for wrong credentials, you'll get error.
![Picture](./repoassets/images/login_failure.png)

### `POST /todo`

#### Example Request
* Header
```json
{
  "Content-Type": "application/json",
  "Bearer Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NTIzMiwiZXhwIjoxNjk3Njk4ODMyfQ.RrfBmXN0-XK6MhV2krA338gCFZhAqy7XAWoj8FbKZQY"
}
```
* Body
```json
{
   "title":"Another New Todo",
   "description":"Another test Description"
}
```
#### Example Response
```json
{
   "id": 0,
   "todoid": "25c624e0-6e47-11ee-a7f7-ab41bc59a9b8",
   "userId": "89793e80-6e44-11ee-b09b-654e7005d9bd",
   "title": "Another New Todo",
   "description": "Another test Description"
}
```

### `GET /todo`

#### Example Request
* Header
```json
{
  "Content-Type": "application/json",
  "Bearer Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NTIzMiwiZXhwIjoxNjk3Njk4ODMyfQ.RrfBmXN0-XK6MhV2krA338gCFZhAqy7XAWoj8FbKZQY"
}
```

#### Example Response
```json
[
   {
      "todoid": "0cbdc200-6e47-11ee-82ae-b1fe137abb09",
      "userid": "89793e80-6e44-11ee-b09b-654e7005d9bd",
      "title": "Another New Todo",
      "description": "Another test Description"
   },
   {
      "todoid": "25c624e0-6e47-11ee-a7f7-ab41bc59a9b8",
      "userid": "89793e80-6e44-11ee-b09b-654e7005d9bd",
      "title": "Another New Todo",
      "description": "Another test Description"
   },
   {
      "todoid": "b5b554f0-6e46-11ee-b09b-654e7005d9bd",
      "userid": "89793e80-6e44-11ee-b09b-654e7005d9bd",
      "title": "Another New Todo",
      "description": "Another test Description"
   }
]
```

### `GET /todo/{todo_id}`

#### Example Request
* Header
```json
{
  "Content-Type": "application/json",
  "Bearer Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NTIzMiwiZXhwIjoxNjk3Njk4ODMyfQ.RrfBmXN0-XK6MhV2krA338gCFZhAqy7XAWoj8FbKZQY"
}
```

#### Example Response
```json
{
   "todoid": "0cbdc200-6e47-11ee-82ae-b1fe137abb09",
   "userid": "89793e80-6e44-11ee-b09b-654e7005d9bd",
   "title": "Another New Todo",
   "description": "Another test Description"
}
```
>Note:- This endpoint will only work, the todo you're requesting is created by you. In case if you haven't created, you will ge error.
![Picture](./repoassets/images/unauthorised_todo.png)

### `PUT /todo/{todo_id}`

#### Example Request
* Header
```json
{
  "Content-Type": "application/json",
  "Bearer Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NTIzMiwiZXhwIjoxNjk3Njk4ODMyfQ.RrfBmXN0-XK6MhV2krA338gCFZhAqy7XAWoj8FbKZQY"
}
```
* Body
```json
{
    "title":"Updated Title",
    "description":"Updated Description"
}
```

#### Example Response
```json
{
   "todoid": "0cbdc200-6e47-11ee-82ae-b1fe137abb09",
   "userId": "89793e80-6e44-11ee-b09b-654e7005d9bd",
   "title": "Updated Title",
   "description": "Updated Description"
}
```

>Note:- In Case of wrong `todoid` you'll get error.
![Picture](./repoassets/images/no_todo_found.png)

### `DEL /todo/{todo_id}`

#### Example Request
* Header
```json
{
  "Content-Type": "application/json",
  "Bearer Token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijg5NzkzZTgwLTZlNDQtMTFlZS1iMDliLTY1NGU3MDA1ZDliZCIsImlhdCI6MTY5NzY5NTIzMiwiZXhwIjoxNjk3Njk4ODMyfQ.RrfBmXN0-XK6MhV2krA338gCFZhAqy7XAWoj8FbKZQY"
}
```

#### Example Response
```json
"25c624e0-6e47-11ee-a7f7-ab41bc59a9b8"
```

>Note:- In Case of wrong `user` you'll get error.
![Picture](./repoassets/images/forbiden_attem.png)
