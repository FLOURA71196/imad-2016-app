var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Details ={
    
'personal-details':{
    title:'Personal Details',
    heading:'Personal Details',
    content:`<div>
            <br>
            <br>
            <h4>Motivation:</h4>
                Driven by the idea to revolutionise the world with innovative technology, I am a confident 
                and passionate individual with a strong technical background 
                looking forward to learn new things and explore myself.
            <br>
            </div>
            <div>
            <br>
            <h4>Interests:</h4>
            EditAstronomy, Coding, Travelling, Volunteer Work, Reading
            <br>
            </div>`
},
'achievements' : {
    title:'Achievements Details',
    heading:'Achievements Details',
    content:`<div>
            <br>
            <br>
            <h4>College:</h4>
               Award of Academic Proficiency,<br>
               Karunya University,<br>
               December 2015
            <br>
            </div>
            <div>
            <br>
            <h4>Certifications:</h4>
                Oracle Certified Java SE 6 Programmer,<br>
                Oracle,<br>
                May 2016,<br>
            <br>
                Business English Certificate Vantage,<br>
                Cambridge English,<br>
                November 2014,<br>
            <br>
                Core Java,<br>
                M-CAT Computer Education,<br>
                June 2015,<br>
            <br>
            </div>`
},
'experiences' : {
    title:'Experience Details',
    heading:'Experience Details',
    content:`<div>
            <br>
            <br>
            <h4>Summer Internship:</h4>
               Designed the Progen ERP website using WordPress
               <a href="http://progenerp.com/">Progen ERP</a>
            <br>
            </div>
            <div>
            <br>
            <h4>Current Projects:</h4>
                Automation of Conventational Target Paln,<br>
                Karunya University,<br>
            <br>
                Land Marking using Android,<br>
                Karunya University,<br>
            <br>
                Smart Traffic Control using IP networks,<br>
                Karunya University,<br>
            <br>
            </div>`
}

} ;

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    
        var HTMLTemplate = `
        <html>
        <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="pers">
                <div>
                    <h3>${heading}</h3>
                </div>
                ${content}
            </div>
        </body>
        </html>
        `;
        
        return HTMLTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:DetailsName', function (req, res) {
  var DetailsName = req.params.DetailsName;
  res.send(createTemplate(Details[DetailsName]));
});

app.get('/achievements', function (req, res) {
  res.send(createTemplate(PersonalDetails));
});

app.get('/experiences', function (req, res) {
  res.send(createTemplate(PersonalDetails));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
