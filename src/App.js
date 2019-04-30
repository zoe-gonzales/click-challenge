import React from 'react';
import Wrapper from './components/ImgWrapper';
import images from './images.json'

function App() {
  return <Wrapper images={images}/>;
}

export default App;