<template>
  <div class="product-page">
    <!-- Product Header with Background Image -->
    <div class="product-header">
        <img class="product-logo" src="https://i.ibb.co/syrnr55/DALL-E-2023-11-07-23-00-39-Design-a-captivating-banner-for-the-product-launch-of-a-futuristic-solarp.png"/>
      <h1 class="product-title">Focus Cube</h1>
      <p class="product-description">The ultimate gadget to hack your brain</p>
      <div class="category">
            <div class="product-category-class">ENG183E</div>
            <div class="product-category-members"> <i class="fas fa-users"></i>45</div>
        </div>

      <!-- Product Tags here -->
      <!-- ... -->
    </div>

    <!-- Main Content Area -->
    <div class="content-area">
      <!-- Sidebar Content -->
      <!-- Main Content -->
      <div class="main-content">
        <!-- Tabs for Overview, Bounties, etc. -->
        <ul class="nav-tabs">
          <li 
            class="tab-item" 
            :class="{ 'active': activeTab === 'overview' }"
            @click="activeTab = 'overview'">Overview
            </li>
            <li 
            class="tab-item" 
            :class="{ 'active': activeTab === 'bounties' }"
            @click="activeTab = 'bounties'">Bounties
            </li> 
            <li 
            class="tab-item" 
            :class="{ 'active': activeTab === 'members' }"
            @click="activeTab = 'members'">Members</li>
            <li 
            class="tab-item" 
            :class="{ 'active': activeTab === 'forum' }"
            @click="activeTab = 'forum'">Forum</li>


          <!-- ... -->
        </ul>
        <!-- Tab Content -->
        <div class="tab-content" v-if="activeTab === 'overview'">
          <p>Here are two visual concepts for a modernized user interface segment of a Kaggle-like
            competition page. They incorporate the design elements you described, like the grid 
            layout, card design, and fixed navigation bar with flat icons.
            </p>
            <div class="image-gallery">
              <img src="https://i.etsystatic.com/37276452/r/il/0e30c7/4822452597/il_570xN.4822452597_h3kt.jpg" alt="Image 1" class="img1">
              <div class="side-gallery">
                <img src="https://i.ibb.co/dfbC4GD/DALL-E-2023-11-07-23-01-23-Design-a-captivating-banner-for-the-product-launch-of-a-futuristic-solarp.png" alt="Image 2" class="img2">
                <img src="https://i.ibb.co/MZvKwtM/DALL-E-2023-11-07-23-02-39-Design-a-sleek-horizontal-banner-for-the-advertising-campaign-of-a-futuri.png" alt="Image 3" class="img3">
              </div>
            </div>

          <!-- ... -->
        </div>
        <div class="tab-content" v-if="activeTab === 'bounties'">
          <p>Here are two visual concepts for a modernized user interface segment of a Kaggle-like
            competition page. They incorporate the design elements you described, like the grid 
            layout, card design, and fixed navigation bar with flat icons.
            </p>
        <div class="bounty-controls">
          <button class="filter-button" v-for="category in categories" :key="category" @click="selectedCategory = category">
            {{ category }}
          </button>
          <button class="new-task-button" @click="proposeNewTask">+ Propose a New Task</button>
        </div>

          <div class="bounties-container">
            <!-- Columns for different bounty statuses -->
            <div class="bounty-column" v-for="status in bountyStatuses" :key="status.name">
              <h3 class="column-title">{{ status.name }}</h3>
              <div class="bounty-card" v-for="bounty in filteredBounties(status.bounties)" :key="bounty.id">
                      <!-- Bounty Cards -->
                <div class="bounty-card" v-for="bounty in status.bounties" :key="bounty.id">
                  <h4 class="bounty-title">{{ bounty.title }}</h4>
                  <p class="bounty-description">{{ bounty.description }}</p>
                  <!-- Add more bounty details here -->
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tab-content" v-if="activeTab === 'members'">
          <p>Members content...</p>
        </div>
        <div class="tab-content" v-if="activeTab === 'forum'">
          <p>Forum content...</p>
        </div>

      </div>
  <div class="sidebar" v-if="activeTab !== 'bounties'">
    <div class="sidebar-section">
      <div class="tags-container">
        <div class="tag">ADHD</div>
        <div class="tag">Hardware</div>
      </div>
    </div>

  <div class="sidebar-section latest-contributors">
    <h3 class="sidebar-title">Latest Contributors</h3>
    <ul class="contributors-list">
      <li class="contributor" v-for="contributor in latestContributors" :key="contributor.id">
        <img :src="contributor.photo" alt="Contributor" class="contributor-photo">
        <div class="contributor-info">
          <span class="contributor-name">{{ contributor.name }}</span>
          <span class="contributor-contribution">{{ contributor.contribution }}</span>
        </div>
      </li>
    </ul>
  </div>

    <div class="sidebar-section">
      <h3 class="sidebar-title">Events</h3>
      <div class="event">
        <div class="event-name">General Meeting</div>
        <div class="event-details">
            Join to Learn More
          <div><div class="event-role">🗓️ 13/08</div>
         <div class="event-role">📍Dwinelle 104</div></div>

        </div>
      </div>
      <!-- ... additional events ... -->
    </div>
  </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      selectedCategory: 'all', // Default to 'all' or the first category in your list
      categories: ['all', 'design', 'hardware', 'coding', 'marketing'], // Add all your categories here
      activeTab: 'overview', // Default active tab
      latestContributors: [
        // Sample data, replace with your actual data
        {
          id: 1,
          name: 'Katie Yip',
          contribution: 'Developed website',
          photo: 'https://media.licdn.com/dms/image/D5603AQGGTgtckD1_Yg/profile-displayphoto-shrink_800_800/0/1692661797522?e=1707955200&v=beta&t=-Jabywh78BdXUe_cs2Zd4O3-ksTQQlADjcCd0w_fz54',
        },
        {
          id: 2,
          name: 'Thomas Meta',
          contribution: 'Assisted the Data',
          photo: 'https://media.licdn.com/dms/image/D4E03AQEF_0ioHFDh7w/profile-displayphoto-shrink_800_800/0/1700223735622?e=1707350400&v=beta&t=AWs5OCm2zNsoS1JWd_RmV1E8QvghxUj10qke2FSLLaY',
        },
        // Add more contributors here...
      ],
      bountyStatuses: [
  {
    name: 'To Do',
    bounties: [
      {
        id: 1,
        title: 'Design Homepage Layout',
        description: 'Create a responsive homepage design.',
        tags: ['design', 'frontend'],
      },
      {
        id: 2,
        title: 'Database Optimization',
        description: 'Optimize the database for faster queries.',
        tags: ['backend', 'database'],
      },
    ],
  },
  {
    name: 'In Progress',
    bounties: [
      {
        id: 3,
        title: 'API Development',
        description: 'Develop RESTful API endpoints.',
        tags: ['backend', 'api'],
      },
    ],
  },
  {
    name: 'In Review',
    bounties: [
      {
        id: 4,
        title: 'Testing Authentication Flow',
        description: 'Perform tests on the new authentication flow.',
        tags: ['testing', 'security'],
      },
    ],
  },
  {
    name: 'Done',
    bounties: [
      {
        id: 5,
        title: 'User Feedback Feature',
        description: 'Implement user feedback feature and integrate with backend.',
        tags: ['frontend', 'backend', 'ux'],
      },
    ],
  },
],

    };
  },
  methods: {
    filteredBounties(bounties) {
      if (this.selectedCategory === 'all') {
        return bounties;
      }
      return bounties.filter(bounty => bounty.tags.includes(this.selectedCategory));
    },
    proposeNewTask() {
      // Handle the action for proposing a new task
      console.log('Propose new task clicked');
    },
  },

  // ... other options ...
};
</script>



