<template>
  <div>
    <h1>User Edit</h1>
    <p>User Info Client:</p>
    <ul>
      <li>Locate: {{ $route.query.locate }}</li>
      <li>Browser: {{ $route.query.browser }}</li>
    </ul>
    <hr />
    <router-link
      tag="button"
      :to="{ name: 'userdetail', params: { id: $route.params.id } }"
      class="btn btn-block btn-info"
      >Back to list</router-link
    >
    <hr />
    <button class="btn btn-block btn-danger" @click="status = !status">
      Something
    </button>
    <hr />
    <div style="height: 700px;"></div>
    <h3 id="react">Learn React with Tamoki</h3>
    <div style="height: 1700px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.status) {
      next();
    } else {
      if (confirm("Are you sure? Any data will not save!!!")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style></style>
