var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { timeAgo: 0, timer: undefined, startTime: new Date() };
  },
  setSecondsAgo: function(event) {
    var diffMs = (new Date() - this.state.startTime);
    this.setState({ timeAgo: parseInt((diffMs/1000)) });
  },
  componentDidMount: function() {
    this.setState({ timer: setInterval(this.setSecondsAgo, 1000) });
  },
  componentWillUnmount() {
    clearInterval(this.state.timer);
    this.setState({ timer: undefined });
  },

  render: function() {
    return (
      <span>{this.state.timeAgo}</span>
    );
  }
});
