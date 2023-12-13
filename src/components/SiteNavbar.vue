<template>
  <nav class="navbar">
    <div class="logo">
      <h1>Builders Club</h1> <!-- Replace with your logo image if needed -->
    </div>
    <ul class="nav-menu">
      <li class="nav-item" v-for="item in menuItems" :key="item.text">
        <a href="#" class="nav-link">{{ item.text }}</a>
      </li>
    </ul>
    <div class="user-profile">
      <img src="https://media.licdn.com/dms/image/D4E03AQEF_0ioHFDh7w/profile-displayphoto-shrink_800_800/0/1700223735622?e=1707350400&v=beta&t=AWs5OCm2zNsoS1JWd_RmV1E8QvghxUj10qke2FSLLaY" alt="Profile" class="profile-image">
      <div class="side-name">
        <span class="username">Thomas M.</span>
        <div style="display:flex; margin-bottom: -5px"><img class="cal" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Seal_of_University_of_California%2C_Berkeley.svg/2048px-Seal_of_University_of_California%2C_Berkeley.svg.png'/>
        <p class="major">Econ 2025</p></div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavbar',
  data() {
    return {
      menuItems: [
        { text: 'Projects' },
        { text: 'Competitions' },
        { text: 'Clubs' },
        { text: 'Mentorships' },
      ],
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem; /* Adjusted padding */
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
  margin-top: -3.5%;
}

.logo h1 {
  font-size: 1.8rem; /* Adjusted font size */
  font-weight: bold; /* Added font weight */
  color: #333; /* Logo text color */
  margin: 0;
  display: inline; /* Logo and navbar on the same line */
}

.nav-menu {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem; /* Adjusted spacing between menu items */
  margin: 0; /* Removed margin */
}

.nav-item {
  margin: 0; /* Removed margin-left */
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-size: 1rem; /* Adjusted font size */
  font-weight:normal; /* Added font weight for bold text */
  transition: color 0.2s; /* Smooth transition for hover effect */
  padding: 1em;
}

.nav-link:hover {
  color: #1a1a1a; /* Color change on hover */
  font-weight: bold;
}

.user-profile {
  display: flex;
  align-items: center;
}

.username {
  font-size: 0.9rem; /* Adjusted font size */
  color: #333; /* Username text color */
  font-weight: bold; /* Added font weight */
  margin-right: 1.6rem; /* Space between username and major */
}

.side-name {
  display: flex;
  flex-direction: column; /* Stack name and major vertically */
  align-items: flex-end; /* Align to the end of the sidebar */
  margin-right: 6em;
}

.profile-image {
  width: 50px; /* Adjusted width */
  height: 50px; /* Adjusted height */
  border-radius: 50%;
  margin-right: 0.6rem; /* Space between image and name */
  border: 2px solid gray;
}

.major {
  font-size: 0.8rem; /* Adjusted font size */
  color: #6c757d; /* Adjusted color for the major */
  margin-right: 10px;
}

.cal {
  height: 28px;
  width: 28px;
  margin-right: 5px;
  margin-top: 6px;
}

</style>
