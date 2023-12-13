const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer'); // Import multer here
const path = require('path'); // Import path module here
const Project = require('./models/Project'); // Path to your Project model

const app = express();

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(cors());

// Step 2: Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the directory where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Step 3: Modify the POST Route
// Modify the POST Route
app.post('/api/projects', upload.single('photo'), async (req, res) => {
    const { title, description, name, bio, category } = req.body;
    const photo = req.file ? req.file.path : ''; // Path to the uploaded file
  
    try {
      const newProject = new Project({
        title, 
        description, 
        name, 
        bio, 
        category,
        photo // Include the photo path
      });
      const savedProject = await newProject.save();
  
      // Send the image URL/path as part of the response
      res.status(201).json({ ...savedProject._doc, photo }); // Include the photo in the response
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: error.message });
    }
});  

app.get('/api/projects', async (req, res) => {
    try {
      const projects = await Project.find(); // Use the correct model "Project" to fetch data
      res.status(200).json(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        res.status(500).json({ error: 'Internal server error' });    
    }
});
  
  
mongoose.connect('mongodb://localhost:27017/projects', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));

// Define a simple route for testing
app.get('/', (req, res) => res.send('Hello from Backend'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
