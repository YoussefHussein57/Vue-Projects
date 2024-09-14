const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addFive() {
      this.counter += 5;
    },
    addOne() {
      this.counter += 1;
    },
  },
  computed: {
    isTooMuch() {
      if (this.counter > 37) {
        return "Way Too Much!";
      } else if (this.counter < 37) {
        return "Not Enough!";
      } else {
        return this.counter;
      }
    },
  },
  watch: {
    counter(value) {
      const that = this;
      setTimeout(function () {
        that.counter = 0;
      }, 5000);
    },
  },
});

app.mount("#assignment");
