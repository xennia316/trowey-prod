const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const validateRequest = require('../middlewares/Auth');

require('dotenv').config();

const { Users,Collectors } = require('../models');

//Encryption Level
const encLevel = parseInt(process.env.BCRYPT_ENC_LEVEL);

//Secret Key
const JWT_SECRET = process.env.JWT_SECRET;


router.post('/check', async (req, res) => {
    const { token } = req.headers;
    try {
        const decoded = await jwt.verify(token, JWT_SECRET);
        res.json(decoded);
    } catch (e) {
        res.status(400).json({ error: "Invalid User" });
    }
});


router.post('/register', async (req, res) => {
    const { password } = req.body;
    const data = req.body;
    const salt = await bcrypt.genSalt(encLevel);
    let hashedPassword = await bcrypt.hash(password, salt);
    data.password = hashedPassword;

    try{
        const { cid } = await Collectors.findOne({ where: {
            name: 'Hysacam'
        }})
        data.cid = cid;
        console.log(data);
    }catch(e){
        console.error(e);
    }

    try {
        const user = await Users.create(data);
        const key = jwt.sign(JSON.stringify(user), JWT_SECRET);
        res.json(key);
    } catch (e) {
        console.error(e);
        res.status(400).json({ error: e.message });
    }
});

router.post('/login', async (req, res) => {
    const { phone, password } = req.body;
    const data = await Users.findOne({
        where: {
            phone,
        }
    });

    if (data) {
        const match = await bcrypt.compare(password, data.password);
        if (match) {
            const key = jwt.sign(JSON.stringify(data.dataValues), JWT_SECRET);
            res.json(key);
        }
        else {
            res.json({ error: `Wrong password for ${username}` });
        }
    }
    else {
        res.json({ error: 'User Not Found' });
    }
}
);


module.exports = router;