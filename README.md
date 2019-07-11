# my_snapchat-API

How to start the api :
                        1- npm install
                        2- nodemon start.js
                        3- Enjoy

API routes:
            POST "/register" body: email, password, return "saved to database" or error

            POST "/login" body: email, password return
            "OK" if the provided email and password is saved to the database OR error 'incorrect login'

            GET "/all" return all the user in the database

            POST "/snap" body: from, to, photo(a url), duration(number)

            GET "/snap/${id}" return the snap by the unique _id of MONGODB

            GET "/seen/${id}" delete the snap by the unique _id of MONGODB