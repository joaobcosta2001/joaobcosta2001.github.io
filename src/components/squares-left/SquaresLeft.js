import './SquaresLeft.css'
import {easeInOut, motion} from 'framer-motion'


function SquaresLeft(){

    return(
        <motion.div id="squaresLeftMainDiv">
            <motion.div className="squaresLeftDiv" id="squaresLeftDiv4" whileInView={{x:0,y:0}} initial={{x:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0}} viewport={{once:true}}></motion.div>
            <motion.div className="squaresLeftDiv" id="squaresLeftDiv3" whileInView={{x:0,y:0}} initial={{x:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.1}} viewport={{once:true}}></motion.div>
            <motion.div className="squaresLeftDiv" id="squaresLeftDiv2" whileInView={{x:0,y:0}} initial={{x:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.19}} viewport={{once:true}}></motion.div>
            <motion.div className="squaresLeftDiv" id="squaresLeftDiv1" whileInView={{x:0,y:0}} initial={{x:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.27}} viewport={{once:true}}></motion.div>
        </motion.div>
    )
}

export default SquaresLeft