<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css');

.product-page {
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
  width: 100%;
}

.product-header {
background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  ), url('https://i.ibb.co/9r7PnC0/Screenshot-2023-11-07-at-11-02-2.png') center center no-repeat;
  background-size: cover;
  background-size: cover;
  color: white;
  margin-top: -1.5%;
  padding-left: 10rem;
    margin-left: -15%;
    width: 120%;
  position: relative;
  height: 19em;
  display: flex;
  justify-content: left;
}

.product-title {
  font-size: 2rem;
  margin-bottom: 3.5rem;
  position: absolute;
  margin-left: 3.5em; /* Align to the right */
  bottom: 0; /* Align to the bottom */
}
.product-description {
    position: absolute;
  margin-left: 7em; /* Align to the right */
  margin-top: 15.5%; /* Align to the bottom */
  color: #DFDFDF;
}
.product-category-class {
    background: #D9D9D9;
    height: 7%;
    border-radius: 0.5em;
    padding:6%;
    color:rgb(53, 53, 53);
    border: 1px solid #777;
    font-weight: 500;
    width: 100%;
    margin-bottom: 1em;
}
.product-category-members {
    background: #D9D9D9;
    height: 7%;
    border-radius: 0.5em;
    padding:6%;
    color:rgb(53, 53, 53);
    border: 1px solid #777;
    font-weight: 500;
    width: 80%;
    
}

