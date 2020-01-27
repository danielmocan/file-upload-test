const nodemailer = require( "nodemailer" );

const transporter = nodemailer.createTransport( {
    service: "gmail",
    auth: {
        user: "Your@email.ro",
        pass: "YourPassword",
    },
} );

const sendMail = mailOptions => {
    transporter.sendMail( mailOptions, ( error, info ) => {
        if ( error ) {
            console.log( error );
        } else {
            console.log( `Email sent: ${ info.response }` );
        }
    } );
};

const sendLogs = ( file ) => {
    const mailOptions = {
        from: "expiroapp@gmail.com",
        to: `daniel.mocan@fortech.ro`,
        attachments: [
            {   // binary buffer as an attachment
                filename: file.name,
                content: file.data
            }
        ],
        subject: "Email with logs",
        html: logsTemplate( ),
    };

    sendMail( mailOptions );
};


const logsTemplate = ( ) => `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Recuperare Parolă Expiro.ro</title>
    </head>
    <body>
        <div>
            <h3>Salut,</h3>
            <p>Ai cerut să iți fie resetată parola, am generat o nouă parolă pentru tine:</p>
            <p><b></b></p>
            <p>Nu uita să îți schimbi parola după ce te loghezi.</p>
            <br>
            <p><b>Notă:</b> parola temporara esta valida pana la dupa aceasta perioadă poti cere o parolă nouă.</p>
            <p>O zi frumoasă.</p>
        </div>
    </body>
    </html>
`;

module.exports = sendLogs;
