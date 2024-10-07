<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add smooth transition for transform and box-shadow */
}


.card:hover {
  transform: translateZ(10px) scale(1.05); /* Lift the card slightly and scale it up */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a more prominent shadow to enhance the lift effect */
}
</style>