.image-gallery {
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); /* Adjust as needed */
  gap: 10px;
  /* Styles for the image gallery */
}

.content-area {
  display: flex;
  grid-template-columns: 250px 1fr;
  gap: 1rem;
  padding: 1rem;
  margin-top: 0rem;
}

.sidebar {
  width: 70%; /* Adjust the width as needed */
  border-left: 1px solid #eaeaea; /* Left border for separation */
  padding: 1rem;
  font-family: 'Space Grotesk', sans-serif;
  margin-right: -15%;
  
}

.sidebar-section {
  margin-bottom: 2rem;
}

.sidebar-title {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: #333;
}

.challenge-container, .tags-container, .event {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: .6rem;
}

.challenge-container, .event {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: #a6aaa6;
  display: inline;
}
.challenge-badge {
  background-color: #4CAF50; /* Example badge color */
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  text-align: center;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.challenge-info {
  display: flex;
  flex-direction: column;
}

.challenge-name {
  font-weight: bold;
}

.challenge-category {
  font-size: 0.8rem;
  color: #777;
}

.tag {
  background-color: #f0f0f0;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-right: 0rem;
  font-size: 0.9rem;
  border:#333 1px solid;
}

.event-name {
  font-weight: bold;
  flex-grow: 1;
  background: rgb(194, 186, 186);
  width: 80%;
  border-radius: 30px 30px 0 0%;
  padding: 0.3em;
  text-align: center;
  margin-left: 1.3em;
}

.event-details {
  display: flex;
  align-items: center;
  margin-left: 1.3em;
  gap: 0.5rem;
  padding: 0.3em;
  background: rgb(235, 229, 229);
  width: 72.9%;
  height: 4em;
    border-radius: 0px 0px 30px 30px;
    padding-left: 2em;
}

.event-points {
  background-color: #ffdd57; /* Example points color */
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 50%;
  font-size: 0.9rem;
}

.event-role {
  font-size: 0.8rem;
  color: #777;
}

.main-content {
  background: white;
    flex-grow: 1;
  padding: 1rem;
  /* Add more styles */
}

.nav-tabs {
  list-style: none;
  padding: 0;
  margin-top: 1%;
  margin-left: 0;
  display: flex;
  gap: 5rem;
  margin-bottom: -.5%;
  font-size: 1.5rem;
    font-family: 'Space Grotesk', sans-serif; /* Apply Space Grotesk font */
  /* Add more styles */
}

.tab-item {
  padding: 0.5rem 1.5rem;
  margin-left: -6.5%;
  cursor: pointer;
  /* Add more styles */
}

.tab-content {
  margin-top: 1rem;
  width: 100%;
  text-align: left;
  margin-left: -4%;
  /* Add more styles */
}

.tab-item.active {
  font-weight: bold; /* Make the active tab bold */
}

/* Style for non-active tabs to make them less prominent, if desired */
.tab-item:not(.active) {
  opacity: 0.7; 
}

.img1 {
    width: 30em;
    height: 21em;
}

.img2 {
    width: 25em;
    height: 10.5em;
}

.img3 {
    width: 25em;
    height: 10.2em;
}

.product-logo {
    height: 5.5em;
    width: 6%;
      top: 50%;
  transform: translateY(220%);

}
.product-category-members .fas {
    padding:4%;
    margin-left: -10%;
    margin-right: 10%;
}
.category {
    padding: 1em;
    position: absolute;
    right: 10em;
    bottom: 1em;
}
.latest-contributors {
  padding: 0rem;
  border-radius: 10px;
  margin-top: 2rem; /* Space from the previous section */
}

.contributors-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.contributor {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  background: #f9f9f9; /* Light grey background */
  padding: 0.8rem;
  border-radius: 10px;
}

.contributor-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.contributor-info {
  display: flex;
  flex-direction: column;
}

.contributor-name {
  font-weight: bold;
  color: #333;
  text-align: left;
}

.contributor-contribution {
  font-size: 0.8rem;
  color: #6c757d;
}


/* Styles for the Bounties Container */
.bounties-container {
  display: flex;
  justify-content: space-between;
}

/* Styles for each Bounty Column */
.bounty-column {
  flex: 1;
  margin-right: 1rem;
  background-color: #1f1f1f;
  border-radius: 6px;
  color: white;
  padding: 1rem;
}

.column-title {
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid grey;
  margin-bottom: 1rem;
}

/* Styles for each Bounty Card */
.bounty-card {
  background-color: #333;
  border-radius: 6px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.bounty-title {
  font-weight: bold;
}

.bounty-description {
  font-size: 0.9rem;
}

  .bounty-controls {
    display: flex;
    justify-content: start;
    margin-bottom: 1rem;
    padding: 0 1rem; /* Align padding with the other content */
  }

  .filter-button {
    background-color: #eaeaea; /* A neutral color that fits the theme */
    border: 1px solid #ccc; /* A light border to define the button edges */
    border-radius: 20px; /* Rounded corners */
    padding: 0.5rem 1rem; /* Comfortable padding */
    font-family: 'Space Grotesk', sans-serif; /* Consistent font */
    font-size: 0.9rem; /* Slightly smaller font size for the buttons */
    cursor: pointer; /* Cursor to indicate it's clickable */
    transition: all 0.3s; /* Transition for a hover and active state effect */
    margin-right: 0.3rem; /* Reduced space between buttons */
    color: #333; /* Default text color */
  }

  .filter-button:hover,
  .filter-button.active {
    background-color: #333; /* Dark background for hover and active state */
    color: white; /* White text for contrast */
    border-color: #333; /* Matching border color */
  }

  .new-task-button {
    background-color: #4CAF50; /* A green color to stand out */
    border: none; /* No border for this button */
    border-radius: 20px; /* Consistent rounded corners */
    padding: 0.5rem 1rem; /* Same padding as filter buttons */
    font-family: 'Space Grotesk', sans-serif; /* Consistent font */
    color: white; /* Text color for readability */
    cursor: pointer; /* Cursor for clickable indication */
    transition: background-color 0.3s; /* Transition for a hover effect */
    margin-left: auto; /* Push the button to the right */
  }

  .new-task-button:hover {
    background-color: #45a049; /* Slightly darker green on hover */
  }</style>
