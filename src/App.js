import React from 'react';
import Header from './components/Header';
import Wrapper from './components/ImgWrapper';
import images from './images.json'

function App() {
  return (
    <div>
      <Header currentScore={100} topScore={100}/>
      <Wrapper images={images}/>
    </div>
  );
}

export default App;