import React from "react";
import {NavLink} from 'react-router-dom';

const GalleryNavigation = (props) => {
  const {galleries} = props
  console.log(galleries)
  return (
    <nav>
      <h1>Galleries</h1>
        <NavLink 
          to='/'
        >
        </NavLink>
    </nav>
  )
}

export default GalleryNavigation