import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Contacts.css";

function Contacts(){

    const [phoneHovered,setPhoneHovered] = useState(false);
    const [emailHovered,setEmailHovered] = useState(false);
    const [githubHovered,setGithubHovered] = useState(false);
    const [linkedinHovered,setLinkedinHovered] = useState(false);

    function deactivateAllContacts(){
        setPhoneHovered(false);
        setEmailHovered(false);
        setGithubHovered(false);
        setLinkedinHovered(false);
    }

    function changeActiveContact(c){
        deactivateAllContacts();
        if (c==="phone"){
            setPhoneHovered(true);
        }else if(c ==="email"){
            setEmailHovered(true);
        }else if(c ==="github"){
            setGithubHovered(true);
        }else if(c ==="linkedin"){
            setLinkedinHovered(true);
        }

    }


    return(
        <div id="contactsMainDiv">
            <div className="contactBubble" id="contactBubblePhone" onMouseEnter={()=>{changeActiveContact("phone")}}>
                <div className="contactBubbleImage" id="phoneImage">
                    <div className="contactBubbleImageHighlight" id="phoneImageHighlight"></div>
                </div>
            </div>
            <div className="contactBubble" id="contactBubbleEmail" onMouseEnter={()=>{changeActiveContact("email")}}>
                <div className="contactBubbleImage" id="emailImage">
                    <div className="contactBubbleImageHighlight" id="emailImageHighlight"></div>
                </div>
            </div>
            <a href="https://www.linkedin.com/in/joaobcosta2001" target="_blank" rel="noreferrer">
                <div className="contactBubble" id="contactBubbleLinkedin" onMouseEnter={()=>{changeActiveContact("github")}}>
                    <div className="contactBubbleImage" id="linkedinImage">
                        <div className="contactBubbleImageHighlight" id="linkedinImageHighlight"></div>
                    </div>
                </div>
            </a>
            <a href="https://www.github.com/joaobcosta2001" target="_blank" rel="noreferrer">
                <div className="contactBubble" id="contactBubbleGithub" onMouseEnter={()=>{changeActiveContact("linkedin")}}>
                    <div className="contactBubbleImage" id="githubImage">
                        <div className="contactBubbleImageHighlight" id="githubImageHighlight"></div>
                    </div>
                </div>
            </a>
            <div id="contactsTextDiv">
                <AnimatePresence>
                    {emailHovered &&(
                        <motion.div className="contactText" id="contactTextEmail" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}} transition={{duration:0.5}}>joaoassuncaoecosta@gmail.com</motion.div>
                    )}
                    {githubHovered && (
                        <motion.div className="contactText contactTextSpecial" id="contactTextGithub" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}><a href="https://www.linkedin.com/in/joaobcosta2001" target="_blank" rel="noreferrer">linkedin.com/in/joaobcosta2001</a></motion.div>
                    )}
                    {linkedinHovered && (
                        <motion.div className="contactText contactTextSpecial" id="contactTextLinkedin" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}><a href="https://www.github.com/joaobcosta2001" target="_blank" rel="noreferrer">github.com/joaobcosta2001</a></motion.div>
                    )}
                    {phoneHovered && (
                        <motion.div className="contactText" id="contactTextPhone" animate={{opacity:1}} initial={{opacity:0}} exit={{opacity:0}}>{"(+351) 910 544 467"}</motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Contacts;