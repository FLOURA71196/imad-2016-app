var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Details ={
    
'myresume':{
    title:'Personal Details',
    heading:'Personal Details',
    content:`<div id="navg">
    <div class="menu"><a class="linking" href="myprofile.html">Home</a></div>
    <div class="menu">Intro</div>
    <div class="menu"><a class="linking" href="myresume.html">MyResume</a></div>
    <div class="menu"><a class="linking" href="myfamily.html">Family</a></div>
    <div class="menu1"><a class="linking" href="myblog.html">Blog</a></div>
</div>
<div class="spacing"></div>
    <div id="resume">
    <h1>MY RESUME</h1>
        <div id="technical">
        <h4>Technical Expertise</h4>
        <h4>Programming Skills:</h4> 
            <ul list-style-type:square>
               <li>C </li> 
                <li>C++</li> 
                <li>Java</li>
                <li>Php</li>
                <li>Android Application</li>
            </ul>
        <h4>Area of interest:</h4>
            <ul list-style-type:square>
                <li>Programming</li>
                <li>Data Structure</li>
                <li>Algorithms</li>
                <li>Operating Systems</li>
                <li>Application Development</li>
                <li>Linux</li>
                <li>SQL</li>        
            </ul>
        </div>
        <div id="certifications">
        <h4>Certifications</h4>
        <ul list-style-type:square>
            <li>Completed Cambridge ESOL Level 1 Certificate in ESOL International (Business English) and cleared Council of Europe level B2 on November 2014.</li>
            <li>Completed the course on Core Java conducted by M-CAT Computer Education in June, 2015 at Mumbai.</li>
            <li>Completed Oracle Java Programming(OCPJP) on 12th May,2016 with 98%.</li>
            <li>Completed Introduction to Application Development - IMAD</li>
            <li>Pursuing IBM Cloud Application Developer</li>
            <li>Pursuing Oracle SQL Certification</li>
        </ul>
    </div>
        <div id="workshop">
        <h4>Workshop Attended</h4>
            <ul list-style-type:square>
                <li>Participated in Workshop on “Web Development” at IIT Bombay Techfest 2015.</li>
                <li>Attended seminar and a workshop on Time Complexity in day-to-day life(Real-life examples)</li>
                <li>Attended Two day workshop on Android App Development at Karunya University,Coimbatore.</li>
                <li>Attended One day workshop on Android App Security Development at Coimbatore Institute of   Technology.</li>
                <li>Participated for 24 hours coding contest (Hackathon) conducted by IBM and developed a task manager app.</li>
                <li>Presented a poster on Smart City Ideas using IOT(Internet of things).</li>
            </ul>
        </div>
        <div id="projects">
        <h4>Projects</h4>
            <ul list-style-type:square>
                <li>Android Application for Navigation (apk file- https://drive.google.com/open?id=0B0A9SApYtl2oZlp1d1Z0ZHNaUDQ)</li>
                <li>Wordpress Website : progenerp.com</li>
            </ul>
        </div>
        <div id="achievements">
        <h4>Achievements</h4>
            <ul list-style-type:square>
                <li>Secured third academic rank among 350+ 2nd year students for Odd Semester 2015-2016</li>
                <li>Secured 2nd place in technical quiz for CSI in Coimbatore</li>
            </ul>
        </div>
        <div id="strengths">
        <h4>Strengths</h4>
             <ul list-style-type:square>
                 <li>Public Speaker</li>
                 <li>Team Player</li>
                 <li>Self-motivated</li>
                 <li>Quick learner</li>
                 <li>Hard Worker</li>
            </ul>
        </div>
        <div id="extra">
            <h4>Extra-Ciricular Activities</h4>
        </div>
        <div id="hobbies">
            <h4>Hobbies</h4>
            <ul list-style-type:square>
                 <li>Coding</li>
                <li>Astronomy</li>
            </ul>
        </div>
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
'myfamily' : {
    title:'Experience Details',
    heading:'Experience Details',
    content:`<div id="navg">
	<div class="menu"><a class="linking" href="myprofile.html">Home</a></div>
	<div class="menu">Intro</div>
	<div class="menu"><a class="linking" href="myresume.html">MyResume</a></div>
	<div class="menu"><a class="linking" href="myfamily.html">Family</a></div>
	<div class="menu1"><a class="linking" href="myblog.html">Blog</a></div>
</div>
<div class="spacingw"></div><br>
     <div style="height: 600px" id="family">
            <div style="background-color: black;color: white;font-weight: 700;height: 50px;padding-top: 30px;padding-left: 10px;">MY FAMILY MEMBERS</div>
            <div style="position:relative;">
            <div class="dblock">
            <img src="daddy.jpg" style="left:50px;" class="dfcol">
            <div style="width: 250px;position: absolute;top:220px;left: 60px;color: black"><h1>Mr.DURAIRAJ</h1><h4>DADDY</h4><br>A Product Executive by Profession.He is the one who brings up all the positive energy within me. Believing in me, who constantly makes me realize how precious and unique person I am.I wonder what would I be without his support.</div>
            </div>
            <div class="spac"></div>
            <div class="mblock">
            <img src="mummy.jpg" style="left:40%;" class="dfcol">
            <div style="width: 250px;position: absolute;top:220px;left: 40%;color: black"><h1>Mrs.MARY</h1><h4>MUMMY</h4><br>The most prettiest woman on the planet. I hope I receive some of her selfless,caring and honest nature.A woman of God,a responsible daughter, a loveable sister, a faithful wife, an amazing mom, a smart tutor. She surely is gem!</div>
            </div>
            <div class="sblock">
             <img src="siblings.jpg" style="left:80%;" class="dfcol">
            <div style="width: 250px;position: absolute;top:220px;left: 80%;color: black"><h3>Miss.GRACEE<br>Mr.MARTIN</h3><h4>SIBLINGS</h4><br> And my world is incomplete without them. Oh how much I love them! Fights,hugs,kisses... </div>
            </div>
            </div>
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
