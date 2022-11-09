const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./routes/Users');
const collectorRouter = require('./routes/Collectors');
const routesRouter = require('./routes/Routes');
const requestRouter = require('./routes/Requests');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', userRouter);
app.use('/collectors', collectorRouter);
app.use('/routes', routesRouter);
app.use('/request', requestRouter);

const port = process.env.PORT || 5500;

const db = require('./models');

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});

app.get('/', (req,res) => {
    res.json({ hello: 'world'});
})