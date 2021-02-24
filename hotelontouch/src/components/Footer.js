import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Wave from 'react-wavify'
const Container=styled.div`
  background:#0069D9;
 color:#fff;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
 padding-bottom:30px;
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
                <p>Lorem ipsum dolor sit amet, di dunt ut labore et dolore magna aliqua. 
                     officia deserunt Excepteur.
                </p>
                <div className="icons">
                   <a href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch" style={{marginRight:'5px'}}><FontAwesomeIcon icon={faGithub} size='2x'/></a>
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
                <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}>5698562368</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>xyz@gmail.com</li></a>
                <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>xyz.com</li></a>
             </Contact>
    </Container>
</Body>
    );
}
export default Footer;