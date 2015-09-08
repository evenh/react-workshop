/*
    Exercise 2
*/

// Components
var Hello = React.createClass({
  getDefaultProps: function() {
    return {
      name: 'World'
    };
  },

  render: function() {
    return (
      <li>Hello, {this.props.name}</li>
    );
  }
});

var Helloes = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.names.map(function(nameValue){
          return <Hello name={nameValue} />;
        })}
      </ul>
    );
  }
});

// Names to output
var myNames = ['Even', 'Bjørnar'];

// Render!
React.render(
  <Helloes names={myNames} />,
  document.body
);
