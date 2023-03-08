import { AnimatePresence, easeOut } from 'framer-motion';
import './App.css';
import SquaresTopRight from './components/squares-top-right/SquaresTopRight';
import {motion} from 'framer-motion'
import SquaresLeft from './components/squares-left/SquaresLeft';
import Dent from './components/dent/Dent';
import CVIcon from './components/cv-icon/CVIcon';
import ProjectTiles from './components/project-tiles/ProjectTiles';
import ProjectPopup from './components/project-popup/ProjectPopup';
import { useState } from 'react';
import Contacts from './components/contacts/Contacts';





function App() {

  const [projectPopup,setProjectPopup] = useState("none");
  const [projectPopupTitle, setProjectPopupTitle] = useState("DLD WEBSITE");
  const [projectPopupDescription, setProjectPopupDescription] = useState("-");
  const [projectPopupImage, setProjectPopupImage] = useState("-");

  document.body.addEventListener("keydown", (event)=>{
    if (event.key === "Escape" && projectPopup !== "none"){
      setProjectPopup("none");
    }
  });

  function openProjectPopup(project){
    if(project === "dld"){
        setProjectPopup("dld");
        setProjectPopupTitle("DLD WEBSITE");
        setProjectPopupDescription("This website was commissioned by DLD Artes Gráficas to JuniFEUP and I participated as the Team Leader of the tech team which executed the project. I had to learn how to develop frontend applications using React.js, work collaboratively using Gitlab and make knowledgeable decisions regarding technological problems together with my team.")
        setProjectPopupImage("dld");
    }else if(project === "seaMayem"){
      setProjectPopup("seaMayem");
      setProjectPopupTitle("SEA MAYEM");
      setProjectPopupDescription("Sea Mayem was an hobby project that aimed to explore Processing's visual capabilities to develop a fun multiplayer game. This was the first time I attempted online multiplayer using sockets and created a server in Python taking advantage of multithreading. I learned a lot about UI design and implementation, game design and socket programming.")
      setProjectPopupImage("seamayem");
    }else if(project === "p2p"){
      setProjectPopup("p2p");
      setProjectPopupTitle("P2P Messenger");
      setProjectPopupDescription("This was a project for the course \"Distributed Systems\" from my Masters in Computer Engineering and it consisted in creating a messaging app without a central server. Several interesting functionalities were implemented such as if user A wanted user B's messages but he was offline, user A could ask other users for user B's messages and still have them. This was an extremely interesting project for learning about distributed systems and how they implement high availability.")
      setProjectPopupImage("p2p");
    }else if(project === "pcCase"){
      setProjectPopup("pcCase");
      setProjectPopupTitle("PC CASE");
      setProjectPopupDescription("This was an hobby project in which I designed, 3D modeled and built a real computer case. I had to first come up with an appelaing design, then make it technically correct by 3D Modelling the part with accurate sizes and finally building it with aluminum and acrylic. This resulting in me having a one-of-a-kind pc case and I learnt a lot about designing physical prototypes that work in the real world.")
      setProjectPopupImage("pccase");
    }else if(project === "covidSim"){
      setProjectPopup("covidSim");
      setProjectPopupTitle("COVID SIM");
      setProjectPopupDescription("This project was an hobby project developed during the Covid-19 pandemic and it aimed to recreate an organized community and simulate how an infectious virus would propagate among it. In order to make the simulation more accurate, each individual had a routine, lived in a specific house, had a specific job, some people were children so they went to school, etc. Deasease recovery was also later introduced and it helped visualize how imune pacients affect the spread of such desease, sometimes erradicating it before everyone was infected. This project was made using Processing.");
      setProjectPopupImage("covidsim");
    }else if(project === "lightItDown"){
      setProjectPopup("lightItDown");
      setProjectPopupTitle("LIGHT IT DOWN");
      setProjectPopupDescription("This project was taken to the final of TecStorm, the biggest entrepeneurship competition in Portugal and it consisted in the development of an AI system to detect human presence in large indoor open spaces and regulate lighting to save on energy consumption. Our system would replace the usual battalion of human presence sensors used to regulate lighting in these spaces by a handfull of cameras connected to an AI system. With this project I learned about entrepeneurship, AI, IoT and Project Management.");
      setProjectPopupImage("lightitdown");
    }
  }

  return (
    <div className="App">
      <motion.div id="nameTitle" animate={{x:0,y:0,opacity:1}} initial={{x:"-10vw",y:"10vw", opacity:0}} transition={{ease:easeOut,duration:1,delay:0.2}}>JOÃO<br/>COSTA</motion.div>
      <SquaresTopRight/>
      <div id="squaresLeft1Div"><SquaresLeft/></div>
      <div id="dentDescriptionDiv"><Dent/></div>
      <motion.div id="selfDescriptionDiv"  whileInView={{opacity:1,y:0}} initial={{opacity:0,y:"-2vw"}} transition={{duration:0.5,ease:easeOut,delay:0.2}} viewport={{once:true}}>
        <motion.div id="selfDescriptionHello">Hello,</motion.div>
        <motion.div id="selfDescriptionText">I'm João and I'm a Computer Engineering student.<br/>I am from Leiria, Portugal but I study at FEUP in Porto, Portugal and I'm currently in the 1st year of my masters degree. I also have a bachelors degree in Electrotechnical Engineering. I'm currently a Tech Dept. member at JuniFEUP, the junior enterprise from FEUP. I was already an intern at Vimétrica, a tutor hired by the faculty. and currently work at FEUP's Event Center. </motion.div>
      </motion.div>
      <div id="cvIconAppDiv"><CVIcon/></div>
      <motion.div id="knowMoreDiv">
        <div id="knowMoreNormalText">Want to know more?<br/>Here's my</div>
        <a href='./assets/images/dent/border.svg'><div id="knowMoreSpecialText">Curriculum Vitae</div></a>
      </motion.div>
      <div id="squaresLeft2Div"><SquaresLeft/></div>
      <motion.div id="projectsTitle" whileInView={{x:0,opacity:1}} initial={{x:"-50vw",opacity:0}} transition={{duration:0.6,ease:"easeOut", delay:0.7}} viewport={{once:true}}>PROJECTS</motion.div>
      <div id="projectTilesAppDiv"><ProjectTiles projectOpener={openProjectPopup}/></div>
      <AnimatePresence>
        {projectPopup !== "none" && (
          <motion.div key="projectPopupAppDivKey" id="projectPopupAppDiv" initial={{clipPath: "polygon(-82vw 82vh, -82vw 82vh, 82vw -82vh, 82vw -82vh)"}} exit={{clipPath: "polygon(0vw 164vh, 0vw 164vh, 164vw 0vh, 164vw 0vh)"}} animate={{clipPath:"polygon(-82vw 82vh, 0vw 180vh, 180vw 0vh, 82vw -82vh)"}} transition={{duration:1}}><ProjectPopup projectOpener={setProjectPopup} projectTitle={projectPopupTitle} projectDescription={projectPopupDescription} projectImage = {projectPopupImage}/></motion.div>
        )}
      </AnimatePresence>
      <div id="squaresLeft3Div"><SquaresLeft/></div>
      <motion.div id="contactsTitle" whileInView={{x:0,opacity:1}} initial={{x:"-50vw",opacity:0}} transition={{duration:0.6,ease:"easeOut", delay:0.7}} viewport={{once:true}}>CONTACTS</motion.div>
      <div id="contactsAppDiv"><Contacts/></div>
      <div id="squaresDown"></div>
    </div>
  );
}



export default App;
