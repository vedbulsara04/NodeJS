var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'docker19999@gmail.com',
        pass:'your_16_char_pass'
    }
});

var mailOptions = {
    from: 'docker19999@gmail.com',
    to: 'vedbulsara9@gmail.com',
    subject: 'Ved Bulsara',
    text: 'Hello Ved Bulsara!'
};

transporter.sendMail(mailOptions, function (error, info){
    if(error){
        console.log(error);    
    }
    else{
        console.log("Email sent : ", + info.respnse);
    }
});
