var React = require('react');

var Tweet = require('./Tweet');

module.exports = React.createClass({
    render: function() {
      return (
        <ul className="tweetlist">
          {this.props.tweets.map(function(tweet){
            return <Tweet key={tweet.id} tweet={tweet} />;
          })}
        </ul>
      );
  }
});