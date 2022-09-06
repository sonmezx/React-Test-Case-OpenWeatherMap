import React from 'react'
import TurkeyMap from 'turkey-map-react';
import {useNavigate} from 'react-router-dom';

function TurkeyMaps() {
  const navigate = useNavigate();
  return (
    <>
      <TurkeyMap customStyle={{ idleColor: "#c7c7c7", hoverColor: "#fff" }} showTooltip={true} onClick={ ({ plateNumber }) => navigate(`city/${plateNumber}`) } />
    </>
  )
}

export default TurkeyMaps