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

  try {
    const response = await openai.createTranscription(
      buffer, // The audio file to transcribe.
      'whisper-1', // The model to use for transcription.
      undefined, // The prompt to use for transcription.
      'json', // The format of the transcription.
      1, // Temperature
      'en', // Language
    );
    console.log(response.data);
    return response;
  } catch (error) {
    console.log('error in transcription===>');
    console.log(error.response.data);
    return error?.response?.data;
  }
}

router.post('/', upload.any('file'), (req, res) => {
  console.log('POST OPENAI==>');
  console.log(req.files);

  const audio_file = req.files[0];
  const buffer = audio_file.buffer;
  buffer.name = audio_file.originalname;

  const response = transcribe(buffer);

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
