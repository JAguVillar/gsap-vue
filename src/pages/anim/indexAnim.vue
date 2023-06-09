<template>
  <div class="spa"></div>
  <div class="contenedor">
    <div class="izq">
      <div class="box played"></div>
      <div class="box played"></div>
      <div class="box played"></div>
    </div>
    <div class="der"></div>
  </div>
  <div class="spa"></div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "BaseComponent",
  props: {},
  data() {
    return {};
  },
  mounted() {
    // const played = gsap.utils.toArray(".played");
    // played.forEach((box) => {
    //   gsap.to(box, {
    //     x: 300,
    //     scrollTrigger: {
    //       trigger: box,
    //       start: "top top",
    //       toggleActions: "play none none reset",
    //       pin: ".right",
    //     },
    //   });
    // });
    ScrollTrigger.create({
      trigger: ".contenedor",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      markers: true,
    });
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.spa {
  background: pink;
  height: 100vh;
  width: 100vw;
}
.contenedor {
  display: flex;
}

.izq {
  width: 50%;
  height: 100vh;
  background: grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.der {
  width: 50%;
  height: 100vh;
  background-color: black;
}

.box {
  background-color: green;
  width: 100px;
  height: 100px;
}
</style>
