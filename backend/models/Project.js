const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: { type: String, required: true },
    description: { type: String, required: true },
    name: { type: String, required: true },
    bio: { type: String, required: true },
    category: { type: String, required: true, enum: ['ENG183E', 'Hackathon', 'Fun', 'Research'] },
    photo: String,
    createdAt: { type: Date, default: Date.now }
    
});  

// Use 'projectSchema' here, not 'ProjectSchema'
const Project = mongoose.model('Project', projectSchema);

module.exports = Project;