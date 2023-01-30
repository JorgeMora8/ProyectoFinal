import hbs from "nodemailer-express-handlebars";
import nodemailer from "nodemailer"
import path from "path"
import { adminEmail } from "../configuration/ConfigFile.js";

 let transporter = nodemailer.createTransport({
    service: "gmail", 
    port: 587,
    auth: {
      user: "jorgeandresmm2002@gmail.com", 
      pass: "kjqjzgwnxpzfhuvk", 
    },
  });

  const handlebarsOptions = { 
    viewEngine: {
      partialsDir: path.resolve("./src/views/"),
      defaultLayout: false 
    }, 
    viewPath: path.resolve("./src/views/"),
  };

  transporter.use("compile", hbs(handlebarsOptions))

export async function sendEmail(email, productList){ 

    if(!email) throw new Error("Email missing")
    await transporter.sendMail({
        from: 'Jorge Mora. Proyecto final',
        to: email, 
        subject: "Registro De Compra", 
        template:"email", 
        context:{
          products: productList
        }
      });

      await transporter.sendMail({ 
        from:"Jorge Mora. Proyecto final", 
        to:adminEmail, 
        subject:"Nueva Compra", 
        template:"order",
        context:{ 
          productSold: productList
        }
      })
}


