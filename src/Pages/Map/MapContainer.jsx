import {React, useRef, useState, useCallback} from 'react'
import Header from "../Components/Header"
import './Map.css'
import gps from "../../assets/setgps.png"
import { 
    Marker,
    GoogleMap, 
    useLoadScript,
} from '@react-google-maps/api';
//import {formatRelative} from "date-fns";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
require('dotenv').config();
const libraries = ["places"];
const mapContainerStyle = {
    width: '50vw',
    height: '50vh',
    align: 'center',
};
const center = {
    lat:40.736284158834714, 
    lng:-74.17216042182969
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};
const centers = [{
    lat: -5.86692836356967, 
    lng: -35.18547369986042
  },
  {
    lat:-5.826588341702969, 
    lng:-35.234672854113995
  },
  {
    lat:-5.826577062818457, 
    lng:-35.23469057349416
  },
  {
    lat: -5.883538011212509,
    lng: -35.1995426099223
  },
  {
    lat:-5.826573701770949, 
    lng:-35.234687468283404
  },
  {
    lat:-5.788246338106367, 
    lng:-35.29798521100068
  },
  {
    lat:-5.831672856850275, 
    lng:-35.2397442687641
  },
  {
    lat:-5.831464514586758, 
    lng:-35.20817393998336
  }
];

export default function FullMap(){
    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    //const [Markers, SetMarkers] = useState([]);

    const panTo = useCallback(({lat, lng }) => {
        mapRef.current.panTo({ lat,lng });
        mapRef.current.setZoom(12);
    },[]);

    if(loadError) return "Erro ao carregar o mapa";
    if(!isLoaded) return "Carregando o mapa";
    return(
        <>
            <Header title = "Pontos de Coleta"/>
            <div className="mapas">
                <Search panTo={panTo}/>
                <GeoLocate panTo={panTo}/>
                <GoogleMap 
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onLoad={onMapLoad}
                >
                    <Marker position={centers[0]}/>
                    <Marker position={centers[3]}/>
                    <Marker position={centers[4]}/>
                    <Marker position={centers[5]}/>
                    <Marker position={centers[6]}/>
                    <Marker position={centers[7]}/>
                </GoogleMap>
            </div>
        </>
    );
}

function GeoLocate({panTo}){
    const [pos, setPos] = useState();
    return(
        <button className="locate" onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
                setPos({lat: position.coords.latitude,lng: position.coords.longitude});
                console.log(position.coords.latitude, position.coords.longitude);
            }, () => null);
        }}>
            <img src={gps} alt="Geolocalizar"></img>
            <Marker position={pos}></Marker>
        </button>

    )
}

function Search({panTo}){
    const {ready, 
        value, 
        suggestions: {status,data}, 
        setValue, 
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => -5.7945,lng: () => -35.2103},
            radius: 300 * 1000,
        },
    })
    return <div className="search">
        <Combobox className="combo" onSelect={ async (address) => {
                setValue(address, false);
                clearSuggestions();
                try{
                    const results = await getGeocode({address});
                    const {lat, lng} = await getLatLng(results[0]);
                    console.log(results[0]);
                    panTo({ lat, lng});
                }catch(error){
                    console.log("Erro")
                }
                console.log(address)}}>
            <ComboboxInput 
                value ={value} 
                onChange={(e) => {setValue(e.target.value);}} 
                disabled={!ready}
                placeholder="Busque por um endereço"/>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({id,description}) => <ComboboxOption key={id} value={description} />)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    </div>
}