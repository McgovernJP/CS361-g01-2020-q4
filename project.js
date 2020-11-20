console.log(require('dotenv').config({debug: true}));

var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({secret:'SessionSecret'}));
app.use(express.static('public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 33037);




app.get('/',function(req,res){
  res.render('home.handlebars', {title: 'Home page'})
});

app.get('/trailsnearme',function(req,res){
  res.render('trailsnearme.handlebars', {title: 'Trails Near Me', trail_api: process.env.TRAIL_API, oc_api: process.env.OPEN_CAGE})
});

app.get('/personalized',function(req,res){
  res.render('personalized.handlebars', {title: 'Trails For Me'})
});

app.get('/fitness',function(req,res){
  res.render('fitness.handlebars', {title: 'Estimate Fitness Level'})
});

app.get('/recommendation',function(req,res){
  res.render('recommendation.handlebars', {title: 'Gear Recommendation'})
});

app.get('/directions',function(req,res){
  res.render('directions.handlebars', {title: 'Directions'})
});

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  //console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

console.log(process.env.TRAIL_API);