<template>
  <div class="container">
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 text-center"
      >
        <h1>Animations</h1>

        <!-- <select v-model="typeAnimation" class="form-control mb-md-3">
          <option value="fade">Fade</option>
          <option value="slide">slide</option>
        </select>
        
        <button class="btn btn-block btn-success" @click="show = !show">
          Show notification
        </button>
        <br />
        <br />
        <transition :name="typeAnimation">
          <div class="alert alert-success" v-if="show">
            This is something about notification
          </div>
        </transition>

        <transition name="slide">
          <div class="alert alert-warning" v-if="show">
            This is something about notification
          </div>
        </transition>

        <transition
          appear
          enter-class=""
          enter-active-class="animated bounceOutDown"
          leave-class=""
          leave-active-class="animated hinge"
        >
          <div class="alert alert-danger" v-if="show">
            This is something about notification
          </div>
        </transition>

        <transition :name="typeAnimation" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            This is something about notification from success
          </div>
          <div class="alert alert-danger" v-else key="danger">
            This is something about notification from danger
          </div>
        </transition>

        <hr /> -->

        <!-- <button
          class="btn btn-success btn-block mb-md-3"
          @click="status = !status"
        >
          Add or Remove
        </button>
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
        >
          <div
            style="width: 300px; height: 100px; background: lightblue"
            v-if="status"
          ></div>
        </transition>

        <hr /> -->

        <!-- <button
          class="btn btn-block btn-primary mb-md-3"
          @click="
            selectedComponent == 'app-success-alert'
              ? (selectedComponent = 'app-danger-alert')
              : (selectedComponent = 'app-success-alert')
          "
        >
          Submid (toggle 2 notification)
        </button>
        <transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>

        <hr /> -->

        <button class="btn btn-block btn-warning mb-md-3" @click="addItem">
          Add item
        </button>
        <ul class="list-group">
          <transition-group name="slide" mode="out-in">
            <li
              class="list-group-item"
              v-for="(item, index) in numbers"
              :key="item"
              style="cursor: pointer;"
              @click="removeItem(index)"
            >
              {{ item }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./components/DangerAlert";
import SuccessAlert from "./components/SuccessAlert";

export default {
  data() {
    return {
      show: true,
      typeAnimation: "fade",
      status: false,
      elementWidth: 100,
      alertanimation: "fade",
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3]
    };
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  },
  methods: {
    beforeEnter: el => {
      console.log("before-enter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter: (el, done) => {
      console.log("enter");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + point * 10 + "px";
        point++;
        if (point > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter: el => {
      console.log("after-enter");
    },
    enterCancelled: el => {
      console.log("enter-cancelled");
    },

    beforeLeave: el => {
      console.log("before-leave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave: (el, done) => {
      console.log("leave");
      let point = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - point * 10 + "px";
        point++;
        if (point > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave: el => {
      console.log("after-leave");
    },
    leaveCancelled: el => {
      console.log("leave-cancelled");
    },

    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style>
/* enter */
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

/* leave */
.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* slide transition effect */
/* enter */
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-out forwards;
}
/* leave */
.slide-leave {
}

.slide-leave-active {
  opacity: 0;
  transition: opcity 1s;
  animation: slide-out 1s ease-out forwards;
  position: absolute;
}

.slide-move {
    transition: transform 1s;
}

/* key frames */
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
