var _ = require('lodash');
var React = require('react');

var TweetList = require('./TweetList');
var TweetMap = require('./TweetMap');

module.exports = React.createClass({
  getInitialState: function(){
    return { tweets: [] };
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

      this.setState({ tweets: tweetList });
    }.bind(this);
  },
  render: function() {
    var tweets = null;
    if (this.state.tweets !== []) {
      tweets = <TweetList tweets={this.getThreeMostInfluential(this.state.tweets)} />;
    }

    return <div>
    <h1>Dashboard</h1>
    <TweetMap tweets={this.state.tweets} />
    {tweets}
    </div>
  }

});
