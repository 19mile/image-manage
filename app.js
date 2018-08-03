'use strict';

const express = require('express');
const app = express();
const formidable = require('formidable');
const fs = require('fs');

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.use('/public',express.static('public'));

app.post('/upload',(req,res)=>{
    const form = new formidable.IncomingForm();
    console.log("about to parse");
    form.parse(req,(err,fields,files)=>{
        console.log(files.upload);
        fs.writeFileSync("public/test.png",fs.readFileSync(files.upload.path));
        res.redirect("/public/upload.html");
    });
})

const server = app.listen(3100,()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`Example app listening at http://${host}:${port}`);
});