
window.marker = null;

function initialize() {
	var map;

	var mymap = new google.maps.LatLng(40.728246, -73.679376);

	var style = [ 
		{ "featureType": "road", 
		   "elementType": 
		   "labels.icon", 
		   "stylers": [ 
			  { "saturation": -100 }, 
			  { "gamma": 1 }, 
			  { "visibility": "off" }, 
			  { "hue": "#e6ff00" } 
		   ] 
		},
		{ "elementType": "geometry", "stylers": [ 
			{ "saturation": -100 } 
		  ] 
		},
		{ "elementType": "labels.text", "stylers": [ { "saturation": -100 } ] }
	];

	var mapOptions = {
		center: mymap,

		mapTypeId: google.maps.MapTypeId.ROADMAP,
		zoom:11,
		scrollwheel: false,

		backgroundColor:"#eeeeee",

		panControl:false,
		zoomControl:true,
		mapTypeControl:false,
		scaleControl:false,
		streetViewControl:false,
		overviewMapControl:false,
		zoomControlOptions: {
			style:google.maps.ZoomControlStyle.SMALL
		}

	}
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	var mapType = new google.maps.StyledMapType(style, {name:"Grayscale"});    
	map.mapTypes.set('grey', mapType);
	map.setMapTypeId('grey');

	var marker_image = 'images/pin.png';
	var pinIcon = new google.maps.MarkerImage(marker_image,null,null, null,new google.maps.Size(21, 34));    

	marker = new google.maps.Marker({
	  position: mymap,
	  map: map,
	  icon: pinIcon,
	  title: 'Our Location'
	});
}

google.maps.event.addDomListener(window, 'load', initialize);