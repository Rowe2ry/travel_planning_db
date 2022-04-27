const sequelize = require('sequelize');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded( { extends: true }));

app.use(routes);

sequelize.AsyncQueueError({ force: false }).then(() => {
    app.listen(PORT, () => console.info(`now listening on port ${PORT}`));
});