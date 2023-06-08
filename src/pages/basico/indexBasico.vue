<template>
  <div>
    <!-- <div class="box green"></div> -->
    <div class="box"></div>
  </div>
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
    gsap.to(".box", {
      x: 200,
    });
    gsap.to(".box", {
      scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
      x: 500,
    });
  },
  computed: {},
  methods: {
    // scrollAnimation() {
    //   gsap
    //     .timeline({
    //       scrollTrigger: {
    //         trigger: ".box",
    //         start: "center center",
    //         end: "bottom top",
    //         markers: true,
    //         scrub: true,
    //         pin: true,
    //       },
    //     })
    //     .from(".text1", { x: innerWidth * 1, opacity: 0 })
    //     .from(".text2", { x: innerWidth * 1, opacity: 0 });
    // },
  },
};
</script>

<style scoped>
.box {
  height: 150px;
  width: 150px;
  background: red;
}
</style>
