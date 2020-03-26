<template>
  <div class="row">
    <form action>
      <div class="row">
        <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
          <label for>U can saying...</label>
          <textarea class="form-group" v-model="item" name id cols="30" rows="5"></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-8 offset-sm-2 col-md-6 offset-md-3 form-group">
          <button class="btn btn-success" @click.prevent="addNew">Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      item: ""
    };
  },
  methods: {
    addNew() {
      if (this.item && this.item !== "") {
        if (
          this.items.length > 0 &&
          this.items.some(
            item => item.toLowerCase() == this.item.toLowerCase()
          )
        ) {
          return alert("This item is existed!");
        }
        this.$emit("addItem", this.item);
        this.item = "";
      }
    }
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  resize: none;
}

form {
  width: 100%;
}
</style>