const express = require('express');
const router = express.Router();

const { Requests } = require('../models');

const validateRequest = require('../middlewares/Auth');

router.post('/new', validateRequest, async (req, res) => {
    const { uid } = req.user;
    data = req.body;
    data.uid = uid;

    try {
        const request = await Requests.create(data);
        res.json(request);
    }
    catch(e) {
        res.status(400).json({error: e.message});
    }
})


router.get('/all', validateRequest, async (req, res) => {
    try {
        const requests = await Requests.findAll({
            order : [ ['createdAt', 'ASC']]
        });

        res.json(requests);
    }
    catch(e) {

    }
})



module.exports = router;