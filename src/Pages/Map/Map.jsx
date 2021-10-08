import {React, Component} from 'react'
import './Map.css'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Map, InfoWindow, Marker, GoogleApiWrapper, GoogleMap} from 'google-maps-react';

var x = document.getElementById("demo");
let cords = [];
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
    let pos = navigator.geolocation.getCurrentPosition(position => {
         let lat = position.coords.latitude;
         let lng = position.coords.longitude;
        console.log("dentro da função " + lat + " " + lng);
        return [lat,lng];
       });
    console.log("AQUI: " + pos);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  console.log("Position: " + position);
  var latlon = "lat:" + position.coords.latitude + "," + "lng:" + position.coords.longitude;
  console.log(position.coords.latitude);
  console.log("dentro: " + latlon);
  return [position.coords.latitude, position.coords.longitude];
}
console.log(getLocation());
let cord;
cord = navigator.geolocation.getCurrentPosition(showPosition);
console.log("fora:" + cord);
export class Mapa extends Component{
    render(){
        return(
        <>
            <Header title="Pontos de Coleta"/>
            <body>
                <div className="Container-map">
                    <Map google={this.props.google} zoom={15}
                    className={'map'}
                    initialCenter={{lat:-5.7945,lng:-35.2103}}>
                        <Marker onClick={this.onMarkerClick} name={'Current location'} />
                        <InfoWindow onClose={this.onInfoWindowClose}>
                        </InfoWindow>
                    </Map>
                </div>
            </body>
            <Footer/>
        </> 
        );
    }
}

Mapa = GoogleApiWrapper({
    apiKey: ("--YOUR GOOGLE API KEY--")
    
  })(Mapa)

