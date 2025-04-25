import { useState, useEffect } from 'react';
import AOS from 'aos';
import validator from 'validator';
import { toast } from 'react-toastify';
import { sendContactForm } from '../../../services/contactService';

export default function useContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validator.isEmail(formData.email)) {
      toast.error('Por favor, insira um email válido.');
      return;
    }

    try {
      await sendContactForm(formData);
      toast.success('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      if (error.response?.data?.message) {
        toast.error(`Erro: ${error.response.data.message}`);
      } else {
        toast.error('Erro inesperado ao enviar.');
      }
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
}
