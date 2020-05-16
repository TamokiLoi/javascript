<template>
  <div>
    <button class="btn btn-success" @click="increment">
      Increase value
    </button>
    <button class="btn btn-success" @click="asyncDecrement">
      Decrease value
    </button>
    <hr />
    <br />
    <!-- using biding 2 way by action in store -->
    <!-- <input type="text" :value="value" @input="updateValue" /> -->

    <!-- using biding 2 way by setter and getter in store -->
    <input type="text" v-model="value" />
    <p>Text test: {{ value }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  computed: {
    // using biding 2 way by action in store
    // value() {
    //   return this.$store.getters.value;
    // },

    // using biding 2 way by setter and getter in store
    value: {
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      }
    }
  },
  mounted() {
    //   let a;
      const a = this.$store.state.Result.result;
      console.log(a);
  },
  methods: {
    ...mapActions(["increment", "asyncDecrement"])

    // using biding 2 way by action in store
    // updateValue(event) {
    //   this.$store.dispatch("updateValue", event.target.value);
    // }
  }
};
</script>

<style></style>
