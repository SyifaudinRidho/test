var express = require('express');
const axios = require('axios');
var router = express.Router();

var data = () => {
  axios.get('https://fakestoreapi.com/users/').then((res) => {
    return res;
    // Data sudah tersimpan di var data namun belum terkirim ke view
    // console.log(res) un komen untuk melihat data
  }).catch((err) => console.error(err))
}

data()

/* GET login page. */
router.get('/login', function(req, res) {
  res.render('login ', { title: 'Login', email: 'user@gmail.com', pass:'12345678'});
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'index', data:data() });
});
router.get('/example/a', (req, res) => {
  res.send('Hello from A!')
})
router.get('/example/b', (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from B!')
})

module.exports = router;
