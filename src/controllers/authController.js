const express = require('express');

const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const user = User.create(req.bady);

        return res.send({ user});
    }catch (err){
        return res.status(400).send({error: 'Registration failed'});
    }
})

module.exports = app => app.user('/auth', router);