var React = require('react');
var Timer = require('./Timer');

module.exports = React.createClass({
    render: function() {
      return (
        <div className="app-header">
          <h1>Twitterlicious</h1>
          <div>
              <span className="tweet-stats-desc">seconds running</span>
              <strong><Timer /></strong>
          </div>
            <span className="tweet-stats-desc">tweets captured</span>
            <strong>{this.props.numberCaptured}</strong>
        </div>
      );
  }
});
