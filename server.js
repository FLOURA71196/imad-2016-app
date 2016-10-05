var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var PersonalDetails={
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
};

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

app.get('/personal-details', function (req, res) {
  res.send(createTemplate(PersonalDetails));
});

app.get('/achievements', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/experiences', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
