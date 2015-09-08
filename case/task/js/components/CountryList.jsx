var React = require('react');
var Flag = require('./Flag');

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="countrylist">
      {this.props.stats.map(function(country){
        return <li>
          <Flag countryCode={country.countryCode} />
          <span className="country-tweet-count">{country.count}</span>
        </li>
      })}
      </ul>
    );
  }
});
