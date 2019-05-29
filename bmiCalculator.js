// jshint esversion:6
// The important thing here is that all of this code is running on the server, not available for the client (browser) to see.
// We only send the HTML.index through __dirname to the browser. All the calculation is done on the back end.
// In this JS page hosted on the server we have built on our computer.
const express  = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// what sendFile does is link the page containing the HTML via the server as it isnt a local page anymore and is hosted on a "server"
// so you concactinate the __dirname (current file path) and the page name o give a file location anywhere in the world.
// now we can access the HTML when we go to localhost:3000
app.get('/', function(req,res) {
res.sendFile(__dirname + '/index.html');
});

app.post('/',function (req,res) {
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send('The result is ' + result);
});

// BMI Page ..........make sure to set the /bmiCalculator routes correctly for each new page
// add the app.post and app.get for each page

app.get('/bmiCalculator', function(req,res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
    });


    app.post('/bmiCalculator',function (req,res) {
        var weight = parseFloat(req.body.weight);
        var height = parseFloat(req.body.height);
        var bmi =  weight / (height * height);
        res.send('Your BMI is ' + bmi);
    });

app.listen(3000, function(){
    console.log('server started on 3000');
});