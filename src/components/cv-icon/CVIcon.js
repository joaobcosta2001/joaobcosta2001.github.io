import './CVIcon.css'
import {motion} from 'framer-motion'
import { useState } from 'react';


function CVIcon(){
    const [isHover, setIsHover] = useState(false);

    return(
        <div id="cvIconMainDiv">
            <motion.div id="cvDocumentIcon" className='cvIconDiv' animate={isHover?{y:0}:{y:"1.5vw"}} transition={{duration:0.3,ease:"easeOut"}}></motion.div>
            <div id="cvIconShadow" className='cvIconDiv'></div>
            <div id="cvIconOverlay" className='cvIconDiv'></div>
            <div id="cvIconDetectionDiv"  onMouseEnter={()=>{setIsHover(true)}} onMouseLeave={()=>{setIsHover(false)}}></div>
        </div>
    )
}

export default CVIcon;