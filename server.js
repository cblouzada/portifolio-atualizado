import express from 'express';
import { urlencoded } from 'body-parser';
import { createTransport } from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));

// Configuração do nodemailer - substitua com suas próprias informações
const transporter = createTransport({
  service: 'Hotmail',
  auth: {
    user: 'carlosbergson@outlook.com',
    pass: '$031016Bb',
  },
});

app.post('/enviar-mensagem', (req, res) => {
  const { nome, email, mensagem } = req.body;

  const mailOptions = {
    from: 'SEU_EMAIL@gmail.com',
    to: 'carlosbergson@outlook.com', // Substitua com o seu endereço de e-mail
    subject: 'Nova Mensagem de Contato',
    text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      res.sendStatus(500);
    } else {
      console.log('E-mail enviado:', info.response);
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});
