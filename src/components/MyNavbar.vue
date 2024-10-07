<template>
  <header>
    <nav class="navbar">
      <h1>My Portfolio</h1>
      <ul>
        <li><router-link to="/"> Home </router-link></li>
        <li><router-link to="/my-projects"> Projects </router-link></li>
        <li><router-link to="/my-certificates"> Certificates </router-link></li>
        <li><router-link to="/contact-me"> Contact Me </router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'MyNavbar',
};
</script>

<style scoped>
/* Ensure the header takes full width and height */
header {
  width: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0; /* Add some padding for better spacing */
}

/* Ensure the nav inside the header also takes full width */
header nav {
  width: 100%; /* Full width on all screens */
  max-width: 1200px; /* Max width for larger screens */
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem; /* Padding to prevent content from touching the edges */
}

/* Styling for the navigation links */
header a {
  text-decoration: none;
  color: #e0dbdf;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid skyblue;
}

/* Styling for the title */
h1 {
  color: #e0dbdf;
  margin: 0;
  font-size: 1.5rem; /* Adjust font size */
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}

/* Media query for smaller screens to adjust layout */
@media (max-width: 768px) {
  header nav {
    flex-direction: column;
    align-items: center;
  }

  header ul {
    flex-direction: column;
    align-items: center;
  }

  li {
    margin: 0.5rem 0;
  }
}
</style>
