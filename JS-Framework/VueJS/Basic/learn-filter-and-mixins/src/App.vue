<template>
  <div class="container">
    <!-- <div class="row">
      <div class="col-xs-12 col-sm-8 offset-xm-2 col-md-6 offset-dm-3">
        <h1>Filter & Mixins</h1>
        <p>{{ text | toLowerCase | toUpperCase }}</p>
      </div>
    </div> -->

    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-xm-2 col-md-6 offset-dm-3">
        <h3>Filter Products from App</h3>
        <button class="btn btn-block btn-success" @click="products.push('Mixins')">Add New Item</button>
        <input
          type="text"
          class="form-control mb-md-3 mt-md-3"
          v-model="filterProduct"
          placeholder="Press name product..."
        />
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

    <hr />

    <app-list></app-list>
  </div>
</template>

<script>
import { productMixin } from "./productMixin";
import List from "./List";

export default {
  created() {
    console.log("Created!");
  },
  data() {
    return {
      text: "Hello everyone, VueJS"
    };
  },
  mixins: [productMixin],
  components: {
    appList: List
  },
  filters: {
    toLowerCase(text) {
      return text.toLowerCase();
    }
  }
};
</script>

<style></style>
