const Twitter = require('node-twitter-api');
const twitter = new Twitter(require('../env.json'));

module.exports = (hashtag, numberOfTweets = 200, callback = () => {}) => {
 twitter.search(
   {"q": hashtag, "count": numberOfTweets},
   twitter.accessToken,
   twitter.accessTokenSecret,
   callback
 );
};
