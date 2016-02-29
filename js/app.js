'use strict';

$(document).ready(function() {

	$('#wrapper').fullpage({
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6', 'section7', 'section8']
	});

	$("#clients").bxSlider({
		minSlides: 3,
		maxSlides: 3,
		slideMargin: 10,
		slideWidth: 360,
		pager: false,
		nextText: '>',
		prevText: '<'
	});
});

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
                // Basic options for a simple Google Map
                
                var mapOptions = {

                	zoom: 16,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(51.5245303,-0.0748735), // New York

                    // How you would like to style the map. 
                    
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
            };


            var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                	position: new google.maps.LatLng(51.5245303,-0.0748735),
                	map: map,
                	title: 'Snazzy!',
                	icon: 'images/marker.png'
                });


                var contentString = '<div id="popup">'+
                'Geek Label'+'<br />'+
                '4th Floor'+'<br />'+
                '27 - 33 Bethnal Green Road'+'<br />'+
                'Shoreditch'+'<br />'+
                'London'+'<br />'+
                'E1 6LA'
                '</div>';

                var infowindow = new google.maps.InfoWindow({
                	content: contentString
                });


                marker.addListener('click', function() {
                	infowindow.open(map, marker);
                });
        }



