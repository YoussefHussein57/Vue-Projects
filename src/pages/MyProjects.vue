<template>
  <div class="projects-container">
    <div class="projects">
      <!-- Loop through each project and display it in its own BaseCard -->
      <base-card v-for="(project, index) in projects" :key="project.title" class="project-item">
        <div class="project">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>

          <!-- Base Spinner that shows only when the image is loading -->
          <base-spinner v-if="loading[index]"></base-spinner>

          <!-- Image with load and error events -->
          <img 
            :src="project.image" 
            :alt="project.title + ' screenshot'" 
            class="screenshot"
            @load="loading[index] = false" 
            @error="loading[index] = false" 
            v-show="!loading[index]"
          >

          <base-button>
            <a :href="project.link" target="_blank">View Project</a>
          </base-button>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyProjects',
  data() {
    return {
      projects: [
        {
          title: 'AI-IOT System for PLC Controlled Factories',
          description: 'Monitoring System Application built with React.js.',
          link: 'https://github.com/YoussefHussein57/GP-FrontEnd.git',
          image: require('../assets/Ai-IoT/Img1.jpg') // Screenshot path
        },
        {
          title: 'Find a Coach',
          description: 'Coach finding app built with Vue.js and Firebase.',
          link: 'https://github.com/YoussefHussein57/Vue-Projects/tree/find-coach',
          image: require('../assets/Find A coach/Img1.jpg') // Screenshot path
        },
        {
          title: 'Monster Slayer Game',
          description: 'A game built with Vue.js to fight a monster in real-time.',
          link: 'https://github.com/YoussefHussein57/Vue-Projects/tree/monster-slayer-game',
          image: require('../assets/Monster Slayer/img1.jpg') // Screenshot path
        }
      ],
      loading: [] // Track the loading state of each project image
    };
  },
  created() {
    // Initialize the loading array with true values for each project
    this.loading = Array(this.projects.length).fill(true); // Ensure loading array matches projects length
  }
};
</script>

<style scoped>
.projects-container {
  padding: 2em;
  text-align: center;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.project {
  margin-bottom: 2em;
}

.project a {
  color: white;
  text-decoration: none;
}

.project-item {
  flex: 1 1 calc(33.333% - 20px); /* Each card takes up one-third of the row, with some margin */
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add smooth transition for transform and box-shadow */
}

.project-item:hover {
  transform: translateZ(10px) scale(1.05); /* Lift the card slightly and scale it up */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a more prominent shadow to enhance the lift effect */
}

.screenshot {
  margin-top: 1em;
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
}

/* Ensure that on smaller screens, the cards take up more space */
@media (max-width: 768px) {
  .project-item {
    flex: 1 1 calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .project-item {
    flex: 1 1 100%;
  }
}
</style>
