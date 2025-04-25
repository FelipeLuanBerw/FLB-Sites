const mailService = require("../services/mailService");

exports.sendContactEmail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await mailService.sendEmail({ name, email, message });
    res.status(200).json({ message: "E-mail enviado com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    res.status(500).json({ error: "Erro ao enviar o e-mail." });
  }
};
