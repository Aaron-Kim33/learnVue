<template>
  <li>
    <h2>{{ name }} {{ favorite === "1" ? "(favorite)" : "" }}</h2>
    <button @click="isFavoriteToggle">FavoriteToggle</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ phoneNumber }}</li>
      <li><strong>Email:</strong>{{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "012 123 456",
        email: "manuel@localhost.com",
      },
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    isFavoriteToggle() {
      if (this.favorite === "1") {
        this.favorite = "0";
      } else {
        this.favorite = "1";
      }
    },
  },
};
</script>
