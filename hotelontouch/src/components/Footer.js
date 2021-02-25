import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import PublicIcon from '@material-ui/icons/Public';
import Wave from 'react-wavify'
const Container=styled.div`
  background: #1089ff;
  color:#fff;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  padding-bottom:290px;
  width: 100%; 
  height:700px;
`
const Quick=styled.div`
`
const About=styled.div`
@media(max-width:500px){
    margin-left:10px;  
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
<Wave fill='#1089ff'
        paused={false}
        options={{
          height: 60,
          amplitude: 25,
          speed: 0.5,
          points: 3
        }}
        style={{position:"relative",
        bottom:"-24.5%",zIndex:1}}/>
        <Container>
          <About>
              <h4>HotelOnTouch</h4>
                <div className="icons">
                   <a href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch" style={{marginRight:'5px'}}><FontAwesomeIcon icon={faGithub} size='5x' color ='white'/></a>
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
                 <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}><CallIcon/>12345689</li></a>
                 <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><MailIcon/>HotelOnTouch@gmail.com</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><PublicIcon/>HotelOnTouch.com</li></a>
        </Contact>
  </Container>
    </Body>
 );
}
export default Footer; 
