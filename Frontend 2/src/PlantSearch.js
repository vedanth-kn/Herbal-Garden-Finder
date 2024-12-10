import React, { useState } from 'react';
import axios from 'axios';

const PlantSearch = () => {
  const [symptoms, setSymptoms] = useState('');
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState('');

  const fetchPlants = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/plants?symptoms=${symptoms}`);
      setPlants(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchPlants();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="symptoms"><strong>Enter Symptoms (comma-separated):</strong></label>
          <input
            type="text"
            className="form-control"
            id="symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <div className="mt-3">
        {plants.length > 0 && (
          <div>
            <h3><strong>Results:</strong></h3>
            {plants.map((plant, index) => (
              <div key={index} className="card mb-2">
                <div className="card-body">
                  {/* Accessing fields with spaces using bracket notation */}
                  <h5 className="card-title"><strong>Medicinal Plant Name:</strong> {plant.medicinalPlantName}</h5>
                  <h6 className="card-subtitle mb-2 text-muted"><strong>Scientific Name:</strong> {plant.scientificName}</h6>
                  <p className="card-text"><strong>Usage:</strong> {plant.USAGE}</p>
                  <p className="card-text"><strong>No. of Dosage:</strong> {plant.noOfDosage}</p>
                  <p className="card-text"><strong>Symptoms:</strong> {plant.SYMPTOMS.join(', ')}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantSearch;
