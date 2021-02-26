import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import Wave from 'react-wavify'
const Container=styled.div`
  background:#0069D9;
 color:#fff;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
 padding-bottom:30px;
@media(max-width:400px){
   flex-diection:row;
   align-items:center;
 }
`
const Quick=styled.div`
@media(max-width:400px){
  padding-left:5x;
}
`
const About=styled.div`
@media(max-width:500px){
    margin-left:10px;
}
p{
  margin:0;
}
`
const Contact=styled.div`
`
const Body=styled.body`
display:flex;
flex-direction:column;
`
function Footer(){
    return(
      <Body>
        <Wave fill='#0069D9'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.5,
          points: 3
        }}
 /> 
  <Container>
        <About>
                <h4>About us</h4>
                <p>In Todays Generation the Hotel Industries are changing rapidly so this platform will manage the in house needs of hotels like </p>
                <p>laundry service, Room Service Management, Bar, Restraunt Order Management.</p>
                <div className="icons">
                   <a href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch" style={{marginRight:'5px'}}><FontAwesomeIcon icon={faGithub} size='2x' color='white'/></a>
                   </div>
        </About>
           <Quick>
               <h4>Quick Links</h4>
                <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}>Privacy Policy</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>Terms & Conditions</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>Disclaimer</li></a>
          </Quick>
            <Contact>
                <h4>Contact Us</h4>
                <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}><CallIcon/>9532698542</li></a>
                <a href="mailto:ayanbiswas184@gmail.com"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><MailIcon/>ayanbiswas184@gmail.com</li></a>
                <a href="https://hotelontouch.netlify.app/" style={{color:"#fff"}}><li style={{listStyle:'none'}}><PublicIcon/>HotelOnTouch</li></a>
             </Contact>
  </Container>
</Body>
    );
}
export default Footer;