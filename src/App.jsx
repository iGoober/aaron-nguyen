import React from 'react';
import Carousel from './components/Carousel';
import img1 from './assets/Beach.jpg'
import img2 from './assets/IMG_5847 16.jpg'
import img3 from './assets/IMG_5883 16.jpg'
import img4 from './assets/walkingguy16.png'
import img5 from './assets/IMG_8782.jpg'
import img6 from './assets/funny.jpg'
import img7 from './assets/cropped2.jpg'
import img8 from './assets/cropped3.jpg'
import Card from './components/Card';
import './App.css'

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
      <div id = "carousel-section">
        <Carousel images={images} />
      </div>

      <div className="card-container" id="about-section">
        <h1>About Me</h1>
        <div className="card-row">
          <Card
            title="Family"
            content="This photo was taken a long time ago with me being the kid with the beanie."
            intro = "Meet the Nguyen family: love, laughter, and endless adventures await"
            imageUrl={img8} 
            item1="Supportive"
            item2="Joyful"
            item3="Traditional"
            item4="Hardworking"
          />
          <Card
            title="School"
            intro = "Non nobis solum nati sumus — Not unto ourselves alone are we born"
            content="I currently go to Wilamette University as a Computer Science Major! What I love most about Willamette are the professors and people! Starting my Freshmen year, I remember I didn't quite know what major I wanted to do, but the whole Computer Science Department treated me very well and I am super happy and grateful to be here!"
            imageUrl={img7} 
            item1="hi!"
            item2="hi!"
            item3="hi!"
            item4="hi!"
          />
          <Card
            title="Everything Else"
            intro = "To live without passion is to merely exist; to live with passion is to truly thrive."
            content="I absolutely love playing Tennis, while I am not too good at it, it allows me to spend time with my tennis friends who are like an extended family of mine. I also love playing video games! As a child, I was into The Legend of Zelda, Halo, Splinter Cell, and more. Nowadays I like playing RPG games to relax and enjoy a new world."
            imageUrl={img5} 
            item1="hi!"
            item2="hi!"
            item3="hi!"
            item4="hi!"
          />
        </div>
      </div>
      <div className="card-container" id="projects-section">
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default App;
