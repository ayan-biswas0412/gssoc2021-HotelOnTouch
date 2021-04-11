import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram'
import Wave from 'react-wavify'

import { projectRepository } from '../data/projectData';
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
@media(max-width:400px){
  text-align:center;
}
@media(max-width:800px){
  padding: 0px 10px
  margin-bottom:5px;
}
`
const About=styled.div`
@media(max-width:500px){
  text-align:center;
  margin-bottom:20px
}
p{
  margin:0;
}
`
const Contact=styled.div`
padding-bottom:25px;
@media(max-width:400px){
  text-align:center;
}
@media(max-width:279px){
    margin-top:35px;
}
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
                <h4>About Project</h4>
                <p>This project is completely open sourced and looking for contributors.
                </p>
                <div className="icons">
                   <a href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch" style={{marginRight:'5px'}}><FontAwesomeIcon icon={faGithub} size='2x' color='white' style={{marginTop:'10px'}}/></a>
                   </div>
        </About>
           <Quick>
               <h4>Quick Links</h4>
                <a href={projectRepository+'/wiki'}  style={{color:"#fff"}}><li style={{listStyle:'none'}}>Project Wiki</li></a>
                <a href={projectRepository+'/wiki/Contributing'} style={{color:"#fff"}}><li style={{listStyle:'none'}}>Contributing Guide</li></a>
                <a href={projectRepository+'/discussions'}  style={{color:"#fff"}}><li style={{listStyle:'none'}}>Discussion Forum</li></a>
            </Quick>
            <Contact>
                <h4 style={{marginTop: "-24px"}}>Contact Me</h4>
                {/* <a href="/" style={{color:"#fff"}}><li style={{listStyle:'none'}}>5698562368</li></a> */}
                <div style={{display: "flex", justifyContent:"space-evenly"}}>
                <a href="mailto:ayanbiswas184@gmail.com"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><MailIcon /></li></a>
                <a href="mailto:ayanbiswas184@gmail.com"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><InstagramIcon /></li></a>
                <a href="mailto:ayanbiswas184@gmail.com"  style={{color:"#fff"}}><li style={{listStyle:'none'}}><TwitterIcon /></li></a>
                </div>
                {/* <a href="/"  style={{color:"#fff"}}><li style={{listStyle:'none'}}>xyz.com</li></a> */}
             </Contact>
  </Container>
</Body>
    );
}
export default Footer;