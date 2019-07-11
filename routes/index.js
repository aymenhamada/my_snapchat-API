const express = require('express');
const router = express.Router();
const { catchErrors } =  require('../handlers/errorHandlers');
const userController = require('../controllers/userController');
const snapController = require('../controllers/snapController');



router.post('/register', catchErrors(userController.register))

router.post('/login', catchErrors(userController.login))

router.get('/all', catchErrors(userController.all))

router.post('/snap', catchErrors(snapController.send))

router.get('/snap/:id', catchErrors(snapController.getSnapById));

router.get('/seen/:id', catchErrors(snapController.seen));

module.exports = router;