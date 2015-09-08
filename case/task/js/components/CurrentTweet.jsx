var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
      return nextProps.tweet.id != this.props.tweet.id;
    },
    render: function() {
      return (
        <div className="current-tweet">
          <Tweet tweet={this.props.tweet} />
        </div>
      );
  }
});
