import React from 'react';
import { Card } from 'react-bootstrap';
import './AdminCard.css';

const AdminCard = ({
  projectAdminName = 'Ayan Biswas',
  GitHubUserName = 'ayan-biswas0412',
  webSite = 'https://ayanbiswas.in',
}) => {
  return (
    <div className='CardContainer'>
      <Card
        style={{
          width: '20rem',
        }}
        className='Card'
        border='primary'
      >
        <Card.Img
          variant='top'
          src={`https://avatars.githubusercontent.com/${GitHubUserName}`}
          className='Image'
        />
        <Card.Body>
          <Card.Title
            style={{ textAlign: 'center' }}
          >{`Project Admin : ${projectAdminName}`}</Card.Title>
          <div className='social'>
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
          </div>
          <div className='social'>
            <a href={webSite} rel='noopener noreferrer' target='_blank'>
              <img
                src='https://www.saganetwork.net/img/domainikon.png'
                alt='WebSite Logo'
                height='30'
                width='30'
              />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AdminCard;
