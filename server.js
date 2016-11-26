var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user : 'floura71196',
    database: 'floura71196',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD,
};

var pool = new Pool(config);

var app = express();
app.use(morgan('combined'));

var Details ={
'intro' : {
    title:'Intro',
    heading:'Intro',
    content:`<div id="navg">
    <div class="menu"><a class="linking" href="/home">Home</a></div>
	<div class="menu"><a class="linking" href="/intro">Intro</a></div>
	<div class="menu"><a class="linking" href="/myresume">MyResume</a></div>
	<div class="menu"><a class="linking" href="/myfamily">Family</a></div>
	<div class="menu1"><a class="linking" href="/myblog">Blog</a></div>
</div>
<div class="spacing"></div>
<br>
<!-- after update -->
<div class="marq"><marquee> *** The website is still under construction, trying to enhance it each day *** </marquee></div>
<div id= "intro1">
	<h1>HeLlO eVeRyBoDy! :) </h1>
	<div id="introcont">
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Myself <b>Floura Angel</b>. Well in this page I wanted to write about myself. Although this blog is to demonstrate my skills in the field of Modern Application Development but I wanted to share my interests, beliefs, give thanks and many more....
	<br><br>
	<h3>Astronomy and Cosmology</h3>
	Why Astronomy???
	<br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Astronomy, a natural science, is the study of celestial objects (such as stars, galaxies, planets, moons, asteroids, comets and nebulae) and processes (such as supernovae explosions, gamma ray bursts, and cosmic microwave background radiation), the physics, chemistry, and evolution of such objects and processes, and more generally all phenomena that originate outside the atmosphere of Earth.<br> 
	<br>Not very soon I good this interest on exploring celestial bodies. On reading about it, I started to believe in the very well known saying,
	<br>
	<br>
	<i><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“And, when you want something, all the universe conspires in helping you to achieve it.” ― Paulo Coelho</b></i>
	<br><br>
	I believe everyone is unique creation of the Master.All that one has to do is push a little everyday and you won't realize how far you have travelled. As it goes, give your best in whatever you can the remaining the universe will do it for you, but yet what's important is that your will power is firm,your determined and know where exactly you want to go.
	</div><br><br>
	<b>Thanks</b><br><br>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Not to forget the one who created me ,to the <b>LORD</b>, my parents and everyperson that helped me to grow to the person I am today. A big Thank-You.
		<br><br><i><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I might not be the optimal one, but my ability to pursue,learn,adapt will push me harder to be the one.</b></i>
</div>`
},

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
                ${content}
        </body>
        </html>
        `;
        
        return HTMLTemplate;
}

app.get('/test-db',function(req,res){
   //make request and print response
   pool.query('SELECT * FROM testing' , function(err,result){
      if(err){
          res.status(500).send(err.toString());
      } else{
          res.send(JSON.stringify(result.rows));
      }
   });
   
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/Details/:DetailsName', function (req, res) {
  pool.query("SELECT * FROM blog WHERE title= $1",[req.params.DetailsName] , function(err,result){
      if(err){
          res.status(500).send(err.toString());
      } else{
          if(result.rows.length === 0){
              res.status(404).send('Page not found');
          }else{
              var ArticleData = result.rows[0];
              res.send(createTemplate(ArticleData));
          }
      }
  });
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/daddy.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'daddy.png'));
});

app.get('/ui/mummy.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'mummy.png'));
});

app.get('/ui/siblings.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'siblings.png'));
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

app.get('/ui/floura.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'floura.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
