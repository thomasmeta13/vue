const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path'); // Import the 'path' module
const Project = require('../models/Project');

app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Set the directory where files will be saved
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('photo'), async (req, res) => {
  const { title, description, name, bio, category } = req.body;
  const photo = req.file ? req.file.path : ''; // Get the file path

  try {
    const newProject = new Project({
      title, 
      description, 
      name, 
      bio, 
      category,
      photo // Add the photo path
    });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
