const bodyParser = require("body-parser");
const express = require("express");
const nodeMailer = require("nodemailer");

const app = new express()
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.post("/",async(req,res)=>{
    const{email} = req.body;
    
    let transporter = nodeMailer.createTransport({
       service: 'gmail',
       auth: {
        user: 'amaltest04@gmail.com',
        pass: 'tosxiukktyphavus'
       } 
      });

      const message ={
        from: 'amaltest04@gmail.com', 
          to: 'amalashraf04@gmail.com',
        subject: "node-mailer-assignment", 
        text: "Hello Friend,This is the testing email for  Mail-a-friend Assignment", 
      }
    
      let info = await transporter.sendMail(message);
    
      console.log("Message sent: %s", info.messageId);

       res.send("Email sent successfully !");
})


app.listen(port,()=>{
    console.log(`The server running at http://localhost:${port}`);
})
