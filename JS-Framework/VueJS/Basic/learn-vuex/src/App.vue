<template>
  <div class="container">
    <h1>Vuex Section</h1>
    <hr />

    <app-result />
    <hr />
    <app-other />
    <br />
    <app-counter />
  </div>
</template>

<script>
import Counter from "./components/Counter";
import Result from "./components/Result";
import Other from "./components/Other";

export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    appOther: Other
  }
};
</script>

<style></style>
