const getUserModel = require('../model/UserModel');

//Obtener todos los usuarios
let getUsers = async (req, res) => {
  let users = await getUserModel.getUsers();
//   res.status(200).send(users);
  res.render('index', { title: 'index', data: users });
};

const storeController = {
  getUsers
};

module.exports = storeController;