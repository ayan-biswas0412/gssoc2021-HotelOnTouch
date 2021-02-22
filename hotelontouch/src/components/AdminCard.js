import React from 'react';
import { Card, Button } from 'react-bootstrap';

const AdminCard = ({
  projectAdminName = 'Ayan Biswas',
  GitHubUserName = 'ayan-biswas0412',
  webSite = 'https://ayanbiswas.in',
}) => {
  return (
    <Card style={{ width: '20rem', borderRadius: '0.8em' }}>
      <Card.Img
        variant='top'
        src={`https://avatars.githubusercontent.com/${GitHubUserName}`}
        style={{ borderTopRightRadius: '0.8em', borderTopLeftRadius: '0.8em' }}
      />
      <Card.Body>
        <Card.Title>{projectAdminName}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>Project Admin</Card.Subtitle>
        <Card.Text>{`GitHub UserName : ${GitHubUserName}`}</Card.Text>
        <Button variant='primary'>
          <a
            href={webSite}
            rel='noopener noreferrer'
            target='_blank'
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Web Site
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AdminCard;
