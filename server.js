var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
'one_1': {
    title:'One_1',
    heading:'Article One',
    date:'March 18 2018',
    content:`<p>
                This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step .
            </p>
            <p>
                This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step .
            </p>
            <p>
                This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step, This is My First Step .
            </p>`
},
'one_2': { 
    title:'One_2',
    heading:'Article two',
    date:'March 18 2018',
    content:` <p>
                This is My First Step, 2!
                </p>`},
'one_3': {
    title:'One_3',
    heading:'Article three',
    date:'March 18 2018',
    content:` <p>
                This is My First Step, 3!
                </p>`}
};
function createhtml(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmltemplate=`<html>
        <head>
            <title>
                ${title}
            </title>
             <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="Cont">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                ${content}
            </div>
            </div>
        </body>
    </html>
    `;
    return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function(req,res){
    var articleName=req.params.articleName;
    res.send(createhtml(articles[articleName]));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
