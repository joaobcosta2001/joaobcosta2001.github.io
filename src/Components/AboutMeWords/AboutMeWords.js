import "./AboutMeWords.css"
import {motion} from "framer-motion"

const words = ["RESOURCEFUL","KIND","TEAM-WORKER","FAST LEARNER", "SELF-LEARNER","COOPERATIVE","CREATIVE","CURIOUS","EMPATHIC","FOCUSED","RELIABLE","DEDICATED",]
const specialWords = ["CREATIVE","TEAM-WORKER","FAST LEARNER"]
const fonts = ["oswald-xlight","oswald-regular"]


function AboutMeWords() {

  return (
    <motion.div id="aboutMeWordsMainDiv" initial={{opacity:0,x:"-200vw"}} whileInView={{opacity:1,x:"0vw"}} transition={{duration:1}} >
      <div className="aboutMeWordsRow" style={{position: "absolute", left:"-50vw",top:"0vw"}}>
        {words.map((word,index)=>{
          var font_type = fonts[Math.floor(Math.random()*fonts.length)]
          var isSpecialWord = word === specialWords[0];
          return <div className={font_type + " aboutMeWord"} key= {index} style={isSpecialWord?{color:"#FDCA00"}:{color:"#d9d9d9"}}>{word}</div>
        })}
      </div>
      <div className="aboutMeWordsRow" style={{position: "absolute", left:"-30vw",top:"5vw"}}>
      {words.map((word,index)=>{
        var font_type = fonts[Math.floor(Math.random()*fonts.length)]
        var isSpecialWord = word === specialWords[1];
        return <div className={font_type + " aboutMeWord"} key= {index} style={isSpecialWord?{color:"#FDCA00"}:{color:"#d9d9d9"}}>{word}</div>
      })}
      </div>
      <div className="aboutMeWordsRow" style={{position: "absolute", left:"-20vw",top:"10vw"}}>
      {words.map((word,index)=>{
        var font_type = fonts[Math.floor(Math.random()*fonts.length)]
        var isSpecialWord = false;
        return <div className={font_type + " aboutMeWord"} key= {index} style={isSpecialWord?{color:"#FDCA00"}:{color:"#d9d9d9"}}>{word}</div>
      })}
      </div>
      <div className="aboutMeWordsRow" style={{position: "absolute", left:"-5vw",top:"15vw"}}>
        {words.map((word,index)=>{
          var font_type = fonts[Math.floor(Math.random()*fonts.length)]
          var isSpecialWord = word === specialWords[2]
          return <div className={font_type + " aboutMeWord"} key= {index} style={isSpecialWord?{color:"#FDCA00"}:{color:"#d9d9d9"}}>{word}</div>
        })}
      </div>
    </motion.div>
  );
}

export default AboutMeWords;