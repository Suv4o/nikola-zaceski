<template>
  <section class="container section">
    <div class="background-img bg__style" id="bg_img-about"></div>
    <div class="about" id="home-about">
      <div class="about__line" id="menu-stagger-links"></div>
      <div class="about__header">
        <div aria-label="About Menu" @click="toggleOnOff">
          <div class="about__header-left">
            <div class="about__header-left-number">02</div>
            <h2 class="about__header-left-title">about</h2>
          </div>
        </div>
        <div class="about__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledAbout"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="about__header-right-arrow-down"
          >
            <path
              id="Icon_material-keyboard-arrow-down"
              data-name="Icon material-keyboard-arrow-down"
              d="M11.158,11.76l7.025,7.009,7.025-7.009,2.158,2.158L18.183,23.1,9,13.918Z"
              transform="translate(-9 -11.76)"
              fill="#fff"
            />
          </svg>
          <nuxt-link
            v-if="!isToggledAbout"
            to="/about"
            class="about__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="about__main" id="about__main">
        <div class="about__main-img"></div>
        <div class="about__main-text" id="about__main-text">
          <div class="about__main-paragraph-1">
            Nikola Zaceski is an ambassador of Macedonian music and loves to
            share his voice with the world. From a very early age, Nikola showed
            a great interest in music. He began playing the piano at ten years
            old, and later he learned music theory. During this time he
            discovered his voice and realised that singing was his passion.
            <br /><br />
            Nikola attended high school at the Public Musical School in Bitola
            and continued his studies at the Faculty of Musical Arts at Saints
            Cyril And Methodius University in Skopje, Macedonia. Studying music
            and specialising in Vocal Performances.
            <br /><br />
            After graduating, he returned to Bitola, his hometown, to begin his
            career as a music teacher at the Public Musical High school, the
            school that he had studied at earlier. Nikola was able to share his
            love of music with his students at this school and also at the
            Primary School "St. Kliment Ohridski in Bitola".
            <div class="experience-text">13 years singing experience</div>
          </div>
          <div class="about__main-paragraph-2">
            Nikola Zaceski is an ambassador of Macedonian music and loves to
            share his voice with the world. From a very early age, Nikola showed
            a great interest in music. He began playing the piano at ten years
            old, and later he learned music theory. During this time he
            discovered his voice and realised that singing was his passion.
            <br /><br />
            Nikola attended high school at the Public Musical School in Bitola
            and continued his studies at the Faculty of Musical Arts at Saints
            Cyril And Methodius University in Skopje, Macedonia. Studying music
            and specialising in Vocal Performances.
            <br /><br />
            After graduating, he returned to Bitola, his hometown, to begin his
            career as a music teacher at the Public Musical High school, the
            school that he had studied at earlier. Nikola was able to share his
            love of music with his students at this school and also at the
            Primary School "St. Kliment Ohridski in Bitola".
            <div class="experience-text">13 years singing experience</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  mounted() {
    if (!this.isToggledAbout) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationAbout: "toggleMenu/UPDATE_THE_STORE_ABOUT"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationAbout({
        isToggledAbout: !this.isToggledAbout
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-about", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#about__main", {
        paddingBottom: "100px",
        ease: "power4.out",
        duration: 0
      })
        .to("#about__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        })
        .to(
          "#about__main-text",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=1"
        )
        .to(
          "#bg_img-about",
          {
            opacity: 1,
            ease: "power4.inOut",
            duration: 1
          },
          "-=2"
        );
    }
  },
  computed: {
    isToggledAbout() {
      return this.$store.state.toggleMenu.isToggledAbout;
    }
  },
  watch: {
    isToggledAbout(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#bg_img-about");
        gsap.killTweensOf("#about__main-text");
        gsap.killTweensOf("#about__main");
        let tl = gsap.timeline();
        tl.to("#bg_img-about", {
          opacity: 0,
          ease: "power4.out",
          duration: 0.3
        })
          .to(
            "#about__main-text",
            {
              opacity: 0,
              ease: "power4.out",
              duration: 0.3
            },
            "-=0.3"
          )
          .to("#about__main", {
            paddingBottom: "0px",
            ease: "power4.out",
            duration: 0
          })
          .to("#about__main", {
            height: "0px",

            ease: "power4.out",
            duration: 2
          });
      } else {
        let tl = gsap.timeline();
        tl.to("#about__main", {
          paddingBottom: "100px",
          ease: "power4.out",
          duration: 0
        })
          .to("#about__main", {
            height: "auto",
            ease: "power4.out",
            duration: 2
          })
          .to(
            "#about__main-text",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#bg_img-about",
            {
              opacity: 1,
              ease: "power4.inOut",
              duration: 1
            },
            "-=2"
          );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.background-img {
  background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_600,e_sharpen:100/v1601768385/HomeScreen/home-about-background-v3");
  background-size: 480px;
  background-repeat: no-repeat;
  background-position: 20% -50px;

  @include breakpoint-down(large) {
    background-position: 0% 0px;
    background-size: 355px;
  }

  @include breakpoint-down(medium) {
    background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_400,e_sharpen:100/v1601768385/HomeScreen/home-about-background-v3");
    background-position: 0% -50px;
  }

  @include breakpoint-down(xsmall) {
    background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_300,e_sharpen:100/v1601768385/HomeScreen/home-about-background-v3");
    background-position: 0% -50px;
  }
}

.bg__style {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.about {
  position: relative;
  z-index: 2;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @include breakpoint-down(small) {
    width: 95%;
  }

  &__line {
    width: 100%;
    height: 1px;
    margin-bottom: 0.75rem;
    background-color: $white-color;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 1.6875rem;

    &-left {
      display: flex;
      padding-left: 2.5625rem;
      color: $white-color;
      transition: color 0.3s ease-in-out;

      @include breakpoint-down(medium) {
        padding-left: 2.05rem;
      }

      @include breakpoint-down(small) {
        padding-left: 2.1875rem;
      }

      &:hover {
        cursor: pointer;
        color: $gold-color;
      }

      &-number {
        align-self: start;
        font-size: 1.1875rem;
        font-weight: 300;
        line-height: 2.3;
        letter-spacing: -0.34px;
        margin-right: 1.0625rem;

        @include breakpoint-down(medium) {
          font-size: 0.975rem;
          margin-right: 0.85rem;
        }

        @include breakpoint-down(small) {
          display: none;
        }
      }

      &-title {
        font-family: SaolDisplay;
        font-size: 3.5rem;
        line-height: 1;
        letter-spacing: -1px;
        margin-right: 1.4375rem;

        @include breakpoint-down(medium) {
          font-size: 2.8rem;
          margin-right: 0.805rem;
        }

        @include breakpoint-down(small) {
          font-size: 1.625rem;
        }
      }
    }

    &-right {
      svg {
        cursor: pointer;
        path {
          transition: fill 0.3s ease-in-out;
          fill: $white-color;
        }
      }

      svg {
        &:hover {
          path {
            transition: fill 0.3s ease-in-out;
            fill: $gold-color;
          }
        }
      }

      &-arrow-down {
        margin-right: 0.9375rem;
        @include breakpoint-down(medium) {
          width: 1.03303125rem;
          height: 0.63793125rem;
        }
        @include breakpoint-down(small) {
          width: 0.7625rem;
          height: 0.46875rem;
        }
      }
      &-link {
        font-size: 1.1875rem;
        font-weight: 300;
        line-height: 1.05;
        letter-spacing: -0.34px;
        transition: color 0.3s ease-in-out;

        @include breakpoint-down(medium) {
          font-size: 0.95rem;
        }

        &:hover {
          color: $gold-color;
        }
      }
    }
  }

  &__main {
    display: flex;
    height: 0px;
    padding-bottom: 0px;
    overflow: hidden;

    @include breakpoint-down(medium) {
      flex-direction: column;
    }

    &-img {
      width: 900px;

      @include breakpoint-down(large) {
        width: 380px;
      }

      @include breakpoint-down(medium) {
        height: 440px;
      }
    }

    &-text {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: 50px;
      opacity: 0;

      @include breakpoint-down(medium) {
        flex-direction: column;
        justify-content: unset;
      }

      @include breakpoint-down(small) {
        padding-left: 2.1875rem;
      }
    }

    &-paragraph-1 {
      flex: 1;
      margin-right: 65px;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.11;
      letter-spacing: -0.32px;
      text-align: left;

      .experience-text {
        width: 249px;
        font-family: SaolDisplay;
        font-size: 56px;
        line-height: 1.07;
        letter-spacing: -1px;
        text-align: left;
        margin-top: 40px;
        color: $gold-color;

        @include breakpoint-down(medium) {
          display: none;
        }
      }

      @include breakpoint-down(xlarge) {
        margin-right: 30px;
      }

      @include breakpoint-down(medium) {
        margin-right: 0px;
      }

      @include breakpoint-down(small) {
        font-size: 16px;
      }
    }

    &-paragraph-2 {
      flex: 1;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.11;
      letter-spacing: -0.32px;
      text-align: left;

      @include breakpoint-down(medium) {
        margin-top: 20px;
      }

      @include breakpoint-down(small) {
        font-size: 16px;
      }

      .experience-text {
        width: 249px;
        font-family: SaolDisplay;
        font-size: 56px;
        line-height: 1.07;
        letter-spacing: -1px;
        text-align: left;
        margin-top: 40px;
        color: $gold-color;

        @include breakpoint-up(large) {
          display: none;
        }
      }
    }
  }
}
</style>
