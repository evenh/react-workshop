var React = require('react');

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;

module.exports = React.createClass({
    getInitialState: function(){
      return { tweets: [], selectTweet: null }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
      if(nextProps.tweets !== []) return true;
      return false;
    },
    render: function() {
      var showTweet = this.props.selectTweet;
      var selectedTweet = this.props.selectedTweet;

      var markers = null;

      if(this.props.tweets[0] != null){
        markers = this.props.tweets.map(function(tweet){
          return <Marker
            key={tweet.id}
            icon={tweet !== selectedTweet ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' : 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'}
            onClick={function(){
              showTweet(tweet);
            }}
            position={new GoogleMapsAPI.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1])} />
        });
      }

      return (
        <div className='tweet-map'>
        <Map
          width={"100%"}
          height={"100%"}
          initialZoom={3}
          scaleControl={true}
          streetViewControl={false}
          panControl={false}
          zoomControl={false}
          mapTypeControl={false}
          initialCenter={new GoogleMapsAPI.LatLng(30.675226, -35.051272)}>

          {markers}

        </Map>
        </div>
      );
  }
});
