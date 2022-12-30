import './Navbar.css';
import {AnimatePresence, motion} from "framer-motion"
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Images
import hamburguerIcon from "../../assets/imgs/hamburguerIcon.png"

const variants = {
  show: {
    opacity:1,
    transition:{
      staggerChildren: 0.2
    }
  }
}

var isMobile =  window.innerWidth < 900;
const handleResize = ()=>{
  isMobile =  window.innerWidth < 900;
  console.log(isMobile)
}

window.addEventListener('resize', handleResize)

function Navbar() {
  const navigate = useNavigate()
  const [isToggled,setIsToggled] = useState(false)
  console.log(isMobile)
  return (
    <div>
      {!isMobile &&(
      <motion.div id="navbarMainDiv" style={isMobile?{display:"none"}:{display:"block"}}
          initial={{y:"-130px", opacity:0}}
          animate={{y:"0px",opacity:1}}
          transition={{ease:"easeOut", duration:1}}
      >
          <Button className='navbarButton' onClick={()=>navigate("/")}>Home</Button>
          <Button className='navbarButton' onClick={()=>navigate("/aboutMe")}>About Me</Button>
          <Button className='navbarButton' onClick={()=>navigate("/projects")}>Projects</Button>
      </motion.div>
      )}
      {isMobile &&(
      <motion.div id="navbarMainDivMobile" style={isMobile?{display:"block"}:{display:"none"}}
          initial={{y:"-130px", opacity:0}}
          animate={{y:"0px",opacity:1}}
          transition={{ease:"easeOut", duration:1}}
      >
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <Button className='navbarToggleButton' onClick={()=>setIsToggled(!isToggled)}></Button>
        </motion.div>
        <AnimatePresence>
          {isToggled &&(
            <motion.div animate="show" key="navbarHomeButon" variants={variants}>
              <motion.div animate={{x:0,opacity:1}} initial={{x:-10,opacity:0}} exit={{x:10,opacity:0,transition:{delay:0.2}}}>
                <Button className='navbarButtonMobile' onClick={()=>navigate("/")}>Home</Button>
              </motion.div>
              <motion.div animate={{x:0,opacity:1,transition:{delay:0.1}}} initial={{x:-10,opacity:0}} exit={{x:10,opacity:0,transition:{delay:0.1}}}>
                <Button className='navbarButtonMobile' onClick={()=>navigate("/aboutMe")}>About Me</Button>
              </motion.div>
              <motion.div animate={{x:0,opacity:1,transition:{delay:0.2}}} initial={{x:-10,opacity:0}} exit={{x:10,opacity:0}}>
                <Button className='navbarButtonMobile' onClick={()=>navigate("/projects")}>Projects</Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      )}
    </div>
  );
}

export default Navbar;
