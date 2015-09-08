/*
    Exercise 3
*/

var Timer = React.createClass({
  getInitialState: function() {
    return { timeAgo: 0, timer: undefined, startTime: new Date() };
  },
  setSecondsAgo: function(event) {
    var diffMs = (new Date() - this.state.startTime);
    this.setState({ timeAgo: (diffMs/1000) });
  },
  componentDidMount: function() {
    this.setState({ timer: setInterval(this.setSecondsAgo, 100) });
  },
  componentWillUnmount() {
    clearInterval(this.state.timer);
    this.setState({ timer: undefined });
  },

  render: function() {
    return (
      <span>I was started {this.state.timeAgo} seconds ago</span>
    );
  }
});

// Render!
React.render(
  <Timer />,
  document.body
);
