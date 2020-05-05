var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
const port = 4000;

app.get('/', function (req, res) {
    res.send('<h1>Welcome to our data scraper!!!</h1><br><a href="/scrape"><button>Click here to begin web srcape</button></a>');
});

app.get('/scrape', function (req, res) {

    // All the web scraping magic will happen here
    console.log('It works');

    // url = 'http://www.imdb.com/title/tt1229340';
    url = 'https://www.imdb.com/title/tt6751668';

    request(url, function (error, response, html) {
        if (!error) {
            var $ = cheerio.load(html);

            var title, release, rating, poster, summaryText;
            var json = { title: '', release: '', rating: '', poster: '', summaryText: '' };

            $('.title_wrapper').filter(function () {
                var data = $(this);
                title = data.children().first().text();
                release = data.children().last().children().last().text();

                json.title = title;
                json.release = release;
            });

            $('.ratingValue').filter(function () {
                var data = $(this);
                rating = data.children().first().children().first().text();
                json.rating = rating;
            });

            $('.poster').filter(function () {
                var data = $(this);
                poster = data.find('img').attr('src');
                json.poster = poster;
            });

            $('.plot_summary').filter(function () {
                var data = $(this);
                summaryText = data.children().first().text();
                json.summaryText = summaryText;
            });

            console.log(json);
        }

        // To write to the system we will use the built in 'fs' library.
        // In this example we will pass 3 parameters to the writeFile function
        // Parameter 1 :  output.json - this is what the created filename will be called
        // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
        // Parameter 3 :  callback function - a callback function to let us know the status of our function

        fs.writeFile('output.json', JSON.stringify(json, null, 4), function (err) {

            // fs.writeFile('output.json',json, function(err){
            console.log('File successfully written! - Check your project directory for the output.json file');
        })

        res.send('<h1>Web Scraper LBH </h1><h2>File Created !!!</h2>');
        // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
        //   res.send('Check your console!')
    });
});

app.listen(port);

console.log(`Magic happens on port ${port}`);