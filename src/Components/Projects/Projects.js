import { Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar"
import "./Projects.css"
import { useNavigate } from "react-router-dom";


function Projects() {
  const navigate = useNavigate();
  return (
    <div id="projectsMainDiv">
      <Navbar/>
      <div id="projectsWarningDiv">
        <p id="projectsText">I'm sorry, I still haven't found</p>
        <p id="projectsText">time to make this page!</p>
        <Button id="projectsBackButton" onClick={()=>navigate("/")}>Back</Button>
      </div>
    </div>
  );
}

export default Projects;
