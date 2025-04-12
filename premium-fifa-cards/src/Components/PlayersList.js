import React, { useState } from 'react';
import Player from './Player';
import { players } from  '../Data/players' ;
import { Container, Row, Col, Navbar, Nav, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

const PlayersList = () => {
  const [sortBy, setSortBy] = useState('rating');
  const [filterPosition, setFilterPosition] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const containerStyle = {
    padding: '30px 20px 60px',
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    minHeight: '100vh',
  };

  const navbarStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    backdropFilter: 'blur(10px)',
    marginBottom: '30px',
    borderRadius: '15px',
    padding: '15px',
  };

  const headerStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '40px 0 20px',
    fontFamily: '"Poppins", sans-serif',
    fontWeight: '800',
    fontSize: '42px',
    textShadow: '0 2px 15px rgba(0,0,0,0.3)',
    backgroundImage: 'linear-gradient(90deg, #FFD700, #FFC400)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    letterSpacing: '2px',
  };

  const formControlStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'white',
    borderRadius: '10px',
  };

  // Filter and sort players
  const filteredPlayers = players
    .filter(player => filterPosition === 'All' || player.position === filterPosition)
    .filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'team') return a.team.localeCompare(b.team);
      if (sortBy === 'age') return a.age - b.age;
      return b[sortBy] - a[sortBy]; // For rating and other numeric stats
    });

  return (
    <Container fluid style={containerStyle}>
      <h1 style={headerStyle}>PREMIUM FIFA PLAYER CARDS</h1>
      
      <Navbar style={navbarStyle}>
        <Container>
          <Nav className="me-auto">
            <Form.Group className="d-flex align-items-center me-3">
              <FontAwesomeIcon icon={faSort} style={{color: 'white', marginRight: '10px'}} />
              <Form.Select 
                style={formControlStyle}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
                <option value="team">Sort by Team</option>
                <option value="age">Sort by Age</option>
                <option value="pace">Sort by Pace</option>
                <option value="shooting">Sort by Shooting</option>
              </Form.Select>
            </Form.Group>
            
            <Form.Group className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFilter} style={{color: 'white', marginRight: '10px'}} />
              <Form.Select 
                style={formControlStyle}
                value={filterPosition}
                onChange={(e) => setFilterPosition(e.target.value)}
              >
                <option value="All">All Positions</option>
                <option value="Forward">Forward</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Defender">Defender</option>
                <option value="Goalkeeper">Goalkeeper</option>
              </Form.Select>
            </Form.Group>
          </Nav>
          
          <Form className="d-flex">
            <div className="position-relative">
              <FontAwesomeIcon icon={faSearch} style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'white'
              }} />
              <Form.Control
                type="search"
                placeholder="Search players..."
                style={{
                  ...formControlStyle,
                  paddingLeft: '35px',
                  width: '250px'
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Form>
        </Container>
      </Navbar>
      
      <Row className="justify-content-center">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map((player) => (
            <Col key={player.id} xs={12} sm={6} lg={4} xl={3} className="d-flex justify-content-center">
              <Player {...player} />
            </Col>
          ))
        ) : (
          <div style={{color: 'white', textAlign: 'center', padding: '50px'}}>
            No players match your search criteria
          </div>
        )}
      </Row>
    </Container>
  );
};

export default PlayersList;