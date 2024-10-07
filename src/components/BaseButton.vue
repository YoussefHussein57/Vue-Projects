<template>
  <button
    :class="['base-button', buttonSize, { disabled }]"
    :type="type"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot></slot> <!-- Allows custom button content -->
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button', // Default button type
    },
    disabled: {
      type: Boolean,
      default: false, // Disables the button if true
    },
    buttonSize: {
      type: String,
      default: 'medium', // Options: 'small', 'medium', 'large'
    },
  },
  methods: {
    handleClick(event) {
      // Emit a click event if the button isn't disabled
      if (!this.disabled) {
        this.$emit('click', event);
      }
    },
  },
};
</script>

<style scoped>
/* Base button styles */
.base-button {
  display: inline-block;
  padding: 0.75em 1.5em;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.5em ;
}

.base-button:hover {
  background-color: #141414;
  transform: translateY(-2px); /* Slight lift on hover */
}

.base-button:active {
  transform: translateY(0);
}

.base-button.disabled {
  background-color: #aaa; /* Gray out when disabled */
  cursor: not-allowed;
}

/* Button size variations */
.base-button.small {
  padding: 0.5em 1em;
  font-size: 0.8rem;
}

.base-button.large {
  padding: 1em 2em;
  font-size: 1.2rem;
}
</style>
