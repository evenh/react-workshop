/*
    Exercise 4
*/

var libraries = [
    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},
];

var Search = React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  filterArray: function(items, query){
    return items.filter(function(item){
      var re = new RegExp(query, 'gi');
      return (item.name.match(re) === null ? false : true);
    });
  },
  componentDidMount: function() {
    React.findDOMNode(this.refs.query).focus();
  },
  render: function() {
    return (
      <div>
        <input type="text" ref="query" name="query" value={this.state.value} autocomplete="off" onChange={this.handleChange} />
        <ul>
            { this.filterArray(this.props.items, this.state.value)
              .map(function(library){
                return <li><a href={library.url}> {library.name}</a></li>;
              })
            }
        </ul>
      </div>
    );
  }
});

// Render!
React.render(
  <Search items={libraries} />,
  document.body
);
