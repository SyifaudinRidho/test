var express = require('express');
const axios = require('axios');
var router = express.Router();
const storeController = require("../controller/UsersController");

/* GET login page. */
router.get('/', function(req, res) {
  res.render('login', { title: 'Login', email: 'user@gmail.com', pass:'12345678'});
});

/* GET home page. */
router.get("/store", storeController.getUsers);

module.exports = router;
