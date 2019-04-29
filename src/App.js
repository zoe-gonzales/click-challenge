import React from 'react';
import { Container } from 'reactstrap';
import Image from './components/Image';
import Header from './components/Header';

import images from './images.json';

function App() {
  return (
    <div>
      <Header/>
      <Container>
          {images.map(image => {
            return (
              <Image
                name={image.name}
                source={`../images/${image.file}.jpg`}
              />
            );
          })}
      </Container>
    </div>
  );
}

export default App;
