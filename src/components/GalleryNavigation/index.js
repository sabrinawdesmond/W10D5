import React from "react";
import {NavLink} from 'react-router-dom';
import GalleryListItem from '../GalleryListItem'

const GalleryNavigation = (props) => {
  const {galleries} = props
  console.log(galleries)
  const galleryList = galleries.map((gallery) => {
    return (
      <GalleryListItem key={galleries.galleryid} gallery={gallery} />
    )
  })
  return (
    <>
    <nav>
      <h1>Galleries</h1>
        <NavLink 
          to='/'
        >Home</NavLink>
    </nav>
    
    <NavLink
      to={`/galleries/${props.galleryid}`}
    >
      {galleryList}
    </NavLink>
    </>
  )
}

export default GalleryNavigation