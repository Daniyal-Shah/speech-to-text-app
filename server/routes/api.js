/* eslint-disable prettier/prettier */
const express = require('express');
const multer = require('multer');

const {Configuration, OpenAIApi} = require('openai');

const router = express.Router();
const upload = multer();

const configuration = new Configuration({
  apiKey: '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',
});

async function transcribe(buffer) {
  const openai = new OpenAIApi(configuration);

  const response = await openai.createTranscription(
    buffer, // The audio file to transcribe.
    'whisper-1', // The model to use for transcription.
    undefined, // The prompt to use for transcription.
    'json', // The format of the transcription.
    1, // Temperature
    'en', // Language
  );
  return response;
}

router.post('/', upload.any('file'), (req, res) => {
  console.log('API POSt');
  console.log(req.body);

  // const audio_file = req.body.file;
  // const buffer = audio_file.buffer;
  // buffer.name = audio_file.originalname;

  const response = transcribe(req.body.file);

  response
    .then(data => {
      res.send({
        transcription: data.data.text,
      });
    })
    .catch(err => {
      res.send({error_message: err});
    });
});

module.exports = router;
