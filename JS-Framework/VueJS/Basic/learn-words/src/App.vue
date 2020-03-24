<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <app-card card-words="cat">
            <h2 slot="title">{{ cardTitle }}</h2>
            <p>White cat is so noob!</p>
          </app-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./components/Card";

export default {
  data() {
    return {
      cardTitle: 'White cat'
    }
  },
  components: {
    appCard: Card
  }
};
</script>

<style scoped>
</style>