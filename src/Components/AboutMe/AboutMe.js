import { Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar"
import "./AboutMe.css"
import { useNavigate } from "react-router-dom";
import cvFile from "../../assets/docs/CV_Joao_Costa_PT.pdf"


function AboutMe() {
  const navigate = useNavigate();
  return (
    <div id="aboutMeMainDiv">
      <Navbar/>
      <div id="aboutMeWarningDiv">
        <p id="aboutMeText">I'm sorry, I still haven't found</p>
        <p id="aboutMeText">time to finish this page, but if you're</p>
        <p id="aboutMeText">interested here is my <a id="aboutMeCVLink" href={cvFile} download="CV_Joao_Costa">CV</a>.</p>
        <p></p>
        <p id="aboutMeText">Also my email is joaoassuncaoecosta@gmail.com.</p>
        <Button id="aboutMeBackButton" onClick={()=>navigate("/")}>Back</Button>
      </div>
    </div>
  );
}

export default AboutMe;
