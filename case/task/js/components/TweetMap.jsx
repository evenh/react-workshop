var React = require('react');

var ReactGoogleMaps = require('react-googlemaps');
var GoogleMapsAPI = window.google.maps;

var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;

module.exports = React.createClass({
    getInitialState: function(){
      return { tweets: [] }
    },

    shouldComponentUpdate: function(nextProps, nextState) {
      if(nextProps.tweets !== []) return true;
      return false;
    },
    createMarkers: function() {
      if(this.props.tweets[0] != null){
        return this.props.tweets.map(function(tweet){
          return <Marker key={tweet.id} position={new GoogleMapsAPI.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1])} />
        });
      }
    },
    render: function() {
      var lat = 30.675226;
      var lng = -35.051272;

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
          initialCenter={new GoogleMapsAPI.LatLng(lat, lng)}>

          {this.createMarkers()}

        </Map>
        </div>
      );
  }
});
