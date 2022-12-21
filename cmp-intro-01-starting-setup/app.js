const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "julie",
          Name: "Julie Jones",
          Phone: "010 1111 2222",
          Email: "julie@localhost.com",
        },
        {
          id: "miguel",
          Name: "Miguel Lorenz",
          Phone: "010 2030 0303",
          Email: "miguel@localhost.com",
        },
      ],
    };
  },
});

app.component("contact-friend", {
  template: `
    <li v-for="friend in friends" :key="friend.id">
    <h2>{{ friend.Name }}</h2>
    <button @click="toggleDetails">
    {{visibleDetails ? 'Hide' : 'Show'}}
    Details</button>
    <ul v-if="visibleDetails">
      <li><strong>Phone : </strong>{{friend.Phone}}</li>
      <li><strong>Email : </strong>{{friend.Email}}</li>
    </ul>
  </li>
  `,
  data() {
    return {
      visibleDetails: false,
      friends: [
        {
          id: "julie",
          Name: "Julie Jones",
          Phone: "010 1111 2222",
          Email: "julie@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.visibleDetails = !this.visibleDetails;
    },
  },
});

app.mount("#app");
