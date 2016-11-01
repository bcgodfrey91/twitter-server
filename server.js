'use strict';
var Twitter = require('node-twitter-api');
const express = require('express');
var app = express();

var twitter = new Twitter({
 "consumerKey": "",
 "consumerSecret": "",
 "accessToken": "",
 "accessTokenSecret": ""
});

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
 console.log(`listening on ${app.get('port')}`);
});

const getTweetsForUser = (hashtag, numberOfTweets, callback) => {
 twitter.search(
   {"q": hashtag, "count": numberOfTweets},
   twitter.accessToken,
   twitter.accessTokenSecret,
   callback
 );
};


app.get('/api/tweets-for-hashtag/:hashtag', function(req, res) {
 const numberOfTweets = req.query.count || 100;
 getTweetsForUser(req.params.hashtag, numberOfTweets, (error, data, response) => {
   if (error) {
     return res.send({
       error: error
     });
   } else {
     res.send({ data: data.statuses });
  }
 });
});
