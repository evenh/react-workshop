var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
    render: function() {
      return (
        <div className="current-tweet">
          <Tweet tweet={this.props.tweet} />
        </div>
      );
  }
});
