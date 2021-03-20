import React from 'react';
import barrios from './barrios.json';


export default function Demo() {
  const [options, setOptions] = React.useState([]);

  barrios.map(barrio => 
      console.log(barrio.nombre_barrio)
    )


  return (
    <select name="select">
      <option value="default" selected>Seleccione un valor</option>
      {
        barrios.map(barrio =>
          <option value={barrio.nombre_barrio}>{barrio.nombre_barrio}</option>
          )
      }
    </select>
  );
}