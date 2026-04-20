import { useState, useEffect } from 'react';
import { supabase } from '../../client';
import { useParams, Link, useNavigate } from 'react-router-dom';
import AmongUsImg from '../components/AmongUsImg';

const CrewmateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching crewmate:', error);
        navigate('/'); // redirect to home if not found
      } else {
        setCrewmate(data);
      }
      setLoading(false);
    };

    fetchCrewmate();
  }, [id, navigate]);

  if (loading) return <div className="loading">Checking for impostors...</div>;
  if (!crewmate) return null;

  return (
    <div className="detail-page">
      <div className="detail-card glass-panel" style={{ boxShadow: `0 8px 32px 0 ${crewmate.color?.toLowerCase() || 'rgba(255, 255, 255, 0.2)'}` }}>
        <AmongUsImg color={crewmate.color} size="200px" />
        <h1 style={{ color: crewmate.color?.toLowerCase() || 'white' }}>Crewmate: {crewmate.name}</h1>
        <h2>Stats:</h2>
        <ul>
          <li><strong>Color:</strong> {crewmate.color}</li>
          <li><strong>Speed:</strong> {crewmate.speed} mph</li>
        </ul>
        <div className="extra-info">
          {crewmate.speed > 50 ? (
            <p>Wow, this crewmate is super fast! They can finish their tasks in no time!</p>
          ) : (
            <p>This crewmate is pretty slow. They might get caught by the Impostor!</p>
          )}
          {crewmate.color === 'Red' && <p>Suspicious... Red is always kinda sus.</p>}
        </div>
        <Link to={`/edit/${crewmate.id}`} className="btn-edit-large">Edit this Crewmate</Link>
      </div>
    </div>
  );
};

export default CrewmateDetail;
