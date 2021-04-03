import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 18rem;
  border:none;
  border-radius: 0.8em !important;
  opacity: 1;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  background-image: linear-gradient(180deg, #89CFF0, #72A0C1);
  box-shadow: 0 5px 40px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  
  &:hover{
    background-image: linear-gradient(180deg, #6495ED, #72A0C1,#00BFFF);
  }
  @keyfram mymove{
      from{
        tranform:rotateY(0 deg);
      }
      to{
        transform:roatateY(360 deg);
      }
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const StyledSocial = styled.div`
  display:flex;
  flex-direction:column;
  position:relative;
  left:7rem;
  bottom:1rem;
  width:25px;
  justify-content:center;
  text-align:center;
  
`;

const StyledImage = styled(Card.Img)`
  border-radius: 0.8em 0.8em 0em 0em !important;
  height:70%;
  `;

const AdminCard = ({
  projectAdminName = 'AYAN BISWAS',
  GitHubUserName = 'ayan-biswas0412',
  webSite = 'https://ayanbiswas.in',
}) => {
  return (
    <StyledCardContainer>
      <StyledCard >
        <StyledImage
          variant='top'
          src={`https://avatars.githubusercontent.com/${GitHubUserName}`}
        />
        
       
        <Card.Body>
          <Card.Title style={{ textAlign: 'center'  }}>
           
             <a href={webSite} rel='noopener noreferrer' target='_blank' style={{ textAlign: 'center' ,fontSize:"25px",color:"white" ,letterSpacing:"2px",textDecoration:"none"}}>
             {projectAdminName}
             </a>
          </Card.Title>
         
          <div style={{display:"flex",flexDirection:"row"}}>
          <a
              href={`https://github.com/${GitHubUserName}`}
              rel='noopener noreferrer'
              target='_blank'
              style={{color:"white",fontSize:"16px",position:"relative",left:"25%",textDecoration:"none"}}
            >
               {GitHubUserName} 
            </a>
            <StyledSocial>
            <a
              href={`https://github.com/${GitHubUserName}`}
              rel='noopener noreferrer'
              target='_blank'
              
            >
              
              <FontAwesomeIcon icon={faGithub}  color="white" />
             
             </a> 
            <a href={webSite} rel='noopener noreferrer' target='_blank'>
              <FontAwesomeIcon icon={faGlobe} style={{color:"white"}}/>
            </a>
            
          </StyledSocial>
          </div>
        </Card.Body>
      </StyledCard>
    </StyledCardContainer>
  );
};

export default AdminCard;
