<template>
  <div>
    <h1>Page UserDetail</h1>
    <p>User with id: {{ id }}</p>
    <hr />
    <router-link tag="button" to="/user" class="btn btn-block btn-primary"
      >Back to list</router-link
    >
    <hr />
    <!-- <router-link
      tag="button"
      :to="{
        name: 'useredit',
        params: { id: id },
        query: { locate: 'vi', browser: 'chrome' }
      }"
      class="btn btn-block btn-warning"
      >Edit User</router-link
    > -->
    <router-link tag="button" :to="link" class="btn btn-block btn-warning"
      >Edit User</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      // get param id from url
      id: this.$route.params.id,
      link: {
        name: "useredit",
        params: { id: this.$route.params.id },
        query: {
          locate: "vi",
          browser: "chrome"
        },
        hash: "#react"
      }
    };
  },
  watch: {
    // check and watch change of id
    $route(to, from) {
      this.id = to.params.id;
    }
  },
  beforeRouteEnter(to, from, next) {
    if (true) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style></style>
