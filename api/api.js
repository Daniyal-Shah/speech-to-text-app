/* eslint-disable prettier/prettier */
import axios from 'axios';
import {URL} from '../constants/endpoints';

export const getTranslationAPI = async data => {
  try {
    const response = await axios.post(URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('API RESPONSE ===>', response);
  } catch (error) {
    console.log('API ERROR ===>', error);
  }
};
