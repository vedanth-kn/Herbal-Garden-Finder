  // import React, { useState } from 'react';
  // import axios from 'axios';

  // const PlantSearch = () => {
  //   const [symptoms, setSymptoms] = useState('');
  //   const [plants, setPlants] = useState([]);
  //   const [error, setError] = useState('');

  //   const fetchPlants = async () => {
  //     try {
  //       const response = await axios.get(`http://localhost:3000/plants?symptoms=${symptoms}`);
  //       setPlants(response.data);
  //       setError('');
  //     } catch (err) {
  //       setError('Failed to fetch data');
  //       console.error(err);
  //     }
  //   };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     fetchPlants();
  //   };

  //   return (
  //     <div>
  //       <form onSubmit={handleSubmit}>
  //         <div className="form-group">
  //           <label htmlFor="symptoms"><strong>Enter Symptoms (comma-separated):</strong></label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="symptoms"
  //             value={symptoms}
  //             onChange={(e) => setSymptoms(e.target.value)}
  //           />
  //         </div>
  //         <button type="submit" className="btn btn-primary">Search</button>
  //       </form>
  //       {error && <div className="alert alert-danger mt-3">{error}</div>}
  //       <div className="mt-3">
  //         {plants.length > 0 && (
  //           <div>
  //             <h3><strong>Results:</strong></h3>
  //             {plants.map((plant, index) => (
  //               <div key={index} className="card mb-2">
  //                 <div className="card-body">
  //                   {/* Accessing fields with spaces using bracket notation */}
  //                   <h5 className="card-title"><strong>Medicinal Plant Name:</strong> {plant.medicinalPlantName}</h5>
  //                   <h6 className="card-subtitle mb-2 text-muted"><strong>Scientific Name:</strong> {plant.scientificName}</h6>
  //                   <p className="card-text"><strong>Usage:</strong> {plant.USAGE}</p>
  //                   <p className="card-text"><strong>No. of Dosage:</strong> {plant.noOfDosage}</p>
  //                   <p className="card-text"><strong>Symptoms:</strong> {plant.SYMPTOMS.join(', ')}</p>
  //                 </div>
  //               </div>
  //             ))}
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  // export default PlantSearch;



  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import 'bootstrap/dist/css/bootstrap.min.css';

  const PlantSearch = () => {
    const [allSymptoms, setAllSymptoms] = useState([]);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [plants, setPlants] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
      // Fetch all unique symptoms to display in the selection interface
      axios.get('http://localhost:3000/symptoms')
        .then(response => {
          // Assume the server sends back an array of unique symptoms
          setAllSymptoms([...new Set(response.data.symptoms)]);
        })
        .catch(error => {
          setError('Failed to fetch symptoms');
          console.error(error);
        });
    }, []);

    const fetchPlants = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/plants?symptoms=${selectedSymptoms.join(',')}`);
        setPlants(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      }
    };

    const toggleSymptomSelection = (symptom) => {
      if (selectedSymptoms.includes(symptom)) {
        setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
      } else {
        setSelectedSymptoms([...selectedSymptoms, symptom]);
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      fetchPlants();
    };

    return (
      <div>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="d-flex flex-wrap">
            {allSymptoms.map(symptom => (
              <div key={symptom} 
                  className={`p-2 m-1 badge ${selectedSymptoms.includes(symptom) ? 'badge-primary' : 'badge-secondary'}`}
                  style={{ cursor: 'pointer' }}
                  onClick={() => toggleSymptomSelection(symptom)}>
                {symptom}
              </div>
            ))}
          </div>
          <button type="submit" className="btn btn-success mt-3">Show Result</button>
        </form>
        {error && <div className="alert alert-danger">{error}</div>}
        <div>
          {plants.length > 0 && (
            <div>
              <h3>Results:</h3>
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
