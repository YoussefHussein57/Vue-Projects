<template>
  <button
    :class="['base-button' , 'btn-animated', buttonSize, { disabled }]"
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
  background-color: #1ABC9C; /* Teal */
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 0.5em;
  text-transform: uppercase;
}

.base-button:hover {
  background-color: #16A085; /* Slightly darker teal */
  transform: translateY(-3px); /* Slight lift on hover */
  box-shadow: 0 10px 20px rgba(7, 133, 175, 0.2);
}

.base-button:active {
  transform: translateY(-1px);
}

.base-button.disabled {
  background-color: #aaa; /* Disabled state */
  cursor: not-allowed;
}
</style>
