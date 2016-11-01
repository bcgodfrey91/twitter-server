'use strict';
const Twitter = require('node-twitter-api');
const express = require('express');
const app = express();

const twitter = new Twitter(require('./env.json'));

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
 console.log(`listening on ${app.get('port')}`);
});

const getTweetsForHashTag = (hashtag, numberOfTweets = 100, callback = () => {}) => {
 twitter.search(
   {"q": hashtag, "count": numberOfTweets},
   twitter.accessToken,
   twitter.accessTokenSecret,
   callback
 );
};

app.get('/api/v1/hashtags/:hashtag', function(req, res) {
  getTweetsForHashTag(req.params.hashtag, req.query.count, (error, data, response) => {
    if (error) return res.send({ error });
    res.send({ data: data.statuses });
  });
});
