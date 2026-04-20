import { useState } from 'react';
import { supabase } from '../../client';
import { useNavigate } from 'react-router-dom';

const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Pink', 'Purple', 'Brown', 'Cyan', 'Lime'];

const CreateCrewmate = () => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [speed, setSpeed] = useState('');
  const navigate = useNavigate();

  const createCrewmate = async (e) => {
    e.preventDefault();
    
    if (!name || !color || !speed) {
        alert("Please fill in all fields!");
        return;
    }

    const { error } = await supabase
      .from('crewmates')
      .insert([{ name, color, speed }]);

    if (error) {
      console.error('Error creating crewmate:', error);
      alert('Failed to create crewmate.');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="form-page">
      <h1>Create a New Crewmate</h1>
      <form onSubmit={createCrewmate} className="crewmate-form">
        <div className="form-group">
          <label>Name</label>
          <input 
            type="text" 
            placeholder="Enter crewmate's name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label>Speed (mph)</label>
          <input 
            type="number" 
            placeholder="Enter speed"
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

        <button type="submit" className="btn-submit">Create Crewmate</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
