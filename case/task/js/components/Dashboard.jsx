var _ = require('lodash');
var React = require('react');

var TweetList = require('./TweetList');
var TweetMap = require('./TweetMap');
var CurrentTweet = require('./CurrentTweet');
var Header = require('./Header');
var CountryList = require('./CountryList');

module.exports = React.createClass({
  getInitialState: function(){
    return { tweets: [], selectedTweet: null, numberCaptured: 0, countryStats: [] };
  },
  getThreeMostInfluential: function(inputList) {
    return inputList
      .sort(function(a, b){
        return b.user.followers_count - a.user.followers_count;
      })
      .slice(0, 3);
  },
  componentDidMount: function() {
    var ws = new WebSocket('ws://10.15.9.37:9999');
    ws.onmessage = function(ms) {
      var tweetList = this.state.tweets;
      var countryStats = this.state.countryStats;

      var tweet = JSON.parse(ms.data);

      // Push to tweet list
      if(tweetList.length === 100) tweetList.splice(0, 1);
      tweetList.push(tweet);

      // Handle country stats
      if(countryStats[tweet.place.country_code] === undefined){
        countryStats[tweet.place.country_code] = 1;
      } else {
        countryStats[tweet.place.country_code]++;
      }

      var found = false;

      countryStats.forEach(function(country){
        if(country !== undefined && country.countryCode === tweet.place.country_code){
          found = true;
          country.count++;
        }
      });

      if(!found){
        var country = { countryCode: tweet.place.country_code, count: 1 };
        countryStats.push(country);
      }

      countryStats = _.sortBy(countryStats, 'count').reverse();

      this.setState({ tweets: tweetList, numberCaptured: ++this.state.numberCaptured, countryStats: countryStats });
    }.bind(this);
  },
  getTopCountries: function() {
    var countries = this.state.countryStats;
    var sliced = countries.slice(0, 22);

    return sliced;
  },
  selectTweet: function(tweet, marker){
    this.setState({ selectedTweet: tweet });
  },
  render: function() {
    var tweets = null;
    var currentTweet = null;

    if (this.state.tweets !== []) {
      tweets = <TweetList tweets={this.getThreeMostInfluential(this.state.tweets)} />;
    }

    if (this.state.selectedTweet !== null) {
      currentTweet = <CurrentTweet tweet={this.state.selectedTweet} />;
    }

    return <div>
    <TweetMap tweets={this.state.tweets} selectTweet={this.selectTweet} selectedTweet={this.state.selectedTweet} />
    <Header numberCaptured={this.state.numberCaptured} />
    <CountryList stats={this.getTopCountries()} />
    {tweets}
    {currentTweet}
    </div>
  }

});
