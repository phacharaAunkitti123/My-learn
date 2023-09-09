import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import 'dotenv/config';

import sequelize from './database';

(async () => {
    try {
        await sequelize.authenticate();
        console.log("auth to database success")
    } catch (e) {
        console.error(e)
    }
})()

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors({
    origin: ['localhost', '127.0.0.1']
}))

const con_business_category = require('./controllers/business_category')
const con_causes_accident = require('./controllers/causes_accident')
const con_road_safety = require('./controllers/road_safety')
const con_user_type = require('./controllers/user_type')
const con_user = require('./controllers/user')



app.use('/business_category', con_business_category)
app.use('/causes_accident', con_causes_accident)
app.use('/road_safety', con_road_safety)
app.use('/user_type', con_user_type)
app.use('/user', con_user)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
