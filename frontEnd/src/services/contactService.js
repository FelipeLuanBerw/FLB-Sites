import api from './api';

export const sendContactForm = async (formData) => {
  const response = await api.post('/contact', formData);
  return response.data;
};
