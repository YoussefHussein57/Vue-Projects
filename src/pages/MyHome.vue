<template>
    <base-card>
      <div class="home" v-if="loaded">
        <transition name="fade" mode="out-in">
          <div v-if="showImage" class="photo">
            <img :src="image" alt="My Photo" />
          </div>
        </transition>
        <transition name="fade" mode="out-in">
          <div v-if="showDetails" class="details">
            <h1>{{ name }}</h1>
            <transition name="fade" mode="out-in">
              <p v-if="showInfo" key="info">{{ info }}</p>
            </transition>
            <transition name="fade" mode="out-in">
              <div v-if="showAboutMe" key="about">
                <h2>About Me</h2>
                <p><strong>Education:</strong> {{ education }}</p>
                <p><strong>Experience:</strong></p>
                <ul>
                  <li v-for="job in experience" :key="job.id">
                    <strong>{{ job.company }}:</strong> {{ job.position }} ({{ job.duration }})
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </base-card>
  </template>
  
  <script>
  export default {
    name: 'MyHome',
    data() {
      return {
        name: 'Youssef Hussein',
        info: 'Software Engineer specializing in Vue.js and web development. Explore my projects, certifications, and learn more about me below!',
        image: require('@/assets/Me/MyPhoto.png'),
        education: "Bachelor's Degree in Communication and Electronics Engineering, Helwan University (2019-2024).",
        experience: [
          { id: 1, company: 'Timedoor Academy', position: 'Web Developer Instructor', duration: '2024 - Present' },
          { id: 2, company: 'Flairstech', position: 'IT Helpdesk', duration: 'July 2021 - October 2021' },
          { id: 3, company: 'Teleperformance', position: 'Customer Care Representative', duration: 'July 2022 - October 2022' }
        ],
        loaded: false,
        showImage: false,
        showDetails: false,
        showInfo: false,
        showAboutMe: false
      };
    },
    mounted() {
      setTimeout(() => {
        this.loaded = true;
        this.showImage = true;
        setTimeout(() => {
          this.showDetails = true;
          setTimeout(() => {
            this.showInfo = true;
            setTimeout(() => {
              this.showAboutMe = true;
            }, 1000);
          }, 1000);
        }, 500);
      }, 200);
    }
  };
  </script>
  
  <style scoped>
  .home {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .home-content {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  
  .photo {
    margin-right: 2em;
    flex-shrink: 0;
  }
  
  .details {
    max-width: 600px;
  }
  
  img {
    width: 300px;
    border-radius: 10px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave-to {
    opacity: 0;
  }
  </style>