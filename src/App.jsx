import React from 'react';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import img1 from './assets/Beach.jpg'
import img2 from './assets/IMG_5847 16.jpg'
import img3 from './assets/IMG_5883 16.jpg'
import img4 from './assets/walkingguy16.png'
import Card from './components/Card';

const App = () => {
  const images = [
    img4,
    img1,
    img2,
    img3,
  ];

  return (
    <div>
      <Nav />
      <Carousel images={images} />
      <div className="App">
        <div className="card-container">
          <div className="card-row">
            <Card
              title="Family"
              content=""
              imageUrl={img1} 
            />
            <Card
              title="School"
              content=""
              imageUrl={img2} 
            />
            <Card
              title="Others"
              content=""
              imageUrl={img3} 
            />
          </div>
        </div>
        {/* about Family, School, Tennis, Everything Else */}
      </div>
    </div>
  );
};

export default App;
