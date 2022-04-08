const express = require('express');
require('dotenv').config();

import socket from './utils/socket';
import { getData } from './utils/db'

const app = express();


const PORT = process.env.PORT || 3000;

const root = require('path').join(__dirname, '../client' ,'build')
app.use(express.static(root));

app.get('/api/data', async(req: any, res: { json: (arg0: any) => void; }) => {
    const data = await getData();
    res.json(data);
})

app.post('/post', (req: any, res: { redirect: (arg0: string) => void; }) => {
    console.log(req);
    res.redirect('/');
})

app.get("*", (req: any, res: { sendFile: (arg0: string, arg1: { root: any; }) => void; }) => {
    res.sendFile('index.html', { root });
})

socket(app, PORT)