<template>
  <div class="container">
    <app-header :itemCount="items.length" :maxItem="maxItem"></app-header>
    <app-new-item :items="items" @addItem="addItem"></app-new-item>
    <app-items-layout :items="items" @removeItem="removeItem"></app-items-layout>
    <div class="row mt-3">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">Info: Click on a Item to delete it!</div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import ItemsLayout from "./components/ItemsLayout";
import NewItem from "./components/NewItem";

export default {
  data() {
    return {
      items: [],
      maxItem: 12
    };
  },
  components: {
    appHeader: Header,
    appItemsLayout: ItemsLayout,
    appNewItem: NewItem
  },
  methods: {
    addItem(item) {
      if (this.items.length >= this.maxItem) {
        return alert("Please remove item first!");
      }
      this.items.push(item);
    },
    removeItem(index) {
      this.items.splice(index, 1);
    }
  }
};
</script>

<style>
</style>