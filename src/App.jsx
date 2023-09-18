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
import gif from './assets/train.gif'
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
              intro = "Non nobis solum nati sumus — Not unto ourselves alone are we born"
              content="I'm a junior at Willamette University who began as a Biology Major but developed a strong passion for Computer Science. The welcoming community and outstanding departments here captured my heart, and I'm really looking forward to the upcoming year to learn more!"
              imageUrl={img7} 
            />
          <Card
            title="Family"
            content="This card symbolizes not just my family but also the dear people in my life. I enjoy collaborating with others and bring the same sense of unity I have for my family to my work, creating a supportive and collaborative environment where everyone is valued and can succeed."
            intro = "Meet my family, where you'll find love, humor, and countless adventures"
            imageUrl={img8} 
          />
          <Card
            title="Everything Else"
            content= "Besides learning, I also enjoy Tennis, video games, teaching, and problem-solving with others. My favorite video game right now is either Zelda Twilight Princess or any Soulsborne game!"
            intro = "Choose a job you love, and you will never have to work a day in your life"
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
          description="As a technical assistant, my duties span from handling minor tasks like <strong>resolving on-call technical problems,</strong> to undertaking major projects like <strong>modernizing the University's network</strong>. We handle a diverse range of tasks, and the examples mentioned here are just a few among them."
        />
          <Project
            title="FaveShop"
            link = "https://faveshop-web-supabase.vercel.app/"
            imageUrl={faveshop}
            description="A simple website with a highly intricate core, <strong>showcasing real-time sales from my favorite stores</strong>. This project holds a special place for me, as it allowed me to both implement and gain a deeper understanding of <strong>React, databases, cloud services, and APIs.</strong>"
            bulletPoints={['Newegg', 'Ebay', 'Tennis Warehouse', 'Nike']}
        />
          <Project
            title="Animecharacter.io"
            link = "https://anime-characters-io-ui.vercel.app/"
            imageUrl={animecharacters}
            description="While this website remains a work in progress, it already <strong>showcases an extensive collection of anime data supported by a sophisticated database.</strong> I'm actively collaborating on this project with another developer, and my current focus is the integration of a game inspired by the classic board game Guess Who."
        />
          <Project
            title="Shell Sort Sequences Visualizer"
            link = "https://github.com/iGoober/Gap-Sequence-Visualizer"
            imageUrl={gif}
            description="My first encounter with user-centric design ideas was when I worked with two team members on a GUI project. Our aim was to <strong>help users distinguish between various Shell Sort Sequences visually</strong>. As we aimed to share and accept input from others, our main concern during its creation was <strong>making sure it met to the demands of our target audience.</strong>"
            bulletPoints={['Shell', 'Ciura', 'Sedgewick', 'Tokuda']}
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
