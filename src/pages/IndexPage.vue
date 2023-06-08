<template>
  <q-page> </q-page>
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

<style>
.box {
  display: block;
  height: 150px;
  width: 150px;
  background: green;
}
</style>
