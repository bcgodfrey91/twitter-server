module.exports = tweet => {
  return {
    type: 'tweets',
    id: tweet.id_str,
    attributes: tweet
  };
}