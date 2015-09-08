/*
Exercise 1
*/

// Components
var Hello = React.createClass({
  render: function() {
    return (
      <p>Hello, {this.props.name}</p>
    );
  }
});

// Render!
React.render(
  <Hello name="World" />,
  document.body
);
