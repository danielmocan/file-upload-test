const mimeType = ["application/zip","text/plain"];
const maxFileSize = 10000000; // max file size of roughly 10Mb

const validateFiles = ( req, res, next ) => {
    if( !req.files ) {
        res.send("No file uploaded");
    }
    const fileNames = Object.keys(req.files);
    const isCorrectFileType = (fileName) => mimeType.includes(req.files[fileName].mimetype);
    const hasCorrectFileTypes = fileNames.every(isCorrectFileType);
    const isFileSizeToBig = (fileName) => req.files[fileName].size < maxFileSize;
    const hasCorrectFileSize = fileNames.every( isFileSizeToBig );

    if( !hasCorrectFileTypes || !hasCorrectFileSize ) {
        res.send("Bad file time")
    }
    next();
}

module.exports = validateFiles;