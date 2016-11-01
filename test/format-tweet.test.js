const assert = require('assert');
const formatTweet = require('../lib/format-tweet');
const unformattedTweet = require('./unformatted-tweet');

describe('formatTweet', () => {
  const formattedTweet = formatTweet(unformattedTweet);

  it('should have a type of "tweets"', () => {
    assert.equal(formattedTweet.type, 'tweets');
  });

  it('should have the ID as a top level property', () => {
    assert.strictEqual(formattedTweet.id, unformattedTweet.id_str);
  });

  it('should have everything else in attributes', () => {
    assert.deepEqual(formattedTweet.attributes, unformattedTweet);
  });
})