const express = require('express');
const getWeek = require('../utils');
const sendMessage = require('../sendMessage');
const router = express.Router();
require('dotenv').config();

const validateRequest = require('../middlewares/Auth');

const { Routes, Collectors } = require('../models');

router.post('/save', validateRequest, async (req, res) => {
    const { cid } = req.collector;
    const data = req.body;
    data.cid = cid;
    try {
        const route = await Routes.create(data);
        await sendMessage(route);
        res.json({success: true});
    }
    catch (e) {
        res.status(400).json({ error: e.message});
    }
});

router.get('/:cid', async (req, res) => {
    const { cid } = req.params;
    const { start_time, end_time } = getWeek();
    try{
        const route = await Routes.findOne({
            where: {
                cid,
                start_time,
                end_time
            }
        });
        res.json(route);
    }
    catch(e) {
        res.status(400).json({error: e.message});
    }
})

module.exports = router;