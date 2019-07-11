# my_snapchat-API

How to start the api :
                        1- npm install
                        2- nodemon start.js
                        3- Enjoy

API routes:

            POST "/register" body: email, password,
            email is unique.
            return "saved to database" or error if input are not valid, OR 'address email is already used' IF the adress email is already used.

            POST "/login" body: email, password
            return" OK" if the provided email and password is saved to the database OR error 'incorrect login'

            GET "/all" return all the user in the database

            POST "/snap" body: from, to, photo(a url), duration(number)
            put a snap in the database, all the body is required.

            GET "/snap/${email}" body: email,
            return all the snap receive by the user.

            GET "/seen/${id}" body: id(the unique _id of MONGODB index)
            delete the snap.


Please check example.js if you are still confused.