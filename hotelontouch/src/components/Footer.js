import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import Wave from 'react-wavify'

import "./Styles.css"

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
  padding: 0px 10px
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
  <footer class='footer-section'>
      <div class='container'>
        <div class='footer-cta pt-5 pb-5'>
          <div class='row'>
            <div class='col-xl-4 col-md-4 mb-4'>
              <div class='single-cta'>
              <i class='fa fa-map-marker'><LocationOnIcon style={{ fontSize: 40, marginBottom: 20 }}/></i>
                <div class='cta-text'>
                  <h4>Find Us</h4>
                  <span>1010 Avenue, sw 54321, Gwalior</span>
                </div>
              </div>
            </div>
            <br class='mb-30'/>
            <div class='col-xl-4 col-md-4 mb-4'>
              <div class='single-cta'>
                <i class='fa fa-phone'><CallIcon style={{ fontSize: 40, marginBottom: 20 }}/></i>
                <div class='cta-text'>
                  <h4>Call Us</h4>
                  <span>123456789</span>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-md-4 mb-4'>
              <div class='single-cta'>
                <i class='fa fa-envelope-open'><MailIcon style={{ fontSize: 40, marginBottom: 20 }}/></i>
                <div class='cta-text'>
                  <h4>Mail Us</h4>
                  <span>mail@info.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='footer-content pt-5 pb-5'>
          <div class='row'>
            <div class='col-xl-4 col-lg-4 mb-50'>
              <div class='footer-widget'>
                <div class='footer-logo'>
                  <a href='/#'>
                    <img src='favicon_logo.ico' class='img-fluid' style={{height: 30, width: 50, marginBottom: -20 }} alt='logo' />
                  </a>
                </div>
                <div class='footer-text' >
                  <p>
                  Manage your all hotel services at one place - This is the project repository for HotelOnTouch Project and this project is actively looking for new contributors
                  </p>
                </div>
                <div class='footer-social-icon' style={{marginTop: 40}}>
                  <span>Follow us</span>
                  <a href='/#'>
                    <i><FacebookIcon style={{ fontSize: 40, marginBottom: 20 }}/></i>
                  </a>
                  <a href='/#'>
                    <i><TwitterIcon style={{ fontSize: 40, marginBottom: 20 }}/></i>
                  </a>
                  <a href='/#'>
                    <i><InstagramIcon style={{ fontSize: 40, marginBottom: 20 }}/></i>
                  </a>
                </div>
              </div>
            </div>
            <div class='col-xl-4 col-lg-4 col-md-6 mb-30'>
              <div class='footer-widget'>
                <div class='footer-widget-heading'>
                  <br />
                  <h3>Useful Links</h3>
                </div>
                <ul>
                  <li>
                    <a href='/#'>Home</a>
                  </li>
                  <li>
                    <a href='/#'>services</a>
                  </li>
                  <li>
                    <a href='/#'>About us</a>
                  </li>
                  <li>
                    <a href='/#'>Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-xl-4 col-lg-4 col-md-6 mb-50'>
              <div class='footer-widget'>
                <div class='footer-widget-heading'>
                  <br />
                  <h3>Subscribe</h3>
                </div>
                <div class='footer-text mb-25'>
                  <p>
                    Don’t miss to subscribe to our new feeds, kindly fill the
                    form below.
                  </p>
                </div>
                <div class='subscribe-form' style={{marginTop: 40}}>
                  <form action='/#'>
                    <input type='text' placeholder='Email Address' />
                    <button>
                      <i class='fa fa-telegram fa-5x'><TelegramIcon style={{ fontSize: 30, marginBottom: 10 }}/></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='copyright-area'>
        <div class='container'>
          <div class='row'>
            <div class='col-xl-6 col-lg-6 text-center text-lg-left'>
              <div class='copyright-text'>
                <p>
                  &copy; 2021 HotelOnTouch | All Right Reserved | Terms Of Service 
                </p>
              </div>
            </div>
            <div class='col-xl-6 col-lg-6 d-none d-lg-block text-right'>
              <div class='footer-menu'>
                <ul>
                  <li>
                    <a href='/#'>Home</a>
                  </li>
                  <li>
                    <a href='/#'>Terms</a>
                  </li>
                  <li>
                    <a href='/#'>Privacy</a>
                  </li>
                  <li>
                    <a href='/#'>Policy</a>
                  </li>
                  <li>
                    <a href='/#'>Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Container>
</Body>
    );
}
export default Footer;