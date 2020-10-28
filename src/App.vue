<template>
  <div v-if="nopointerlock" v-on:click="enablePointerLock">
    <br /><br /><br /><br /><br /><br />
    <p>CLICK ME CLICK ME CLICK ME</p>
  </div>
  <div v-else>
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Raybees";
  src: url("/rb.woff");
}

* {
  font-family: "Raybees", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f9e300;
}

button {
  color: #f9461c;
  background-color: transparent;
  border: 7px inset #522398;
}

button b {
  color: #62361b;
}

marquee {
  font-size: 20pt;
}

h1 {
  color: #f9e300;
}

a {
  color: #522398;
}

#sponsor {
  padding: 5px;
  background-color: white;
  border-radius: 5px;
}
</style>


<script>
export default {
  data: () => {
    return {
      nopointerlock: true,
    };
  },
  methods: {
    enablePointerLock: function () {
      const el = document.querySelector("#app");
      el.requestPointerLock = el.requestPointerLock = el.requestPointerLock =
        el.requestPointerLock || el.mozRequestPointerLock;
      el.requestPointerLock();
      el.requestFullscreen();
      screen.orientation.lock("landscape");
      navigator.keyboard.lock();
      this.nopointerlock = false;
    },
  },
  mounted: function () {
    const evt = () => {
      if (!document.pointerLockElement) {
        this.nopointerlock = true;
        document.exitPointerLock();
      }
    };
    if ("onpointerlockchange" in document) {
      document.addEventListener("pointerlockchange", evt, false);
    } else if ("onmozpointerlockchange" in document) {
      document.addEventListener("mozpointerlockchange", evt, false);
    }
  },
};
</script>