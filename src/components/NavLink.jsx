import React from 'react';
import harvardArt from './data/harvardArt';
import GalleryListItem from './GalleryListItem'

const NavLink = (props) => {
  const galleries = Object.values(harvardArt);
  const galleryList = galleries.map((gallery) => {
    return(
      <GalleryListItem key={galleries.galleryid} gallery={gallery} />
    )
  })
  return (
    <ul>
      {galleryList}
    </ul>
  )
};

export default NavLink;

