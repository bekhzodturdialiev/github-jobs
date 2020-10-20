export default {
  methods: {
    debounce(func, delay) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }

      console.log("...started");
      const context = this;
      const args = arguments;

      this.timer = setTimeout(() => func.apply(context, args), delay);
      console.log("...done");
    }
  }
};
