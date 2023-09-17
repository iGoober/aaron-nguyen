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
import gif from './assets/1.gif'
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
              content="I'm a junior at Willamette University with a deep passion for Computer Science. The supportive community and departments here are something I truly cherish. I also worked at Willamette's IT, which ignited my interest in technology."
              imageUrl={img7} 
            />
          <Card
            title="Family"
            content="This card isn't just about my family; it's also about the people I value most. My commitment to teamwork is motivated by my deepest values of family. I approach work with a similar unity to how I treat my loved ones, encouraging a supportive, collaborative workplace where everyone is appreciated and can succeed."
            intro = "Meet my family, where you'll find love, humor, and countless adventures."
            imageUrl={img8} 
          />
          <Card
            title="Everything Else"
            content= "Other than learning more about Computer Science, I love playing Tennis, video games, and find myself teaching or giving advice in things I am able to help with. My favorite video game is either Zelda Twilight Princess or any Soulsborne game!"
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
          imageUrl={willamette}
          description="As a technical assistant, my duties span from handling minor tasks like <strong>resolving on-call technical problems,</strong> to undertaking major projects like <strong>modernizing the University's network</strong>. We handle a diverse range of tasks, and the examples mentioned here are just a few among them."
        />
          <Project
            title="FaveShop"
            link = "https://faveshop-web-supabase.vercel.app/"
            imageUrl={faveshop}
            description="A simple website with a highly intricate core, <strong>showcasing real-time sales data from my favorite stores</strong>. This project holds a special place for me, as it allowed me to both implement and gain a deeper understanding of <strong>React, databases, cloud services, and APIs.</strong>"
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
            description="I worked on a GUI project with two other team members that serves as my introduction to user-centric design. As we wanted to share and evaluate it with others, our main concern throughout its creation was making sure it suited to the demands of our target viewers."
            bulletPoints={['Point 1', 'Point 2', 'Point 3']}
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
