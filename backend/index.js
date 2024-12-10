const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 5000;

// MongoDB connection string
const MONGO_URI = 'mongodb+srv://knvedanth:Varun9317@cluster0.vzc8z.mongodb.net/HerbalGardenDB?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  const PlantSchema = new mongoose.Schema({
    medicinalPlantName: String,  
    scientificName: String,      
    usage: String,
    noOfDosage: String,      
    SYMPTOMS: [String]
  }, { collection: 'plants' });
const Plant = mongoose.model('Plant', PlantSchema);

app.use(express.json());

// Route to get plants by one or multiple symptoms
app.get('/plants', async (req, res) => {
    const { symptoms } = req.query;  // Expect symptoms as a comma-separated string
    const symptomList = symptoms.split(',');

    try {
        const plants = await Plant.find({ SYMPTOMS: { $in: symptomList } });
        res.json(plants);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to get all symptoms
app.get('/symptoms', async (req, res) => {
    try {
        const plants = await Plant.find({});
        const symptomsList = plants.map(plant => plant.SYMPTOMS).flat();
        res.json({ symptoms: symptomsList });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
