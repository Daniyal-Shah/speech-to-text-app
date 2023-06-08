/* eslint-disable prettier/prettier */
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use('/api/openai/', require('./routes/api'));

app.use(function (err, req, res, next) {
  res.status(422).send({error: err.message});
});

app.listen(process.env.PORT || 4000, function () {
  console.log('Openai whisper listening at 4000!');
});
