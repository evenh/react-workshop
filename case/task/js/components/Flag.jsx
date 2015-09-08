var React = require('react');

module.exports = React.createClass({
  render: function() {
    var flagStyle = 'tweet-flag flag-icon flag-icon-' + this.props.countryCode.toLowerCase();
    return <span className={flagStyle}></span>
  }
});
