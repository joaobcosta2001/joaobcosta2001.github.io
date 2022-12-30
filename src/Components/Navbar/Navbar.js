import './Navbar.css';
import {motion} from "framer-motion"
import {Button} from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  return (
    <motion.div id="navbarMainDiv"
        initial={{y:"-130px", opacity:0}}
        animate={{y:"0px",opacity:1}}
        transition={{ease:"easeOut", duration:1}}
    >
        <Button className='navbarButton' onClick={()=>navigate("/")}>Home</Button>
        <Button className='navbarButton' onClick={()=>navigate("/aboutMe")}>About Me</Button>
        <Button className='navbarButton' onClick={()=>navigate("/projects")}>Projects</Button>
    </motion.div>
  );
}

export default Navbar;
