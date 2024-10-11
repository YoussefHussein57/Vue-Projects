<template>
  <transition name="fade" mode="out-in">
    <base-card>
      <div class="home" v-if="loaded">
        <transition name="slide-x" mode="out-in">
          <div v-if="showImage" class="photo">
            <img :src="image" alt="My Photo" />
          </div>
        </transition>
        <transition name="slide-x" mode="out-in">
          <div v-if="showDetails" class="details">
            <h1>{{ name }}</h1>
            <transition name="slide-x" mode="out-in">
              <p v-if="showInfo" key="info">{{ info }}</p>
            </transition>
            <transition name="slide-x" mode="out-in">
              <div v-if="showAboutMe" key="about" class="about">
                <h2>About Me</h2>
                <p><strong>Education:</strong> {{ education }}</p>
                <p><strong>Experience:</strong></p>
                <ul>
                  <li
                    v-for="(job, index) in experience"
                    :key="job.id"
                    :style="{ animationDelay: `${index * 0.6}s` }" 
                    class="animated-list-item"
                  >
                    <strong>{{ job.company }}:</strong> {{ job.position }} ({{ job.duration }})
                  </li>
                </ul>
                
              </div>
            </transition>
          </div>
        </transition>
      </div>
    </base-card>
  </transition>
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
  created() {
    setTimeout(() => {
      this.loaded = true;
      this.showImage = true;
      setTimeout(() => {
        this.showDetails = true;
        setTimeout(() => {
          this.showInfo = true;
          setTimeout(() => {
            this.showAboutMe = true;
          }, 1000); // About Me section delayed by 1 second
        }, 1000); // Info section delayed by 1 second
      }, 500); // Details section delayed by 0.5 second
    }, 200); // Initial delay before the first animation
  }
};
</script>

<style scoped>
.home {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.home-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

@media (min-width: 768px) {
  .home-content {
    flex-direction: row;
    align-items: flex-start;
  }
}

.photo {
  margin-bottom: 1em;
  flex-shrink: 0;
  animation: moveInLeft 2s ease-out;
}

@media (min-width: 768px) {
  .photo {
    margin-right: 2em;
    margin-bottom: 0;
  }
}

.details {
  max-width: 600px;
  animation: moveInLeft 2s ease-out;
}

.about {
  animation: moveInLeft 2s ease-out;
}

img {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}
.animated-list-item {
  opacity: 0; /* Initially invisible */
  animation: fadeInUp 0.6s ease forwards; /* Animation for each item */
}


.slide-x-enter-active, .slide-x-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.slide-x-enter {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-x-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter {
  opacity: 0;
}

.fade-leave-to {
  opacity: 0;
}


@keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
