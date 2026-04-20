import { useState, useEffect } from 'react';
import { supabase } from '../../client';
import { useParams, useNavigate } from 'react-router-dom';

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Purple', 'Brown', 'Cyan', 'Lime'];

const EditCrewmate = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [speed, setSpeed] = useState('');
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
      } else if (data) {
        setName(data.name);
        setColor(data.color);
        setSpeed(data.speed);
      }
      setLoading(false);
    };

    fetchCrewmate();
  }, [id]);

  const updateCrewmate = async (e) => {
    e.preventDefault();
    
    if (!name || !color || !speed) {
      alert("Please fill in all fields!");
      return;
    }

    const { error } = await supabase
      .from('crewmates')
      .update({ name, color, speed })
      .eq('id', id);

    if (error) {
      console.error('Error updating crewmate:', error);
      alert('Failed to update crewmate.');
    } else {
      navigate('/');
    }
  };

  const deleteCrewmate = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this crewmate?");
    if (!confirmDelete) return;

    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting crewmate:', error);
      alert('Failed to delete crewmate.');
    } else {
      navigate('/');
    }
  };

  if (loading) return <div className="loading">Loading your crewmate...</div>;

  return (
    <div className="form-page">
      <h1>Update Crewmate</h1>
      <form onSubmit={updateCrewmate} className="crewmate-form">
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Speed (mph)</label>
          <input 
            type="number" 
            value={speed} 
            onChange={(e) => setSpeed(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Color</label>
          <div className="color-options">
            {colors.map((c) => (
              <label key={c} className="color-radio">
                <input 
                  type="radio" 
                  name="color" 
                  value={c} 
                  checked={color === c}
                  onChange={(e) => setColor(e.target.value)} 
                />
                <span className="color-swatch-label" style={{ backgroundColor: c.toLowerCase(), color: ['Yellow', 'White', 'Lime', 'Cyan'].includes(c) ? 'black' : 'white' }}>{c}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">Update Crewmate</button>
          <button type="button" onClick={deleteCrewmate} className="btn-delete">Delete Crewmate</button>
        </div>
      </form>
    </div>
  );
};

export default EditCrewmate;
