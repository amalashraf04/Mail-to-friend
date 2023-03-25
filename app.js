
const nodemailer = require('nodemailer');
  

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

        user: 'amaltest04@gmail.com',
        pass: 'tosxiukktyphavus'
        
    }
});

let message = {
    from: 'amaltest04@gmail.com',
  to: 'amalashraf04@gmail.com',
   
    subject: 'node-mailer-assignment',
    text: 'Hello Friend,This is the testing email for  Mail-a-friend Assignment'
};

transporter.sendMail(message, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
