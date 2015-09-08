var _ = require('lodash');
var React = require('react');

var TweetList = require('./TweetList');

module.exports = React.createClass({
  getInitialState: function(){
    return { tweets: [] };
  },
  fetchNLatest: function(number, inputList) {
    return inputList.slice(Math.max(inputList.length - number, 1))
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
      tweets = <TweetList tweets={this.fetchNLatest(3, this.state.tweets)} />;
    }

    return <div>
    <h1>Dashboard</h1>
    {tweets}
    </div>
  }

});
