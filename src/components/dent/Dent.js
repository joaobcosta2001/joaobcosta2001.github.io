import './Dent.css'
import {motion} from 'framer-motion'


function Dent(){
    return(
        <div id="dentMainDiv">
            <motion.div id="dentBackground" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.1}} viewport={{once:true}}></motion.div>
            <motion.div id="dentStroke" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.1}} viewport={{once:true}}></motion.div>
            <motion.div id="dentBorder"></motion.div>
        </div>
    )
}

export default Dent;