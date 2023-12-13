<template>
  <div id="app">
    <SiteNavbar />
    <div class="container">
      <!-- Show homepage content only if on the homepage route -->
      <template v-if="$route.path === '/'">
        <aside class="events-section">
          <EventBanner 
            v-for="event in thisWeeksEvents" 
            :key="event.id" 
            :event="event"
          />
        </aside>
        <section class="top-products">
          <h2>Top Projects</h2>
          <div class="products-list">
            <ProductCard 
              v-for="project in topProjects" 
              :key="project._id"
              :product="project" 
            />
          </div>
        </section>
        <section class="create-project-section">
          <CreateProject />
        </section>
      </template>

      <!-- Routed components will be displayed here -->
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import SiteNavbar from './components/SiteNavbar.vue';
import ProductCard from './components/ProductCard.vue';
// import EventCard from './components/EventCard.vue';
import CreateProject from './components/CreateProject.vue';
import EventBanner from './components/EventBanner.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SiteNavbar,
    ProductCard,
    // EventCard,
    CreateProject,
    EventBanner
  },
  data() {
    return {
      topProjects: [], // Initialize topProjects as an empty array
      thisWeeksEvents: [
        // Placeholder events data
        {
          id: 1,
          imageUrl: 'placeholder-image-url',
          rank: 1,
          date: 'Jan 1, 2023',
          title: 'Event Title',
          description: 'Event Description',
          userImage: 'placeholder-user-image-url',
          userName: 'Jane Doe',
        },
        // ... more events ...
      ],
    };
  },
  created() {
    // Fetch top projects data from your API
    axios.get(`${process.env.VUE_APP_API_URL}/api/projects`) // Use the correct API URL and "projects" collection
      .then(response => {
        // Update topProjects with the received data
        this.topProjects = response.data;
      })
      .catch(error => {
        console.error('Error fetching top projects:', error);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Change to a column layout */
  align-items: center; /* Center align items horizontally */
}

.create-project-section,
.top-products,
.events-section {
  width: 100%; /* Make all sections full-width */
}

.create-project-section {
  margin-bottom: 1rem; /* Add space between sections */
}

.top-products .products-list,
.events-section .events-list {
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
}

h2 {
  color: #333;
  text-align: left;
  margin-top: 0%;
}
</style>