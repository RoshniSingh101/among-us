import { useState, useEffect } from 'react';
import { supabase } from '../../client';
import CrewmateCard from '../components/CrewmateCard';

const Home = () => {
  const [crewmates, setCrewmates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('crewmates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching crewmates:', error);
      } else {
        setCrewmates(data);
      }
      setLoading(false);
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="home-page">
      <h1>Your Crewmates</h1>
      <p>Here is a list of all the crewmates you have created!</p>
      
      {loading ? (
        <p>Loading your crew...</p>
      ) : crewmates && crewmates.length > 0 ? (
        <div className="crewmate-grid">
          {crewmates.map((crewmate) => (
            <CrewmateCard key={crewmate.id} crewmate={crewmate} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>No crewmates found!</h2>
          <p>Create one to get started.</p>
        </div>
      )}
    </div>
  );
};

export default Home;
