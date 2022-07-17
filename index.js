const express = require("express");
const {Sequelize, DataTypess} = require("sequelize");
const app = express();

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './task-list.db'
});



console.log(
    __dirname
)