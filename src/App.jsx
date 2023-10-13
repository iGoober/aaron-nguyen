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
import working from './assets/working.jpg'
import willamette from './assets/willamette.png'
import faveshop from './assets/faveshop.png'
import animecharacters from './assets/animecharacters.png'
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
              title="School"
              intro = "I'm a junior at Willamette University who began as a Biology Major but developed a strong passion for Computer Science. The welcoming community and outstanding professors here captured my heart, and I'm really excited for the upcoming year to learn more!"
              imageUrl={img7} 
            />
          <Card
            title="Family"
            intro = "This card symbolizes not just my family but also the important people in my life. I enjoy collaborating with others and bring the same sense of unity I have for my family to my work, creating a supportive and collaborative environment where everyone is valued and can succeed."
            imageUrl={img8} 
          />
          <Card
            title="Everything Else"
            intro= "Besides learning, I also enjoy Tennis, video games, teaching, and problem-solving with others. My favorite video game right now is either Zelda Twilight Princess or any Soulsborne game!"
            imageUrl={img5} 
          />
        </div>
      </div>
      <div className="card-container" id="work-section">
        <h1>Work</h1>
      </div>
      <div>
        <Project
          title="Willamette I.T."
          imageUrl={willamette}
          description="As a technical assistant, my duties span from handling minor tasks like resolving on-call technical problems, to undertaking major projects like modernizing the University's network. We handle a diverse range of tasks, and the examples mentioned here are just a few among them."
        />
          <Project
            title="FaveShop"
            link = "https://faveshop-web-supabase.vercel.app/"
            imageUrl={faveshop}
            description="A simple website with a highly intricate core, showcasing real-time sales from my favorite stores by utilizing AWS. This project holds a special place for me, as it allowed me to both implement and gain a deeper understanding of React, databases, cloud services, and APIs."
            bulletPoints={['Newegg', 'Ebay', 'Tennis Warehouse', 'Nike']}
        />
          <Project
            title="Animecharacter.io"
            link = "https://anime-characters-io-ui.vercel.app/"
            imageUrl={animecharacters}
            description="While this website remains a work in progress, it already showcases an extensive collection of anime data supported by a sophisticated database. I'm actively collaborating on this project with another developer, and my current focus is the integration of a game inspired by the classic board game Guess Who."
        />
          <Project
          title="Climate Closet"
          link = "https://weatherwear-one.vercel.app/"
          imageUrl={working}
          description="This website is a school project I'm leading with two other members. Our aim is to assist users, especially transfer students at Willamette, in staying updated on Salem, Oregon's weather and giving them advice on what to wear. We appreciate feedback and are dedicated to meeting our audience's needs."
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
