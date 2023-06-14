/* eslint-disable prettier/prettier */
import axios from 'axios';

export const getTranslationAPI = async data => {
  try {
    const response = await axios.post(
      'http://192.168.0.14:4000/api/openai',
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );

    console.log('API RESPONSE ===>', response?.data);
  } catch (error) {
    console.log('API ERROR ===>', error);
  }
};
