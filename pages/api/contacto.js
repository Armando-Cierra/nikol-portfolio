const {isEmpty, isEmail} = require('validator');
const nodemailer = require('nodemailer');

export default async (req, res) => {
  const {method} = req;

  if(method === 'POST'){
    const {nombre, correo, telefono, descripcion} = req.body;

    if(isEmpty(nombre) || isEmpty(correo) || isEmpty(telefono) || isEmpty(descripcion)){
      res.send({error: true, message: 'Complete todos los campos*'});
    } else {
      if(!isEmail(correo)){
        res.send({error: true, message: 'Ingrese un correo válido*'});
      } else {

        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com", 
          secure: true,
          port: 465, 
          auth: {
              user: 'pereznikoldesign@gmail.com',
              pass: '211197noviembre'
          }
        })

        const mailOption = {
          from: 'pereznikoldesign@gmail.com',
          to: 'pereznikoldesign@gmail.com',
          subject: 'PORTAFOLIO',
          html: `
            <h1 style="text-align: center; color: #508875;">Nuevo Proyecto</h1>
            <p style="text-align: center;">Hola Nikol, alguien ha tratado de ponerse en contacto contigo desde tu portafolio en línea.</p>
            <hr>
            <p><strong>Nombre: </strong>${nombre}</p>
            <p><strong>Correo: </strong>${correo}</p>
            <p><strong>Teléfono: </strong>${telefono}</p>
            <p><strong>Descrión del proyecto: </strong>${descripcion}</p>
          `
        }

        try{
          await transporter.sendMail(mailOption);
          res.send({error: false, message: 'Correo Enviado'});
        } catch(error){
          res.send({error: true, message: error})
        }
      }
    }
  }
}