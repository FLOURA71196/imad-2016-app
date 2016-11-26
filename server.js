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
