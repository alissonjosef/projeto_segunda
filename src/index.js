const express = require('express');
const bodyParser = require('boby-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('.controllers/authController')(app);

app.listen(3000);
