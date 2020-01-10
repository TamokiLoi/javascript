new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startNewGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },

        attack: function () {
            // monsterHealth change by playerDamage
            var playerDamage = this.inputDamage(6, 12);
            this.monsterHealth -= playerDamage;

            // logs playerAttacks
            this.playerAttackLogs(playerDamage);

            // playerHealth change by monsterDamage
            this.monsterAttacks();
        },

        specialAttack: function () {
            // monsterHealth change by playerDamage
            var playerDamage = this.inputDamage(10, 20);
            this.monsterHealth -= playerDamage;

            // logs playerAttacks
            this.playerAttackLogs(playerDamage);

            // playerHealth change by monsterDamage
            this.monsterAttacks();
        },

        heal: function () {
            // playerHealth change by heal
            if (this.playerHealth <= 60) {
                this.playerHealth += 10;
            } else if (this.playerHealth > 70) {
                return false;
            } else {
                this.playerHealth = 70;
            }

            // logs player heal
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player heal for 10'
            });

            // playerHealth change by monsterDamage
            this.monsterAttacks();
        },

        giveUp: function () {
            this.gameIsRunning = false;
            this.optionPlayer('You lost! New game?', false);
        },

        monsterAttacks: function () {
            var monsterDamage = this.inputDamage(4, 11);
            this.playerHealth -= monsterDamage;

            // logs monsterAttacks
            this.turns.unshift({
                isPlayer: false,
                textLog: 'Monster hits Player for ' + monsterDamage
            });

            // checkPlayerOption
            this.checkPlayerOption();
        },

        inputDamage: function (minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },

        checkPlayerOption: function () {
            if (this.monsterHealth <= 0) {
                this.optionPlayer('You won! New game?', true);
            } else if (this.playerHealth <= 0) {
                this.optionPlayer('You lost! New game?', false);
            }
        },

        optionPlayer: function (message, isPlayerWon) {
            if (confirm(message)) {
                this.startNewGame();
            } else {
                if (isPlayerWon) {
                    this.monsterHealth = 0;
                } else {
                    this.playerHealth = 0;
                }
                this.gameIsRunning = false;
            }
        },

        playerAttackLogs: function(playerDamage) {
            this.turns.unshift({
                isPlayer: true,
                textLog: 'Player hits Monster for ' + playerDamage
            });
        }
    }
});