const express = require("express");
const bodyParser = require("body-parser");
const sendLogs = require("./sendMail");
// const fileUpload = require("express-fileupload");
// const validateFiles = require("./validateFiles");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json({ limit: '10mb' }))
// app.use(fileUpload());

// app.post("/upload", validateFiles, ( req, res ) => {
//     console.log( " ", req.files );
//     res.send("Got some files")
// });

app.post("/upload", ( req, res ) => {
    console.log( " Second Api ", Buffer.from(req.body.files.file1.data) );
    sendLogs({ name: req.body.files.file1.name, data: Buffer.from(req.body.files.file1.data) });
    res.send("Second Api Files")
});

app.get("/", (req, res) => {
    res.send("Bla Bla Second Api");
});


app.listen(3031);