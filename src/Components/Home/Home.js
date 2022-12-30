import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import profileImg from "../../assets/imgs/me-effect.png"
import {motion} from "framer-motion"
import {useTranslation} from "react-i18next"
import "./Home.css"
import { useState } from "react"
import AboutMeWords from "../AboutMeWords/AboutMeWords"
import { useNavigate } from "react-router-dom"

//Images
import seaMayemImg from "../../assets/imgs/sea-mayem.png"
import caseImg from "../../assets/imgs/caseImage.jpg"
import covidSimImg from "../../assets/imgs/covidSim.png"
import LIDImg from "../../assets/imgs/LID.jpeg"
import { Button } from "react-bootstrap"

function Home() {
  const { t } = useTranslation();
  const [firstScrollDone,setFirstScrollDone] = useState(false);
  const navigate = useNavigate();

  window.addEventListener('scroll', ()=>setFirstScrollDone(true));

  const [isSeaMayemHover,setSeaMayemHover] = useState(false);
  const [isCaseHover,setCaseHover] = useState(false);
  const [isCovidSimHover,setCovidSimHover] = useState(false);
  const [isLIDHover,setLIDHover] = useState(false);

  var isMobile = window.innerWidth < 900

  return (
    <div>
      <div id="homeMainDiv" style={isMobile?{display:"none"}:{dispay:"block"}}>

        <Navbar/>

        {/* HEADER */}
        <motion.div id="homeNameTextDiv" initial={{opacity:0, y:"5vw"}} animate={{opacity:1, y:0}} transition={{duration:1}}>
          <h1 id="nameText">JOAO COSTA</h1>
        </motion.div>
        <motion.div id="homeProfileImageDiv" initial={{opacity:0, y:"5vw"}} animate={{opacity:1, y:0}} transition={{duration:1}}>
          <div id="homeProfileImageCircle"></div>
          <img src={profileImg} alt="Profile" id="homeProfileImage"></img>
        </motion.div>

        {/* ABOUT ME */}
        <div id="homeAboutMeDiv">
          <motion.div id="homeAboutMeTextDiv" animate={!firstScrollDone?{opacity:0,y:"5vw"}:{opacity:1,y:0}} initial={{opacity:0}} transition={{duration:1}}>
            <p>{t("homeAboutMeText")}</p>
            <Button id="homeAboutMeButton" onClick={()=>navigate("/aboutMe")}>More About Me</Button>
          </motion.div>
        </div>
        <AboutMeWords/>

        {/* PROJECTS */}
        <motion.div id="homeProjectsDivTitle" whileInView={{x:0}} initial={{x:"-35vw"}} viewport={{once:true}} transition={{ease: "easeOut"}}>PROJECTS</motion.div>
        <div id="homeProjectsDiv">
          <div className="homeProjectsDivRow">
            <motion.div className="homeProjectDiv" id="homeProjectsSeaMayem" onMouseEnter={()=>setSeaMayemHover(true)} onMouseLeave={()=>setSeaMayemHover(false)} whileHover={{scale:1.05}} transition={{duration:0.4}}>
              <motion.img src={seaMayemImg} alt="Sea Mayem Project" className="homeProjectImage" initial={{opacity:0}} viewport={{once:true}} whileInView={!isSeaMayemHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitle" initial={{opacity:0}} viewport={{once:true}} whileInView={!isSeaMayemHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>SEA MAYEM</motion.h1>
              <motion.p className="homeProjectDescription" initial={{opacity:0}} viewport={{once:true}} whileInView={!isSeaMayemHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>A multiplayer arcade naval shooter in which each player controls a ship and must work togehter with their team to succeed</motion.p>
            </motion.div>
            <motion.div className="homeProjectDiv" style={{marginLeft: "8vw"}} onMouseEnter={()=>setCaseHover(true)}  onMouseLeave={()=>setCaseHover(false)} whileHover={{scale:1.1}} transition={{duration:0.4}}>
              <motion.img src={caseImg} alt="PC Case Project" className="homeProjectImage" initial={{opacity:0}} viewport={{once:true}} whileInView={!isCaseHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitle" initial={{opacity:0}} viewport={{once:true}} whileInView={!isCaseHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>PC CASE</motion.h1>
              <motion.p className="homeProjectDescription" initial={{opacity:0}} viewport={{once:true}} whileInView={!isCaseHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Desing and construction of a computer case. First a 3D model was created and then a aluminum and acrylic prototype was created</motion.p>
            </motion.div>
          </div>
          <div className="homeProjectsDivRow">
            <motion.div className="homeProjectDiv" onMouseEnter={()=>setCovidSimHover(true)}  onMouseLeave={()=>setCovidSimHover(false)} whileHover={{scale:1.1}} transition={{duration:0.4}}>
              <motion.img src={covidSimImg} alt="Covid Sim Project" className="homeProjectImage" initial={{opacity:0}} viewport={{once:true}} whileInView={!isCovidSimHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitle" initial={{opacity:0}} viewport={{once:true}} whileInView={!isCovidSimHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>COVID SIM</motion.h1>
              <motion.p className="homeProjectDescription" initial={{opacity:0}} viewport={{once:true}} whileInView={!isCovidSimHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Creating a simulation environment in which there is a virus spreading among a community in which people each have their own routine and interact with each other</motion.p>
            </motion.div>
            <motion.div className="homeProjectDiv" style={{marginLeft: "8vw"}} onMouseEnter={()=>setLIDHover(true)}  onMouseLeave={()=>setLIDHover(false)} whileHover={{scale:1.1}} transition={{duration:0.4}}>
              <motion.img src={LIDImg} alt="Light It Down Project" className="homeProjectImage" initial={{opacity:0}} viewport={{once:true}} whileInView={!isLIDHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitle" initial={{opacity:0}} viewport={{once:true}} whileInView={!isLIDHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Light It Down</motion.h1>
              <motion.p className="homeProjectDescription" initial={{opacity:0}} viewport={{once:true}} whileInView={!isLIDHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Creation and prototyping of an AI system for comercial and industrial spaces which aimed to reduce lighting energy consumption. The project made it to the final stage of TecStorm, the biggest entrepeneurship competition in Portugal.</motion.p>
            </motion.div>
          </div>
        </div>
        <div id="homeProjectsButtonDiv">
          <Button id="homeProjectsButton" onClick={()=>navigate("/projects")}>More Projects</Button>
        </div>
        <Footer/>
      </div>


      {/* MOBILE */}


      <div id="homeMainDivMobile" style={isMobile?{display:"block"}:{display:"none"}}>
        <Navbar/>

        {/* HEADER */}
        <motion.div id="homeProfileImageDivMobile" initial={{opacity:0, y:"5vw"}} animate={{opacity:1, y:0}} transition={{duration:1}}>
          <div id="homeProfileImageCircleMobile"></div>
          <img src={profileImg} alt="Profile" id="homeProfileImageMobile"></img>
          <motion.div id="homeNameTextDivMobile">
            <h1 id="nameTextMobile">JOAO COSTA</h1>
          </motion.div>
        </motion.div>

        {/* ABOUT ME */}
        <div id="homeAboutMeDivMobile">
          <motion.div id="homeAboutMeTextDivMobile" animate={{opacity:1}} initial={{opacity:0}} transition={{duration:1}}>
            <p>{t("homeAboutMeText")}</p>
            <Button id="homeAboutMeButtonMobile" onClick={()=>navigate("/aboutMe")}>More About Me</Button>
          </motion.div>
        </div>
        <AboutMeWords/>

        {/* PROJECTS */}
        <motion.div id="homeProjectsDivTitleMobile" whileInView={{x:0}} initial={{x:"-35vw"}} viewport={{once:true}} transition={{ease: "easeOut"}}>PROJECTS</motion.div>
        <div id="homeProjectsDiv">
            <motion.div className="homeProjectDivMobile" onClick={()=>setSeaMayemHover(!isSeaMayemHover)} transition={{duration:0.4}}>
              <motion.img src={seaMayemImg} alt="Sea Mayem Project" className="homeProjectImageMobile" initial={{opacity:0}}  whileInView={!isSeaMayemHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitleMobile" initial={{opacity:0}}  whileInView={!isSeaMayemHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>SEA MAYEM</motion.h1>
              <motion.p className="homeProjectDescriptionMobile" initial={{opacity:0}}  whileInView={!isSeaMayemHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>A multiplayer arcade naval shooter in which each player controls a ship and must work togehter with their team to succeed</motion.p>
            </motion.div>
            <motion.div className="homeProjectDivMobile" onClick={()=>setCaseHover(!isCaseHover)}transition={{duration:0.4}}>
              <motion.img src={caseImg} alt="PC Case Project" className="homeProjectImageMobile" initial={{opacity:0}}  whileInView={!isCaseHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitleMobile" initial={{opacity:0}}  whileInView={!isCaseHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>PC CASE</motion.h1>
              <motion.p className="homeProjectDescriptionMobile" initial={{opacity:0}}  whileInView={!isCaseHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Desing and construction of a computer case. First a 3D model was created and then a aluminum and acrylic prototype was created</motion.p>
            </motion.div>
            <motion.div className="homeProjectDivMobile" onClick={()=>setCovidSimHover(!isCovidSimHover)} transition={{duration:0.4}}>
              <motion.img src={covidSimImg} alt="Covid Sim Project" className="homeProjectImageMobile" initial={{opacity:0}}  whileInView={!isCovidSimHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitleMobile" initial={{opacity:0}}  whileInView={!isCovidSimHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>COVID SIM</motion.h1>
              <motion.p className="homeProjectDescriptionMobile" initial={{opacity:0}}  whileInView={!isCovidSimHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Creating a simulation environment in which there is a virus spreading among a community in which people each have their own routine and interact with each other</motion.p>
            </motion.div>
            <motion.div className="homeProjectDivMobile"  onClick={()=>setLIDHover(!isLIDHover)} transition={{duration:0.4}}>
              <motion.img src={LIDImg} alt="Light It Down Project" className="homeProjectImageMobile" initial={{opacity:0}}  whileInView={!isLIDHover?{opacity:0}:{opacity:1}} transition={{duration:0.2}}/>
              <motion.h1 className="homeProjectTitleMobile" initial={{opacity:0}}  whileInView={!isLIDHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Light It Down</motion.h1>
              <motion.p className="homeProjectDescriptionMobile" initial={{opacity:0}}  whileInView={!isLIDHover?{opacity:1}:{opacity:0}} transition={{duration:0.2}}>Creation and prototyping of an AI system for comercial and industrial spaces which aimed to reduce lighting energy consumption. The project made it to the final stage of TecStorm, the biggest entrepeneurship competition in Portugal.</motion.p>
            </motion.div>
        </div>
        <div id="homeProjectsButtonDivMobile">
          <Button id="homeProjectsButtonMobile" onClick={()=>navigate("/projects")}>More Projects</Button>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
