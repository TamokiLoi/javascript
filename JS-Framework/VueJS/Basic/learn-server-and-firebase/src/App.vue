<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-left"
      >
        <h1 class="text-center">Vue Resource</h1>
        <div class="form-group">
          <input type="text" class="form-control" v-model="user.username" />
        </div>

        <div class="form-group">
          <input type="text" class="form-control" v-model="user.email" />
        </div>

        <button class="btn btn-block btn-success" @click="submit">
          Submit
        </button>

        <hr />

        <input type="text" class="form-control" v-model="node" />
        <br />
        <button class="btn btn-block btn-warning mb-md-3" @click="getData">
          Get Data
        </button>
        <ul class="list-group">
          <li
            class="list-group-item mb-md-1"
            v-for="(item, index) in users"
            :key="index"
          >
            Name: {{ item.username }} - Email: {{ item.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: ""
      },
      users: [],
      resource: {},
      node: "data"
    };
  },
  created() {
    // custom vue-resource
    const customActions = {
      createItem: { method: "POST", url: "user.json" },
      getNodeData: { method: "GET" }
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  },
  methods: {
    submit() {
      // call api by http-normal
      //   this.$http.post("", this.user).then(
      //     res => {
      //       console.log(res);
      //     },
      //     err => {
      //       console.log(err);
      //     }
      //   );

      // call api by vue-resource
      this.resource.createItem(this.user);
    },
    getData() {
      // call api by http-normal
      //   this.$http
      //     .get("")
      //     .then(res => {
      //       return res.json();
      //     })
      //     .then(data => {
      //       console.log(data);
      //       const newArr = [];
      //       for (let key in data) {
      //         newArr.push(data[key]);
      //       }
      //       this.users = newArr;
      //     });

      // call api by vue-resource
      this.resource
        .getNodeData({ node: this.node })
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log(data);
          const newArr = [];
          for (let key in data) {
            newArr.push(data[key]);
          }
          this.users = newArr;
        });
    }
  }
};
</script>

<style></style>
