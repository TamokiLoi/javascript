<template>
  <div>
    <h3>Please select one user to manage</h3>
    <ul class="list-group">
      <router-link
        tag="li"
        :to="{ name: 'userdetail', params: { id: num } }"
        class="list-group-item"
        style="cursor: pointer;"
        v-for="num in 5"
        :key="num"
        >User {{ num }}</router-link
      >
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
