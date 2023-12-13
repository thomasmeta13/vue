<template>
  <div class="create-project">
    <h1>Create a New Project</h1>
    <form @submit.prevent="submitProject" class="project-form">
      <div class="form-group">
        <label for="title">Project Title</label>
        <input v-model="title" id="title" type="text" placeholder="Enter Project Title" />
      </div>
      <div class="form-group">
        <label for="description">Project Description</label>
        <textarea v-model="description" id="description" placeholder="Enter Project Description"></textarea>
      </div>
      <div class="form-group">
        <label for="name">Your Name</label>
        <input v-model="name" id="name" type="text" placeholder="Enter Your Name" />
      </div>
      <div class="form-group">
        <label for="bio">Your Bio</label>
        <textarea v-model="bio" id="bio" placeholder="Enter Your Bio"></textarea>
      </div>
      <div class="form-group">
        <label for="category">Select a Category</label>
        <select v-model="category" id="category">
          <option disabled value="">Select a Category</option>
          <option>ENG183E</option>
          <option>Hackathon</option>
          <option>Fun</option>
          <option>Research</option>
        </select>
      </div>
      <div class="form-group">
        <label for="photo">Upload Photo</label>
        <input type="file" @change="onFileChange" id="photo" />
      </div>
      <button type="submit" class="submit-button">Create Project</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      description: '',
      name: '',
      bio: '',
      category: '',
      photo: null // Use null for photo initially
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.photo = file;
    },
    async submitProject() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('description', this.description);
      formData.append('name', this.name);
      formData.append('bio', this.bio);
      formData.append('category', this.category);
      formData.append('photo', this.photo); // Append the file to the FormData

      try {
        const response = await axios.post(`${process.env.VUE_APP_API_URL}/api/projects`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Project created:', response.data);
        // Reset form or handle success here
      } catch (error) {
        console.error('Error creating project:', error);
        // Handle error here
      }
    }
  }
};
</script>

<style scoped>
.create-project {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.project-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.submit-button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>