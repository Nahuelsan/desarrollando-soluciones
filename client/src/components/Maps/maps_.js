import React, { useState } from 'react';
import ReactMapboxGl, {  Marker,  GeoJSONLayer } from 'react-mapbox-gl';
import * as MapboxGL from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import style from './style.module.css';
import axios from 'axios';
const Maps = ({longitude,latitude, places, url}) =>{
  const Map = ReactMapboxGl(
    {accessToken: ACCES_TOKEN_MAPBOX},
    
  );
  const [state, setState] = useState({
      punto_mas_cercano: [],
      punto: [longitude, latitude],
      coordinates: []
  })
  const linePaint = MapboxGL.LinePaint = {
    'line-color': 'red',
    'line-width': 5
  };
  const puntoMasCercano = () =>{
    var best;
    var best_dif = 9999;
    var dif;
    for(var i = 1; i < places.length; ++i){
      dif = Math.abs(latitude - places[i].lat) +
              Math.abs(longitude - places[i].lng);
      if(best_dif > dif){
          best_dif = dif;
          best = places[i];
       }
    }
    setState({
      ...state,
      punto_mas_cercano: {lat : best.lat, lng :best.lng}
    })
    
    getRoutes();
  }
  const getRoutes = () =>{
 
    axios(`https://api.mapbox.com/directions/v5/mapbox/walking/${latitude},${longitude};${state.punto_mas_cercano.lat},${state.punto_mas_cercano.lng}?geometries=geojson&access_token=${ACCES_TOKEN_MAPBOX}`)
      .then(r => setState({
        ...state,
        coordinates: r.data
      }))
  }
  const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': [
            [
              longitude,
              latitude
            ],
            [
              state.punto_mas_cercano.lng,
              state.punto_mas_cercano.lat
            ]
          ]
        }
      }
    ]
  };
  return(
    <div>
    <button onClick={puntoMasCercano}>Punto mas cercano</button>
    <Map
      style="mapbox://styles/mapbox/streets-v8"
      containerStyle={{
        height: '400px',
        width: '100%'
      }}
      maxZoom={20}
      center={[longitude, latitude]}
    >
      {
        places.map(p => 
          <Marker
            key={p.gid}
            coordinates={[p.lng, p.lat]}
          >
              <img className={style.icon} src={url}/>
          </Marker>
        )
      }
      <GeoJSONLayer
      linePaint={linePaint}
      data={geojson}
      />
    </Map>
    </div>
  )
}
 
export default Maps;
