const express = require("express");
const fileUpload = require("express-fileupload");
const rp = require('request-promise');
const validateFiles = require("./validateFiles");

const app = express();

app.use(fileUpload());

app.post("/upload", validateFiles, ( req, res ) => {
    console.log( " * first", req.files );

    const options = {
        method: 'POST',
        uri: 'http://localhost:3031/upload',
        body: {
            files: { ...req.files }
        },
        json: true // Automatically stringifies the body to JSON
    };
     
    rp(options)
        .then(function (parsedBody) {
            res.send("Got some files")
        })
        .catch(function (err) {
            console.log("BP IN test Error", err)
            res.send("BP IN test")
        });

   
});


app.get("/", (req, res) => {
    res.send("Bla Bla");
});


app.listen(3030);