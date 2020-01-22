const express = require("express");
const fileUpload = require("express-fileupload");
const validateFiles = require("./validateFiles");

const app = express();

app.use(fileUpload());

app.post("/upload", validateFiles, ( req, res ) => {
    console.log( " ", req.files );
    res.send("Got some files")
});

app.get("/", (req, res) => {
    res.send("Bla Bla");
});


app.listen(3030);