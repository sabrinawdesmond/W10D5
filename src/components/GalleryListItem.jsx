import React from 'react';
// import NavLink from './NavLink';
import { NavLink } from 'react-router-dom';

function GalleryListItem(props) {
  return (
    <li>
      <NavLink 
        to={`/galleries/${props.galleryid}`}
        className='gallery-item'
        galleries={props}
      > 


      </NavLink>
    

    </li>
  )
}