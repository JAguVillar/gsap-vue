<template>
  <div class="spacer"></div>

  <div class="gallery">
    <div class="left">
      <div class="detailsWrapper">
        <div class="details">
          <div class="headline"></div>
          <div class="text"></div>
          <div class="text"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>

        <div class="details">
          <div class="headline"></div>
          <div class="text"></div>
          <div class="text"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>

        <div class="details">
          <div class="headline"></div>
          <div class="text"></div>
          <div class="text"></div>
          <div class="text"></div>
          <div class="text"></div>
        </div>
      </div>
    </div>

    <div class="right">
      <img
        src="https://images.unsplash.com/photo-1686164194855-e4d37f4e7c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        alt=""
        srcset=""
        class="photos"
      />
    </div>
  </div>

  <div class="spacer"></div>
  <div class="spacer"></div>
  <div class="spacer"></div>
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
    //   var tl = gsap.timeline({ repeat: 2, repeatDelay: 1 });
    //   tl.to(".box", { x: 100, duration: 1 });
    //   tl.to(".box", { y: 50, duration: 1 });
    //   tl.to(".box", { opacity: 0, duration: 1 });
    // },
    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      markers: true,
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
.spacer {
  width: 100%;
  height: 50vh;
  background: #ddd;
}

.headline {
  background: #2d4e86;
  border-radius: 6px;
  height: 4em;
  width: 100%;
}

.text {
  margin: 0.8em 0 0 0;
  background: #2d4e86;
  border-radius: 6px;
  height: 1em;
  width: 100%;
}

.gallery {
  display: flex;
  outline: 1px solid red;
}

.left {
  width: 50%;
}

.detailsWrapper {
  margin: auto;
  width: 80%;
}

.details {
  height: 100vh;
  outline: 1px solid pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right {
  outline: 1px solid purple;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.photos {
  width: 40vw;
  height: 40vw;
  background: maroon;
}
</style>
