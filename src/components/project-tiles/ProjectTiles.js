import { useState } from 'react';
import './ProjectTiles.css'

function ProjectTiles({projectOpener}){

    const [isDLDHovered, setIsDLDHovered] = useState(false);
    const [isSeaMayemHovered, setIsSeaMayemHovered] = useState(false);
    const [isP2PHovered, setIsP2PHovered] = useState(false);
    const [isPCCaseHovered, setIsPCCaseHovered] = useState(false);
    const [isCovidSimHovered, setIsCovidSimHovered] = useState(false);
    const [isLightItDownHovered, setIsLightItDownHovered] = useState(false);

    return(
        <div id="projectTilesMainDiv">
            <div id="dldProjectDiv" className='projectTileDiv' onMouseEnter={()=>{setIsDLDHovered(true);}} onMouseLeave={()=>{setIsDLDHovered(false);}} onClick={()=>{projectOpener("dld")}}>
                <div className='projectTileTitleDiv'>DLD WEBSITE </div>
                <div id="dldProjectDivOverlay" className={isDLDHovered?"projectTileDivOverlayOpen":"projectTileDivOverlay"}>
                    <div className='projectTileDescription'>Frontend Website Development Project for DLD Artes Gráficas while a Tech Member at JuniFEUP. Developed with React.js and Framer Motion</div>
                    <div className='projectTileTitleDivHighlight'>DLD WEBSITE </div>
                </div>
            </div>
            <div id="seaMayemProjectDiv" className='projectTileDiv' onMouseEnter={()=>{setIsSeaMayemHovered(true);}} onMouseLeave={()=>{setIsSeaMayemHovered(false);}} onClick={()=>{projectOpener("seaMayem")}}>
                <div className='projectTileTitleDiv'>SEA MAYEM</div>
                <div id="dldProjectDivOverlay" className={isSeaMayemHovered?"projectTileDivOverlayOpen":"projectTileDivOverlay"}>
                    <div className='projectTileDescription'>Arcade Naval Multiplayer Shooter Game developed using Processing for the client and Python for the server.</div>
                    <div className='projectTileTitleDivHighlight'>SEA MAYEM </div>
                </div>
            </div>
            <div id="P2PProjectDiv" className='projectTileDiv' onMouseEnter={()=>{setIsP2PHovered(true);}} onMouseLeave={()=>{setIsP2PHovered(false);}} onClick={()=>{projectOpener("p2p")}}>
                <div className='projectTileTitleDiv'>P2P MESSENGER</div>
                <div id="dldProjectDivOverlay" className={isP2PHovered?"projectTileDivOverlayOpen":"projectTileDivOverlay"}>
                    <div className='projectTileDescription'>Serverless Messenger Application that provided high availability within a intrinsicly distributed system</div>
                    <div className='projectTileTitleDivHighlight'>P2P MESSENGER</div>
                </div>
            </div>
            <div id="PCCaseProjectDiv" className='projectTileDiv' onMouseEnter={()=>{setIsPCCaseHovered(true);}} onMouseLeave={()=>{setIsPCCaseHovered(false);}} onClick={()=>{projectOpener("pcCase")}}>
                <div className='projectTileTitleDiv'>PC CASE</div>
                <div id="dldProjectDivOverlay" className={isPCCaseHovered?"projectTileDivOverlayOpen":"projectTileDivOverlay"}>
                    <div className='projectTileDescription'>Design 3D Modeling and Construction of an Aluminum and Acrylic PC case</div>
                    <div className='projectTileTitleDivHighlight'>PC CASE</div>
                </div>
            </div>
            <div id="covidSimProjectDiv" className='projectTileDiv' onMouseEnter={()=>{setIsCovidSimHovered(true);}} onMouseLeave={()=>{setIsCovidSimHovered(false);}} onClick={()=>{projectOpener("covidSim")}}>
                <div className='projectTileTitleDiv'>COVID SIM</div>
                <div id="dldProjectDivOverlay" className={isCovidSimHovered?"projectTileDivOverlayOpen":"projectTileDivOverlay"}>
                    <div className='projectTileDescription'>Simulation of an infectious desease among a community with smart individuals created in Python</div>
                    <div className='projectTileTitleDivHighlight'>COVID SIM</div>
                </div>
            </div>
            <div id="lightItDownProjectDiv" className='projectTileDiv' onMouseEnter={()=>{setIsLightItDownHovered(true);}} onMouseLeave={()=>{setIsLightItDownHovered(false);}} onClick={()=>{projectOpener("lightItDown")}}>
                <div className='projectTileTitleDiv'>LIGHT IT DOWN</div>
                <div id="dldProjectDivOverlay" className={isLightItDownHovered?"projectTileDivOverlayOpen":"projectTileDivOverlay"}>
                    <div className='projectTileDescription'>AI centered project with the aim of reducing comercial and industrial space lighting energy consumption</div>
                    <div className='projectTileTitleDivHighlight'>LIGHT IT DOWN</div>
                </div>
            </div>
        </div>
    )
}


export default ProjectTiles;