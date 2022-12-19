const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // 기존 @input에 접근하는 방식 :
      //this.message = this.currentUserInput;
      // ref로 접근하는 방식
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
    // 검사창 - Source - app.js - 라인을 클릭하면 pause를 걸 수 있음.
    // 각 console 마다 퍼즈를 걸어서 확인해볼 수 있다.
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("Unmount");
  },
  unmounted() {
    console.log("unmounted");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);
