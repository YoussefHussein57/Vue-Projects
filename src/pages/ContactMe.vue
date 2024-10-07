<template>
  <base-card>
    <div class="contact">
      <h1>Contact Me</h1>

      <div class="icon-container">
        <!-- Facebook Icon -->
        <a :href="facebook" target="_blank" class="icon">  
          <font-awesome-icon :icon="['fab', 'facebook']" class="icon-size" /> 
        </a>

        <!-- Envelope Icon -->
        <a :href="'mailto:' + email" target="_blank" class="icon"> 
          <font-awesome-icon :icon="['far', 'envelope']" class="icon-size" /> 
        </a>

        <!-- LinkedIn Icon -->
        <a :href="linkedin" target="_blank" class="icon">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="icon-size" />
        </a>
      </div>

      <p>
        <font-awesome-icon :icon="['fas', 'phone']" />
        Phone: {{ phoneNumber }} 
      </p>
      <p>
        <font-awesome-icon :icon="['fas', 'location']" />
        Location: {{ location }} 
      </p>  
    </div>
  </base-card>
</template>

<script>
import BaseCard from '@/components/BaseCard.vue';

export default {
  components: { BaseCard },
  name: 'ContactMe',
  data() {
    return {
      phoneNumber: '01012744633',
      location: 'Cairo , Egypt',
      email: 'yhi1612000@gmail.com',
      facebook: 'https://www.facebook.com/profile.php?id=100009016058660',
      linkedin: 'https://www.linkedin.com/in/youssef-hussein-106108299/',
    };
  }
};
</script>

<style scoped>
.contact {
  padding: 2em;
}

.icon-container {
  display: flex;
  justify-content: flex-start;
  max-width: 250px;
  margin: 1.5em 1em;
}

/* Enlarge the font-awesome icons */
.icon-size {
  font-size: 2.5rem; /* Adjust the icon size here */
  color: #333;
  transition: color 0.3s ease;
}

.icon{
  margin: 0 15px 0 0;
}
p{
  font-weight: bolder;
}
/* Change color on hover */
.icon:hover .icon-size {
  color: #357ABD; /* Darker blue on hover */
}
</style>
