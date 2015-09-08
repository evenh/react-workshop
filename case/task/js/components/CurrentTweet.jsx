var React = require('react');
var Tweet = require('./Tweet');

module.exports = React.createClass({
    shouldComponentUpdate: function(nextProps, nextState) {
      return nextProps.id !== this.props.id;
    },
    render: function() {
      return (
        <div className="current-tweet">
          <Tweet tweet={this.props.tweet} />
        </div>
      );
  }
});
