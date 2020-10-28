<template>
  <div class="home">
    <marquee scrollamount="100"> <img src="/img/logo.png" /> </marquee>
    <h2>LISTEN NOW:</h2>
    <button> <b>A TO PLAY:</b> Episode 34829339493: Direct Object Pronouns</button>
    <h2>WHAT IS THIS:</h2>
    <p>
      HAI THIS IS MY EPIC SPANISH PODCASTTT?!?!?!?!?! WE DO COOL
      SPANISH STUFF EVERY WEEKK
    </p>
    <h2>THANKS TO:</h2>
    <img
      src="/img/falling.png"
      id="sponsor"
      style="height: 120px"
    />
  </div>
</template>

<script>
import * as Mousetrap from 'mousetrap';

export default {
  data: () => {
    return {
      linkActive: true,
    };
  },
  mounted() {
    Mousetrap.bind('a', () => {
      window.location.href = '/#/listen';
    });
    setInterval(() => {
      if (this.linkActive) {
        const el = document.querySelector("button");
        if (el.style.display == "block") {
          el.style.display = "none";
        } else {
          el.style.display = "block";
        }
      }
    }, 1000);
  },
  beforeUnmount() {
    this.linkActive = false;
  }
};
</script>