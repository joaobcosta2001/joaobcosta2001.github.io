import './Footer.css';

var isMobile = window.innerWidth < 900;

function Footer() {
  return (
    <div>
      <div id="footerMainDiv" style={isMobile?{display:"none"}:{display:"block"}}>
          <p id="footerInfoText">Website developed by João Costa</p>
          <p id="footerSmallInfoText">Contacts:</p>
          <p id="footerSmallInfoText">(+351) 910544467</p>
          <p id="footerSmallInfoText">joaoassuncaoecosta@gmail.com</p>
      </div>
      <div id="footerMainDivMobile" style={isMobile?{display:"block"}:{display:"none"}}>
        <p id="footerInfoTextMobile">Website developed by João Costa</p>
        <p id="footerSmallInfoTextMobile">Contacts:</p>
        <p id="footerSmallInfoTextMobile">(+351) 910544467</p>
        <p id="footerSmallInfoTextMobile">joaoassuncaoecosta@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;
