
const axios = require('axios');

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const formData = JSON.parse(event.body);
    const { email, mensaje } = formData;

    try {
      // Enviar datos a Formspark
      const response = await axios.post('https://api.formspark.io/YOUR_FORM_ID', {
        email,
        mensaje,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.FORMSPARK_API_KEY}`,
        }
      });

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Formulario enviado con éxito' }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Hubo un problema al enviar el formulario' }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Método no permitido' }),
    };
  }
};
