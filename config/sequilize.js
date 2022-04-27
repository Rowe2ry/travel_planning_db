const { Sequelize } = require('sequelize');
require('dotenv').config();

const connection = new Sequelize (
    env.DB_USER,
    env.DB_PASSWORD,
    env.DB_DATABASE,
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = connection;