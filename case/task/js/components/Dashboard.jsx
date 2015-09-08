var _ = require('lodash');
var React = require('react');

var TweetList = require('./TweetList');
var TweetMap = require('./TweetMap');
var CurrentTweet = require('./CurrentTweet');
var Header = require('./Header');

module.exports = React.createClass({
  getInitialState: function(){
    return { tweets: [], selectedTweet: null, numberCaptured: 0 };
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

      if(tweetList.length === 100) tweetList.splice(0, 1);
      tweetList.push(JSON.parse(ms.data));

      this.setState({ tweets: tweetList, numberCaptured: ++this.state.numberCaptured });
    }.bind(this);
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
    {tweets}
    {currentTweet}
    </div>
  }

});
