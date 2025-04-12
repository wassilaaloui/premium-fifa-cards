// Import player images
import messiImage from '../Images/player-images/messi.jpg';
import ronaldoImage from '../Images/player-images/Cristiano-Ronaldo.jpg';
import mbappeImage from '../Images/player-images/Kylian-Mbappé.jpg';
import haalandImage from '../Images/player-images/Erling-Haaland.jpg';
import defaultPlayerImage from '../Images/player-images/default-player.jpg';

// Import flag images
import argentinaFlag from '../Images/flags/Argentina.jpg';
import portugalFlag from '../Images/flags/Portuga.jpg';
import franceFlag from '../Images/flags/France.jpg';
import norwayFlag from '../Images/flags/Norway.jpg';
import internationalFlag from '../Images/flags/international.png';

// Import team logos
import interMiamiLogo from '../Images/team-logos/team-logos-inter-miami.jpg'  ;
import alNassrLogo from '../Images/team-logos/team-logos-al-nassr.png';
import realMadridLogo from '../Images/team-logos/team-logos-real-madrid.jpg';
import manCityLogo from '../Images/team-logos/team-logos-man-city.jpg';
import defaultTeamLogo from '../Images/team-logos/default.png';

export const players = [
  {
    id: 1,
    name: "Lionel Messi",
    team: "Inter Miami CF",
    nationality: "Argentina",
    position: "Forward",
    jerseyNumber: 10,
    age: 37,
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 94,
    dribbling: 96,
    defending: 38,
    physical: 68,
    imageUrl: messiImage,
    flagUrl: argentinaFlag,
    teamLogo: interMiamiLogo
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    team: "Al-Nassr FC",
    nationality: "Portugal",
    position: "Forward",
    jerseyNumber: 7,
    age: 40,
    rating: 91,
    pace: 87,
    shooting: 94,
    passing: 82,
    dribbling: 88,
    defending: 34,
    physical: 78,
    imageUrl: ronaldoImage,
    flagUrl: portugalFlag,
    teamLogo: alNassrLogo
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    team: "Real Madrid",
    nationality: "France",
    position: "Forward",
    jerseyNumber: 9,
    age: 26,
    rating: 95,
    pace: 97,
    shooting: 92,
    passing: 85,
    dribbling: 94,
    defending: 36,
    physical: 81,
    imageUrl: mbappeImage,
    flagUrl: franceFlag,
    teamLogo: realMadridLogo
  },
  {
    id: 4,
    name: "Erling Haaland",
    team: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    jerseyNumber: 9,
    age: 24,
    rating: 94,
    pace: 91,
    shooting: 95,
    passing: 77,
    dribbling: 85,
    defending: 49,
    physical: 90,
    imageUrl: haalandImage,
    flagUrl: norwayFlag,
    teamLogo: manCityLogo
  }
];

// Update default props in Player.js to use these imported images
export const defaultImages = {
  playerImage: defaultPlayerImage,
  flagImage: internationalFlag,
  teamLogoImage: defaultTeamLogo
};