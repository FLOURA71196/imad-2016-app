var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Details ={
    
'personal-details':{
    title:'Personal Details',
    heading:'Personal Details',
    content:`<div id="navg">
	<div class="menu">Home</div>
	<div class="menu">Intro</div>
	<div class="menu">MyResume</div>
	<div class="menu">Family</div>
	<div class="menu1">Blog</div>
</div>
<div class="spacing"></div>
<div id="section1">
    <div class="col1">
        <img id="mypic" src="me2.jpg">
    </div>
    <div id="content">
    <div class="col">
        <div class="vischar" onmouseover="myhover1()">F</div>
        <div class="vischar" onmouseover="myhover2()">L</div>
        <div class="vischar" onmouseover="myhover3()">O</div>
        <div class="vischar" onmouseover="myhover4()">U</div>
        <div class="vischar" onmouseover="myhover5()">R</div>
        <div class="vischar" onmouseover="myhover6()">A</div>
        <div class="vischar" onmouseover="myhover7()">:)</div>
        <div class="vischar" onmouseover="myhover8()">A</div>
        <div class="vischar" onmouseover="myhover9()">N</div>
        <div class="vischar" onmouseover="myhover10()">G</div>
        <div class="vischar" onmouseover="myhover11()">E</div>
        <div class="vischar" onmouseover="myhover12()">L</div>
    </div>
        <br>
    <div class="col12">
        <div class="vischar2" onmouseover="myhovera1()">W</div>
        <div class="vischar2" onmouseover="myhovera2()">E</div>
        <div class="vischar2" onmouseover="myhovera3()">B</div>
        <div class="vischar2" onmouseover="myhovera4()">&nbsp;</div>
        <div class="vischar2" onmouseover="myhovera5()">D</div>
        <div class="vischar2" onmouseover="myhovera6()">E</div>
        <div class="vischar2" onmouseover="myhovera7()">V</div>
        <div class="vischar2" onmouseover="myhovera8()">E</div>
        <div class="vischar2" onmouseover="myhovera9()">L</div>
        <div class="vischar2" onmouseover="myhovera10()">O</div>
        <div class="vischar2" onmouseover="myhovera11()">P</div>
        <div class="vischar2" onmouseover="myhovera12()">E</div>
        <div class="vischar2" onmouseover="myhovera13()">R</div>
    </div>
    </div>
</div>
    <br>
    <br><br><br>
    <div class="spacing"></div>
    <div id="intro">
    <h1>INTRODUCTION</h1><br>
        <p>Driven by the idea to revolutionise the world with innovative technology,I am a confident and passionate individual with a strong technical background looking forward to learn new things and explore myself.</p>
    </div><br>
    <br><br><br>
    <div class="spacing"></div>
    <div id="resume">
    <h1>MY RESUME</h1>
        <h4>Technical Expertise, Academics, Certifications, Workshop Attended, Projects, Experience, Achievements, Strengths, Hobbies.
        </h4>
        <h5 id="readmore">read more..</h5>
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

var counter = 0;

app.get('/counter', function (req, res) {
  counter = counter+1;
  res.send(counter.toString());
});


app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:DetailsName', function (req, res) {
  var DetailsName = req.params.DetailsName;
  res.send(createTemplate(Details[DetailsName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// app.get('/achievements', function (req, res) {
//   res.send(createTemplate(PersonalDetails));
// });

// app.get('/experiences', function (req, res) {
//   res.send(createTemplate(PersonalDetails));
// });

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/me2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me2.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
