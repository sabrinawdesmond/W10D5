import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/index.js';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records} /> 

    </div>
  );
}

export default App;
