import { Link } from 'react-router-dom';
import AmongUsImg from './AmongUsImg';

const CrewmateCard = ({ crewmate }) => {
  return (
    <div className="crewmate-card" style={{ borderColor: crewmate.color || 'white' }}>
      <Link to={`/crewmate/${crewmate.id}`} className="card-link">
        <AmongUsImg color={crewmate.color} size="120px" />
        <h2 style={{ color: crewmate.color || 'white' }}>{crewmate.name}</h2>
        <p><strong>Color:</strong> {crewmate.color}</p>
        <p><strong>Speed:</strong> {crewmate.speed} mph</p>
      </Link>
      <div className="card-actions">
        <Link to={`/edit/${crewmate.id}`} className="btn-edit">Edit Crewmate</Link>
      </div>
    </div>
  );
};

export default CrewmateCard;
