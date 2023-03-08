import './SquaresTopRight.css'
import {easeInOut, motion} from 'framer-motion'


function SquaresTopRight(){
    return(
        <motion.div id="squaresTopRightMainDiv" transition={{delayChildren:1}}>
            <motion.div className="squaresTopRightDiv" id="squaresTopRightDiv6" animate={{x:0,y:0}} initial={{x:"50vw",y:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0}}></motion.div>
            <motion.div className="squaresTopRightDiv" id="squaresTopRightDiv5" animate={{x:0,y:0}} initial={{x:"50vw",y:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.1}}></motion.div>
            <motion.div className="squaresTopRightDiv" id="squaresTopRightDiv4" animate={{x:0,y:0}} initial={{x:"50vw",y:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.19}}></motion.div>
            <motion.div className="squaresTopRightDiv" id="squaresTopRightDiv3" animate={{x:0,y:0}} initial={{x:"50vw",y:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.27}}></motion.div>
            <motion.div className="squaresTopRightDiv" id="squaresTopRightDiv2" animate={{x:0,y:0}} initial={{x:"50vw",y:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.34}}></motion.div>
            <motion.div className="squaresTopRightDiv" id="squaresTopRightDiv1" animate={{x:0,y:0}} initial={{x:"50vw",y:"-50vw"}} transition={{ease:easeInOut,duration:1,delay:0.4}}></motion.div>
        </motion.div>
    )
}

export default SquaresTopRight