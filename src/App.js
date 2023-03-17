import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index.js';
import NavLink from './components/NavLink';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} /> 
      <Route path="/galleries/:galleryid" component={NavLink}/>

    </div>
  );
}

export default App;
