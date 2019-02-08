var express = require("express");
var request = require('request');
var cheerio = require('cheerio');

var PORT = 3000;

var app = express();

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

request('https://news.ycombinator.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    $('span.comhead').each(function(i, element){
      var a = $(this).prev();
      var rank = a.parent().parent().text();
      var title = a.text();
      var url = a.attr('href');
      var subtext = a.parent().parent().next().children('.subtext').children();
      var points = $(subtext).eq(0).text();
      var username = $(subtext).eq(1).text();
      var comments = $(subtext).eq(2).text();
      var metadata = {
        rank: parseInt(rank),
        title: title,
        url: url,
        points: parseInt(points),
        username: username,
        comments: parseInt(comments)
      };
      console.log("logging...");
      console.log(metadata);
      $("#stuff").append("<b>" + metadata + "</b>");
    });
  }
});