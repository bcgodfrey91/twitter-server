'use strict';
const express = require('express');
const app = express();

const getTweetsForHashTag = require('./lib/get-tweets-for-hashtag');
const formatTweet = require('./lib/format-tweet');

app.set('port', process.env.PORT || 3001);

app.listen(app.get('port'), () => {
 console.log(`listening on ${app.get('port')}`);
});

app.get('/api/v1/tweets', function(req, res) {
  getTweetsForHashTag(req.query.hashtag, req.query.count, (error, data, response) => {
    if (error) return res.send({ error });
    res.send({ data: data.statuses.map(formatTweet) });
  });
});
