# Proyecto-2---API-Reboot

### User Signup/Login

METHOD | ENDPOINT         | TOKEN | ROLE | DESCRIPTION              | POST PARAMS                                                              | RETURNS
-------|------------------|-------|------|--------------------------|--------------------------------------------------------------------------|--------------------
POST   | /auth/signup     | -     | user | User Signup              | `userName`, `email`, `password`, `country`, `birthDate` , `phone_number` | { token: `token` }
POST   | /auth/login      | -     | user | User Login               | `email`, `password`                                                      | { token: `token` }

### User Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION              | POST PARAMS                                                              | RETURNS
-------|------------------|-------|-------|--------------------------|--------------------------------------------------------------------------|--------------------
GET    | /user            | YES   | admin | Get All Users            |  `query params`                                                          | [{user}]
GET    | /user/profile    | YES   | user  | Get Own Profile          |                                                                          |  {user}
GET    | /user/:userId    | YES   | user  | Get One User             |                                                                          |  {user}
POST   | /user            | YES   | admin | Create one user          | `userName`, `email`, `password`, `country`, `birthDate` , `phone_number` | {user}
PUT    | /user/profile    | YES   | user  | Update own profile       | `userName`, `email`, `password`, `country`, `birthDate` , `phone_number` | {message: 'Profile updated'}
PUT    | /user/password   | YES   | user  | Reset password           | `oldPassword´, `newPassword`, `repeatPassword`                           | { message: 'Password updated }
PUT    | /user/:userId    | YES   | admin | Update one user          | `userName`, `email`, `password`, `country`, `birthDate` , `phone_number` | {message: 'User updated'
DELETE | /user/:userId    | YES   | admin | Delete one user          | `userId´                                                                 | {message: 'User deleted'}
DELETE | /user/profile    | YES   | user  | Delete own profile       |                                                                          | { message: 'Profile deleted' }

### Books Endpoints

METHOD | ENDPOINT            | TOKEN | ROLE  | DESCRIPTION             | POST PARAMS                                                                | RETURNS
-------|---------------------|-------|-------|-------------------------|----------------------------------------------------------------------------|--------------------
POST   | /books              | YES   | admin | Create book entry       | `Title´, `Author´, `genre´, `pages´, `publish_date´, `publisher´, `genre´  | {book}  
PUT    | /books/:bookId      | YES   | admin | Update one book         | `Title´, `Author´, `genre´, `pages´, `publish_date´, `publisher´, `genre´  | {book}
DELETE | /books/:bookId      | YES   | admin | Delete one book         | `bookId´                                                                   | {message: 'Book deleted'}
GET    | /books/:bookId      | YES   | user  | Get a book              | `bookId´                                                                   | {book}
GET    | /books              | YES   | user  | Get all books           |                                                                            | {book}
GET    | /books              | YES   | user  | Get a book              | `bookId´                                                                   | {book}
GET    | /books              | YES   | user  | Get an specific kind of book| `query params´                                                         | {book}


### Publisher Endpoints

METHOD | ENDPOINT                | TOKEN | ROLE  | DESCRIPTION             | POST PARAMS                            | RETURNS
-------|-------------------------|-------|-------|-------------------------|----------------------------------------|--------------------
POST   | /publisher              | YES   | admin | Create a publisher      | `Name´, `Country´, `fundation_Date´    | { publisher }  
PUT    | /publisher/:publisherId | YES   | admin | Create a publisher      | `Name´, `Country´, `fundation_Date´    | { publisher }   
DELETE | /publisher/:publisherId | YES   | admin | Delete a publisher      | `publisherId´                          | {message: 'Publisher deleted'}
GET    | /publisher              | YES   | user  | Get all publishers      |                                        | { publisher }
GET    | /publisher/publisherId  | YES   | user  | Get a publisher         | `publisherId´                          | { publisher }

### ReadList Endpoints

METHOD | ENDPOINT         | TOKEN | ROLE  | DESCRIPTION             | POST PARAMS    | RETURNS
-------|------------------|-------|-------|-------------------------|----------------|--------------------
POST   | /readList        | YES   | user  | Create "to read" list   | `bookId´       | {readList}
PUT    | /readList        | YES   | user  | update "to read" list   | `bookId´       | {readList}
DELETE | /readList        | YES   | user  | update "to read" list   | `bookId´       | { message: 'To read list deleted'}

### Comment Endpoints

METHOD | ENDPOINT                     | TOKEN | ROLE | DESCRIPTION                   | POST PARAMS                            | RETURNS
-------|------------------------------|-------|------|-------------------------------|----------------------------------------|--------------------
POST   | /comment                     | YES   | user | create a comment              | `title´, `body´. `rating´              | [{comment}]
GET    | /comment/profile             | YES   | user | Get Own comments              |                                        | [{comment}]
GET    | /comment/:commentId          | YES   | user | Get One comment               |                                        | {comment}
GET    | /comment/:userId/all         | YES   | user | Get One User's comments       |                                        | [{comment}]
PUT    | /comment/:commentId/like     | YES   | user | Like one comment              |                                        | {comment}
GET    | /comment/:bookId/all         | YES   | user | Get all comments from a book  |                                        | [{comment}]
PUT    | /comment/:profile/commentId  | YES   | user | update a comment              | `commentId´, `title´, `body´, `rating´ | [{comment}]
DELETE | /comment/:profile/commentId  | YES   | user | delete a comment              | `commentId´                            | [{comment}]
PUT    | /comment/:commentId          | YES   | admin| update a comment              | `commentId´, `title´, `body´, `rating´ | [{comment}]
DELETE | /comment/:commentId          | YES   | admin| delete a comment              | `commentId´                            | [{comment}]
