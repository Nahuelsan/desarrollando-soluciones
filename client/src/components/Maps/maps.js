import React from 'react';
import style from './style.module.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'
mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX_KEY}`

class Map extends React.Component {

  getEventHandlers() {
    return {
      onClick: (properties, coords, offset) =>
        console.log(`Receive event onClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
      onMouseEnter: (properties, coords, offset) =>
        console.log(`Receive event onMouseEnter at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
      onMouseLeave: (properties, coords, offset) =>
        console.log(`Receive event onMouseLeave at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
      onClusterClick: (properties, coords, offset) =>
        console.log(`Receive event onClusterClick at properties: ${properties}, coords: ${coords}, offset: ${offset}`),
    };
  }

  componentDidMount(){

    var {longitude, latitude, mas_cercano} = this.props
    const Map = new mapboxgl.Map({
        container: this.mapWrapper,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [ this.props.longitude, this.props.latitude],
        zoom: 15
    });
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/walking',
        alternatives: true,
        language: 'es'
    })
    Map.addControl(directions,'top-left');
    var marker 

    this.props.places.map(place => 
        marker = new mapboxgl.Marker()
            .setLngLat([place.lng, place.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<div>${place.nombre ? place.nombre : place.descripcion}</div> <div>${place.direccion ? place.direccion : ""}</div>`))
            .addTo(Map)
    )
        
    Map.on('load', function() {
        directions.setOrigin([longitude, latitude]);
        directions.setDestination([mas_cercano.lng, mas_cercano.lat])
        console.log(this.props)

    })
   
    console.log(Map)
  }
  
  render() {
    return (

      <div 
        ref={el => (this.mapWrapper = el)} 
        className={style.mapWrapper}
      />
    );
  }
}
export default Map;
