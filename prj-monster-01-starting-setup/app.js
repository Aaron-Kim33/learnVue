function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      battleLog: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // draw
        this.winner = "draw";
      } else if (value <= 0) {
        // monster win
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        //draw
        this.winner = "draw";
      } else if (value <= 0) {
        //player win
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyle() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyle() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.battleLog = [];
    },
    attackMonster() {
      this.currentRound++;
      const attack = randomValue(5, 12);
      this.monsterHealth -= attack;
      this.addBattleLog("player", "attack", attack);
      this.attackPlayer();
    },
    attackPlayer() {
      const attack = randomValue(8, 15);
      this.addBattleLog("monster", "attack", attack);
      this.playerHealth -= attack;
    },
    specialAttackMonster() {
      this.currentRound++;
      const attack = randomValue(10, 25);
      this.monsterHealth -= attack;
      this.addBattleLog("player", "special-attack", attack);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const heal = randomValue(8, 20);
      if (this.playerHealth + heal > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += heal;
      }
      this.addBattleLog("player", "heal", heal);
      this.attackPlayer();
    },
    surrender() {
      this.winner = "monster";
    },
    addBattleLog(who, what, value) {
      this.battleLog.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

app.mount("#game");
