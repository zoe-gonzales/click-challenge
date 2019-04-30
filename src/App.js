import React from 'react';
import Header from './components/Header';
import Wrapper from './components/ImgWrapper';
import images from './images.json'

function App() {
  return (
    <div>
      <Wrapper images={images}>
        <Header topScore={100}/>
      </Wrapper>
    </div>
  );
}

export default App;