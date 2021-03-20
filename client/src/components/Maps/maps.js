import React from 'react';
import style from './style.module.css';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = "pk.eyJ1IjoibmFodWVsc2FuIiwiYSI6ImNraWwzeHp2cDBnM3IycnFtbXRwbG96NmcifQ.zGrjQhwZ39Mwz2TpCKBX-g"

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
    const mapProps = {
      center: [this.props.longitude, this.props.latitude],
      zoom: [3],
      style: 'mapbox://styles/mapbox/streets-v8',
    };
    var {longitude, latitude} = this.props
    const Map = new mapboxgl.Map({
        container: this.mapWrapper,
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [ this.props.longitude, this.props.latitude],
        zoom: 13
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
        
    Map.on('load',  function() {
        directions.setOrigin([longitude, latitude]);
    })
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
{/*         <div 
        ref={el => (this.mapWrapper = el)} 
        className={style.mapWrapper}
      /> */}