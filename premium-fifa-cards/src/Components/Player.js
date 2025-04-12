import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faRunning, faFutbol, faPeopleArrows, faChild, faShieldAlt, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import Stats from './Stats';
import { defaultImages } from '../Data/players';

const Player = ({ 
  name, 
  team, 
  nationality, 
  position,
  jerseyNumber, 
  age, 
  imageUrl, 
  flagUrl,
  teamLogo,
  rating,
  pace,
  shooting,
  passing,
  dribbling,
  defending,
  physical
}) => {
  const [flipped, setFlipped] = useState(false);

  const cardContainerStyle = {
    width: '340px',
    height: '520px',
    margin: '25px',
    perspective: '1500px',
    fontFamily: '"Poppins", sans-serif',
  };

  const cardStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.8s',
    transformStyle: 'preserve-3d',
    transform: flipped ? 'rotateY(180deg)' : '',
    cursor: 'pointer',
    borderRadius: '20px',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.25)',
  };

  const cardFaceStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    borderRadius: '20px',
    overflow: 'hidden',
  };

  const cardFrontStyle = {
    ...cardFaceStyle,
    background: 'linear-gradient(145deg, #16161d 0%, #1f1f2e 100%)',
  };

  const cardBackStyle = {
    ...cardFaceStyle,
    background: 'linear-gradient(145deg, #16161d 0%, #1f1f2e 100%)',
    transform: 'rotateY(180deg)',
    padding: '25px',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(circle at 50% 10%, rgba(0, 70, 199, 0.7) 0%, rgba(0, 0, 0, 0) 60%)',
    zIndex: 1,
  };

  const playerImageContainerStyle = {
    position: 'relative',
    height: '65%',
    overflow: 'hidden',
  };

  const playerImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'top center',
    zIndex: 2,
  };

  const ratingBadgeStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontWeight: '700',
    fontSize: '22px',
    zIndex: 3,
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
    border: '2px solid white',
  };

  const nationalityBadgeStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '30px',
    borderRadius: '5px',
    overflow: 'hidden',
    zIndex: 3,
    boxShadow: '0 3px 10px rgba(0, 0, 0, 0.3)',
  };

  const flagStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const infoContainerStyle = {
    padding: '15px 20px',
    position: 'relative',
    zIndex: 2,
  };

  const playerNameStyle = {
    color: 'white',
    fontSize: '22px',
    fontWeight: '700',
    margin: '0 0 5px 0',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const playerDetailsStyle = {
    color: '#b3b3cc',
    fontSize: '14px',
    margin: '0 0 10px 0',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const teamLogoStyle = {
    width: '24px',
    height: '24px',
    objectFit: 'contain',
    marginRight: '5px',
  };

  const jerseyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '15px',
    right: '20px',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 215, 0, 0.9)',
    color: '#000',
    fontWeight: '700',
    fontSize: '18px',
    zIndex: 2,
  };

  const statColors = {
    pace: '#f56565',
    shooting: '#48bb78',
    passing: '#4299e1',
    dribbling: '#ed8936',
    defending: '#9f7aea',
    physical: '#e53e3e',
  };

  return (
    <div style={cardContainerStyle} onClick={() => setFlipped(!flipped)}>
      <div style={cardStyle}>
        <div style={cardFrontStyle}>
          <div style={overlayStyle}></div>
          <div style={playerImageContainerStyle}>
            <img src={imageUrl} alt={name} style={playerImageStyle} />
          </div>
          <div style={ratingBadgeStyle}>
            {rating}
          </div>
          <div style={nationalityBadgeStyle}>
            <img src={flagUrl} alt={nationality} style={flagStyle} />
          </div>
          <div style={infoContainerStyle}>
            <h3 style={playerNameStyle}>{name}</h3>
            <div style={playerDetailsStyle}>
              <img src={teamLogo} alt={team} style={teamLogoStyle} />
              <span>{team}</span>
            </div>
            <div style={playerDetailsStyle}>
              <span>{position}</span>
              <span>•</span>
              <span>{nationality}</span>
              <span>•</span>
              <span>{age} yrs</span>
            </div>
          </div>
          <div style={jerseyStyle}>{jerseyNumber}</div>
        </div>
        
        <div style={cardBackStyle}>
          <h3 style={{...playerNameStyle, marginBottom: '20px', textAlign: 'center', borderBottom: '2px solid rgba(255,215,0,0.5)', paddingBottom: '10px'}}>
            Player Stats
          </h3>
          
          <Stats label={<><FontAwesomeIcon icon={faRunning} /> Pace</>} value={pace} color={statColors.pace} />
          <Stats label={<><FontAwesomeIcon icon={faFutbol} /> Shooting</>} value={shooting} color={statColors.shooting} />
          <Stats label={<><FontAwesomeIcon icon={faPeopleArrows} /> Passing</>} value={passing} color={statColors.passing} />
          <Stats label={<><FontAwesomeIcon icon={faChild} /> Dribbling</>} value={dribbling} color={statColors.dribbling} />
          <Stats label={<><FontAwesomeIcon icon={faShieldAlt} /> Defending</>} value={defending} color={statColors.defending} />
          <Stats label={<><FontAwesomeIcon icon={faDumbbell} /> Physical</>} value={physical} color={statColors.physical} />
          
          <div style={{position: 'absolute', bottom: '20px', left: '0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px'}}>
            <img src={flagUrl} alt={nationality} style={{width: '30px', height: '20px', objectFit: 'cover'}} />
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FontAwesomeIcon icon={faStar} style={{color: 'gold'}} />
              <span style={{color: 'white', fontWeight: 'bold'}}>{rating}</span>
            </div>
            <img src={teamLogo} alt={team} style={{width: '25px', height: '25px', objectFit: 'contain'}} />
          </div>
        </div>
      </div>
    </div>
  );
};

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Free Agent',
    nationality: 'International',
    position: 'Midfielder',
    jerseyNumber: 0,
    age: 25,
    rating: 75,
    pace: 75,
    shooting: 75,
    passing: 75,
    dribbling: 75,
    defending: 75,
    physical: 75,
    imageUrl: defaultImages.playerImage,
    flagUrl: defaultImages.flagImage,
    teamLogo: defaultImages.teamLogoImage
  };
  
  export default Player;