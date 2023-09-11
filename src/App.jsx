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
import Contact from './components/Contact';
import Project from './components/Project';
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
            content="This picture was taken a long time ago when I was still a kid. That is me in the Beanie! "
            intro = "Meet my family, where you'll find love, humor, and countless adventures."
            imageUrl={img8} 
            item1="Supportive"
            item2="Joyful"
            item3="Traditional"
            item4="Hardworking"
          />
          <Card
            title="School"
            intro = "Non nobis solum nati sumus — Not unto ourselves alone are we born"
            content="adfsgsdfg sdfgsdV JSDFNGOJ AWSERUGJBEODFGJ EDNFGI UBSDG "
            imageUrl={img7} 
            item1="hi!"
            item2="hi!"
            item3="hi!"
            item4="hi!"
          />
          <Card
            title="Everything Else"
            intro = "To live without passion is to merely exist; to live with passion is to truly thrive."
            imageUrl={img5} 
            item1="hi!"
            item2="hi!"
            item3="hi!"
            item4="hi!"
          />
        </div>
      </div>
      <div className="card-container" id="work-section">
        <h1>Work</h1>
      </div>
      <div>
        <Project
          title="Willamette I.T."
          imageUrl={img1}
          description="SJNJSDFGBNJBFGBDFuahsdfgajdfghhsdfbghsdfgjdnfgjdsjfgnjsdfgnjsdnfgjsdnfjgnsdfjgnsdjfgnjsdfgnjsdfngjsdfng"
          bulletPoints={['Point 1', 'Point 2', 'Point 3']}
          additionalDescription="Additional optional description."
        />
          <Project
            title="My Project"
            imageUrl={img1}
            description="<strong>This is the main</strong> project description."
            bulletPoints={['Point 1', 'Point 2', 'Point 3']}
            additionalDescription="Additional optional description."
        />
          <Project
            title="My Project"
            imageUrl={img1}
            description="<strong>This is the main</strong> project description."
            bulletPoints={['Point 1', 'Point 2', 'Point 3']}
            additionalDescription="Additional optional description."
        />
          <Project
            title="My Project"
            imageUrl={img1}
            description="<strong>This is the main</strong> project description."
            bulletPoints={['Point 1', 'Point 2', 'Point 3']}
            additionalDescription="Additional optional description."
        />
      </div>
      <div className ="dark">
        <div className="card-container" id="contact-section">
          <h1>Contact</h1>
        </div>
        <div>
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default App;
