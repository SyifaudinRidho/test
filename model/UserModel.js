const express = require("express");
// const fetch = require('node-fetch');
// import fetch from 'node-fetch';

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

async function getUsers() {
  const res = await fetch("https://fakestoreapi.com/users/");
  return await res.json();
}

let users = {
  getUsers,
};

module.exports = users;