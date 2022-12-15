function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      const attack = randomValue(5, 12);
      this.monsterHealth -= attack;
      this.attackPlayer();
    },
    attackPlayer() {
      const attack = randomValue(8, 15);
      this.playerHealth -= attack;
    },
  },
});

app.mount("#game");
