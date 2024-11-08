<template>
  <div class="certificates">
    <ul>
      <base-card v-for="(cert, index) in certificates" :key="cert.title" class="certificate-item">
        <li>
          <!-- Base Spinner that shows only when the image is loading -->
          <base-spinner v-if="loading[index]"></base-spinner>

          <!-- Image with load and error events -->
          <img 
            :src="cert.image" 
            :alt="cert.cetAlt" 
            @load="loading[index] = false" 
            @error="loading[index] = false"
            v-show="!loading[index]" 
          >
          <strong>{{ cert.title }}</strong> 

          <base-button> 
            <a :href="cert.link" target="_blank">View Certificate</a>
          </base-button>
          <p>{{ cert.details }}</p>
        </li>
      </base-card>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserCertificates',
  data() {
    return {
      certificates: [
        {
          title: 'HTML and CSS',
          link: 'https://drive.google.com/file/d/1P4wYM6p01j_6bRiAeYGLu0NTH3j1D-8Q/view?usp=drive_link',
          details: 'I successfully completed this 7-hour course on May 31, 2022.',
          image: require('../assets/Certi/HTML and CSS.png'),
          cetAlt: 'HTML and CSS Certificate'
        },
        {
          title: 'JavaScript',
          link: 'https://drive.google.com/file/d/1wage2UYNZxSB4EusAE5OKemooSA0wqax/view?usp=drive_link',
          details: 'I successfully completed this 7-hour course on May 31, 2022.',
          image: require('../assets/Certi/JS.png'),
          cetAlt: 'JavaScript Certificate'
        },
        {
          title: 'The Vue Complete Guide',
          link: 'https://drive.google.com/file/d/1-lBJNqkZDJ2L0COVV4eF51knHcSJu9b9/view',
          details: 'I successfully completed this 32-hour course on October, 2024.',
          image: require('../assets/Certi/Vue.png'),
          cetAlt: 'Vue Certificate'
        },
        {
    title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    link: 'https://drive.google.com/file/d/1buhVSHzYssygxj1CAc-7XxpOFRmL198h/view?usp=sharing',
    details: 'I successfully completed this 28-hour course on November 8, 2024.',
    image: require('../assets/Certi/Advanced-CSS-and-SASS.jpg'),
    cetAlt: 'Advanced CSS and Sass Certificate'
}

      ],
      loading: [] // Track the loading state of each image
    };
  },
  created() {
    // Initialize the loading array with true values for each certificate
    this.loading = Array(this.certificates.length).fill(true); // Ensure loading array matches certificates length
  }
};

</script>

<style scoped>
.certificates {
  padding: 2em;
}

.certificates ul {
  list-style-type: none;
  display: flex; /* Flexbox for row layout */
  flex-wrap: wrap; /* Wrap items if there are too many to fit in one row */
  justify-content: space-between; /* Space between each card */
  padding: 0;
  margin: 0;
}

.certificate-item {
  flex: 1 1 calc(33.333% - 20px); /* Each card takes up one-third of the row, with some margin */
  margin: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add smooth transition for transform and box-shadow */
}

.certificate-item:hover {
  transform: translateZ(10px) scale(1.05); /* Lift the card slightly and scale it up */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a more prominent shadow to enhance the lift effect */
}

.certificates img {
  max-width: 100%;
  height: auto;
  margin-bottom: 1em;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.certificates strong {
  display: block;
  font-size: 1.2em;
  margin-top: 0.5em;
}

.certificates a {
  color: white;
  text-decoration: none;
}

/* Responsive layout: On smaller screens, reduce the number of items per row */
@media (max-width: 768px) {
  .certificate-item {
    flex: 1 1 calc(50% - 20px); /* Two items per row on tablet-sized screens */
  }
}

@media (max-width: 480px) {
  .certificate-item {
    flex: 1 1 100%; /* One item per row on mobile-sized screens */
  }
}
</style>
