<template>
  <div>
    <!-- <div class="box green"></div> -->
    <div class="box">
      <h2 class="text1">Scroll trigger</h2>
      <h2 class="text2">This is my first one</h2>
      <h2 class="text3">How is it?</h2>
    </div>
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
    this.scrollAnimation();

    // gsap.to(".box", {
    //   x: 200,
    // });
    //     gsap.to(".box", {
    //   scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
    //   x: 500
    // });
  },
  computed: {},
  methods: {
    scrollAnimation() {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".box",
            start: "center center",
            end: "bottom top",
            markers: true,
            scrub: true,
            pin: true,
          },
        })
        .from(".text1", { x: innerWidth * 1, opacity: 0 })
        .from(".text2", { x: innerWidth * 1, opacity: 0 });
    },
  },
};
</script>

<style lang="scss" scoped></style>
