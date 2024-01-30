console.log("js ok");
const { createApp } = Vue;

const slider = createApp({
  data() {
    return {
      slides: [
        {
          image: "01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeImage: 0,
      autoplay: false,
    };
  },

  methods: {
    goToSlide(index) {
      this.activeImage = index;
    },

    nextClick() {
      if (this.activeImage >= this.slides.length - 1) {
        this.activeImage = 0;
      } else {
        this.activeImage++;
      }
    },
    prevClick() {
      if (this.activeImage <= 0) {
        this.activeImage = this.slides.length - 1;
      } else {
        this.activeImage--;
      }
    },
    startAutoplay() {
      this.autoplay = setInterval(() => {
        this.nextClick();
      }, 3000);
    },
    stopAutoplay() {
      clearInterval(this.autoplay);
    },
  },

  mounted() {
    this.autoplay = setInterval(() => {
      this.next();
    }, 3000);
  },
});
slider.mount("#app");
