var _ = require('lodash');
var React = require('react');

var Tweet = require('./Tweet');
var tweetObject = require('../../example-tweet.json');

module.exports = React.createClass({

    render: function() {
        return <div>
            <h1>Dashboard</h1>
            <Tweet tweet={tweetObject} />
        </div>
    }

});
