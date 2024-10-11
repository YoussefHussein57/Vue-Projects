<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  background-color: #F8F9F9;
  color: #2C3E50;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add smooth transition for transform and box-shadow */
  animation: moveInBottom .3s ease-out;
}


.card:hover {
  transform: translateZ(10px) scale(1.05); /* Lift the card slightly and scale it up */
  box-shadow: 0 8px 16px rgba(220, 217, 217, 0.2); /* Add a more prominent shadow to enhance the lift effect */
}

@keyframes moveInBottom {
  0%{
    opacity:0;
    transform: translateY(-50px)
  }
  80%{
    transform: translateY(10px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>