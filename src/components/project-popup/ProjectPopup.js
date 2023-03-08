import './ProjectPopup.css'

function ProjectPopup({projectOpener, projectTitle, projectDescription, projectImage}){
    return(
        <div id="projectPopupMainDiv">
            <div id="projectPopupCloseButton" onClick={()=>{projectOpener("none");}}>
                <div id="projectPopupCloseButtonOverlay"></div>
            </div>
            <div id="projectPopupTitle">{projectTitle}</div>
            <div id={projectImage==="covidsim"?"projectPopupDescriptionNoImage":"projectPopupDescription"}>{projectDescription}</div>
            <div id={"project" + projectImage + "Image1"} className="projectPopupImage1"></div>
            <div id={"project" + projectImage + "Image2"} className="projectPopupImage2"></div>
        </div>
    )
}

export default ProjectPopup;