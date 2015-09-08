var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="countrylist">
      {this.props.stats.map(function(country){
        var flagStyle = 'tweet-flag flag-icon flag-icon-' + country.countryCode.toLowerCase();

        return <li>
          <span className={flagStyle}></span>
          <span className="country-tweet-count">{country.count}</span>
        </li>
      })}
      </ul>
    );
  }
});
