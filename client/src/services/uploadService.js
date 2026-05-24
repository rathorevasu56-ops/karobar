import axios from 'axios';

const API_URL = 'http://localhost:5000/api/upload';

const uploadImage = async (formData) => {
  const response = await axios.post(API_URL, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

const uploadService = {
  uploadImage,
};

export default uploadService;