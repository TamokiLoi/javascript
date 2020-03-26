<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 offset-xm-2 col-md-6 offset-dm-3">
      <h3>Filter Products from List</h3>
      <button class="btn btn-block btn-danger" @click="products.push('List')">Add New Item</button>
      <input type="text" class="form-control mb-md-3 mt-md-3" v-model="filterProduct" />
      <div class="card">
        <div class="card-body">
          <ul>
            <li v-for="(item, index) in filteredProducts" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productMixin } from "./productMixin";

export default {
  created() {
    console.log("created in list component");
  },
  mixins: [productMixin]
};
</script>

<style></style>
