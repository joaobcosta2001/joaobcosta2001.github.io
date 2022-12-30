import './App.css';
import {Routes, Route} from "react-router-dom"
import Home from "./Components/Home/Home"
import AboutMe from './Components/AboutMe/AboutMe';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/aboutMe" exact element={<AboutMe/>}/>
        <Route path="/projects" exact element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
