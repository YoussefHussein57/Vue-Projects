const app = Vue.createApp({
  data() {
    return {
      enteredTasks: [],
      newTask: "",
      showList: true,
    };
  },
  methods: {
    addTask() {
      this.enteredTasks.push(this.newTask);
    },
    removeTask(idx) {
      this.enteredTasks.splice(idx, 1);
    },
    isShown() {
      this.showList = !this.showList;
    },
  },
});

app.mount("#assignment");
