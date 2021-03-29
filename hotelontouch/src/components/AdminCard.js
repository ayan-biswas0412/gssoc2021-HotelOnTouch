import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 16rem;
  border-radius: 0.8em !important;
  opacity: 1;
  animation: fadeIn ease 1s;
  -webkit-animation: fadeIn ease 1s;
  padding: 0.4%;

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
  text-align: center;
  margin-bottom: 0.8em;
`;

const StyledImage = styled(Card.Img)` 
  border-radius: 0.8em !important;
`;

const AdminCard = ({
  projectAdminName = 'Ayan Biswas',
  GitHubUserName = 'ayan-biswas0412',
  webSite = 'https://ayanbiswas.in',
}) => {
  return (
      <StyledCardContainer>
      
      <StyledCard border='primary'>
      <div>
          <h4 style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Project Admin</h4>
          <Card style={{ width: "0rem" }} >
          <Card.Img variant="top" src={Card.logo}/>
        </Card>
      </div>
        <StyledImage
          variant='top'
          src={`https://avatars.githubusercontent.com/${GitHubUserName}`}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center' }}>
            {projectAdminName}
          </Card.Title>
          <StyledSocial>
            <a
              href={`https://github.com/${GitHubUserName}`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
                alt='GitHub Profile'
                height='30'
                width='30'
              />
              {GitHubUserName}
            </a>
          </StyledSocial>
          <StyledSocial>
            <a href={webSite} rel='noopener noreferrer' target='_blank'>
              <img
                src='https://www.saganetwork.net/img/domainikon.png'
                alt='WebSite Logo'
                height='30'
                width='30'
              />
            </a>
          </StyledSocial>
        </Card.Body>
      </StyledCard>
    </StyledCardContainer>
  );
};

// ReactDom.render(<AdminCard /> , document.getElementsByClassName('box'))
// export default renderCard;
export default AdminCard;

