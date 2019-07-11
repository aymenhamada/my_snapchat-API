const express = require('express');
const bodyparser = require('body-parser');
const routes = require('./routes/index');
const errorHandlers = require('./handlers/errorHandlers');
const path = require('path');
const session = require('express-session');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(session({
    secret: "secret",
    key: "session",
    resave: false,
    saveUninitialized: false,
}));

app.use(cors());
app.use(fileUpload());

app.use((req, res, next) => {
    next();
});

app.use('/', routes);

app.use(errorHandlers.flashValidationErrors);

module.exports = app;