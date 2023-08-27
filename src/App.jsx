import React from 'react';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import img1 from './assets/Beach.jpg'
import img2 from './assets/IMG_5847 16.jpg'
import img3 from './assets/IMG_5883 16.jpg'
import img4 from './assets/walkingguy16.png'
import img5 from './assets/IMG_8782.jpg'
import img6 from './assets/funny.jpg'
import img7 from './assets/cropped2.jpg'
import img9 from './assets/cropped.jpg'
import img8 from './assets/cropped3.jpg'
import Card from './components/Card';

const App = () => {
  const images = [
    img4,
    img1,
    img2,
    img3,
    img6,
  ];

  return (
    <div>
      <Carousel images={images} />
      <div className="App">
        <div className="card-container">
          <div className="card-row">
            <Card
              title="Family"
              content="This is a card about my family. We love spending time together and creating wonderful memories."
              imageUrl={img5} 
            />
            <Card
              title="School"
              content="I currently go to Wilamette University as a Computer Science Major! What I love most about Willamette are the professors and people! Starting my Freshmen year, I remember I didn't quite know what major I wanted to do, but the whole Computer Science Department treated me very well and I am super happy and grateful to be here!"
              imageUrl={img7} 
            />
            <Card
              title="Everything Else"
              content="I absolutely love playing Tennis, while I am not too good at it, it allows me to spend time with my tennis friends who are like an extended family of mine. I also love playing video games! As a child, I was into The Legend of Zelda, Halo, Splinter Cell, and more. Nowadays I like playing RPG games to relax and enjoy a new world."
              imageUrl={img8} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
