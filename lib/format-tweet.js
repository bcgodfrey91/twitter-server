module.exports = tweet => {
  return {
    type: 'tweets',
    id: tweet.id_str,
    attributes: {
      text: tweet.text,
      name: tweet.user.name,
      location: tweet.user.location,
      followers: tweet.user.followers_count,
      verified: tweet.user.verified
    }
  }
}
