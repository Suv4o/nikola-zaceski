<template>
  <section class="container section">
    <div class="awards" id="home-awards">
      <div class="awards__line" id="menu-stagger-links"></div>
      <div class="awards__header">
        <div aria-label="Awards Menu" @click="toggleOnOff">
          <div class="awards__header-left">
            <div class="awards__header-left-number">03</div>
            <h2 class="awards__header-left-title">awards</h2>
            <div class="awards__header-left-info">MUSICLAND 2020 V CAT</div>
          </div>
        </div>
        <div class="awards__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledAwards"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="awards__header-right-arrow-down"
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
            v-if="!isToggledAwards"
            to="/awards"
            class="awards__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="awards__main" id="awards__main">
        <div class="protectore-wrapper-relative">
          <div
            class="protectore-wrapper-absolute"
            v-touch:swipe.left="scrollNext"
            v-touch:swipe.right="scrollBack"
          ></div>
          <div class="cards-wrapper" ref="cards-wrapper" id="cards-wrapper">
            <div class="cards">
              <div
                class="cards-individual"
                v-for="(award, index) in awards"
                :key="index"
                :id="award.id"
              >
                <div>
                  {{ award.text }}
                </div>
                <div>{{ award.date }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info-wrapper" id="info-wrapper">
          <div class="text">Do you organize an awards event?</div>
          <div class="arrows">
            <button @click="scrollBack">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.115"
                height="18"
                viewBox="0 0 11.115 18"
              >
                <path
                  id="Icon_material-keyboard-arrow-left"
                  data-name="Icon material-keyboard-arrow-left"
                  d="M23.115,24.135l-6.87-6.885,6.87-6.885L21,8.25l-9,9,9,9Z"
                  transform="translate(-12 -8.25)"
                  fill="#2c4057"
                />
              </svg></button
            ><button @click="scrollNext">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11.115"
                height="18"
                viewBox="0 0 11.115 18"
              >
                <path
                  id="Icon_material-keyboard-arrow-right"
                  data-name="Icon material-keyboard-arrow-right"
                  d="M12.885,24.51l6.87-6.885-6.87-6.885L15,8.625l9,9-9,9Z"
                  transform="translate(-12.885 -8.625)"
                  fill="#2c4057"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="wrapper-button" id="wrapper-button">
          <button class="button">INVITE ME</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
import { mapMutations } from "vuex";
Vue.use(Vue2TouchEvents);

let IS_SCROLLING_DONE = true;
export default {
  data() {
    return {
      awards: [
        {
          text: `1Prva specijalna nagrada vo kategorija “Folklore” na
                internacionalniot online festival “Art in Experience”`,
          date: `27-29.06.2020`,
          id: `award-1`
        },
        {
          text: `2Prvo mesto na megunaroden natprevar so horot “Dragan Suplevski”
                (Fakultet za muzicka umetnost Skopje)`,
          date: `27-29.06.2020`,
          id: `award-2`
        },
        {
          text: `3Prva specijalna nagrada vo kategorija “Folklore” na
                internacionalniot online festival “Art in Experience”`,
          date: `27-29.06.2020`,
          id: `award-3`
        },
        {
          text: `4Prva specijalna nagrada vo kategorija “Folklore” na
                internacionalniot online festival “Art in Experience”`,
          date: `27-29.06.2020`,
          id: `award-4`
        },
        {
          text: `5Prva specijalna nagrada vo kategorija “Folklore” na
                internacionalniot online festival “Art in Experience”`,
          date: `27-29.06.2020`,
          id: `award-5`
        },
        {
          text: `6Prva specijalna nagrada vo kategorija “Folklore” na
                internacionalniot online festival “Art in Experience”`,
          date: `27-29.06.2020`,
          id: `award-6`
        },
        {
          text: `7Prva specijalna nagrada vo kategorija “Folklore” na
                internacionalniot online festival “Art in Experience”`,
          date: `27-29.06.2020`,
          id: `award-7`
        }
      ]
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin);
    if (!this.isToggledAwards) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationAwards: "toggleMenu/UPDATE_THE_STORE_AWARDS"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationAwards({
        isToggledAwards: !this.isToggledAwards
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-awards", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#awards__main", {
        height: "auto",
        ease: "power4.out",
        duration: 2
      })
        .to(
          "#cards-wrapper",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=1"
        )
        .to(
          "#info-wrapper",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=1"
        )
        .to(
          "#wrapper-button",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=1"
        );
    },
    scrollNext() {
      let $this = this;
      if (IS_SCROLLING_DONE) {
        this.scrollingNxt().then(function() {
          $this.awards.push($this.awards.shift());
          $this.$refs["cards-wrapper"].scrollLeft = 0;
          IS_SCROLLING_DONE = true;
        });
      }
    },
    scrollBack() {
      let $this = this;
      if (IS_SCROLLING_DONE) {
        this.scrollingBck();
        let tl = gsap.timeline({
          onComplete: function() {
            IS_SCROLLING_DONE = true;
          }
        });
        tl.to(".cards-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.awards[0].id}`,
          ease: "power2.inOut"
        });
      }
    },
    scrollingNxt() {
      let $this = this;
      IS_SCROLLING_DONE = false;
      return new Promise((resolve, reject) => {
        let tl = gsap.timeline({
          onComplete: function() {
            resolve("Done");
          }
        });
        tl.to(".cards-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.awards[1].id}`,
          ease: "power2.inOut"
        });
      });
    },
    scrollingBck() {
      this.$refs["cards-wrapper"].scrollLeft = 264;
      this.awards.unshift(this.awards.pop());
      IS_SCROLLING_DONE = false;
    }
  },
  computed: {
    isToggledAwards() {
      return this.$store.state.toggleMenu.isToggledAwards;
    }
  },
  watch: {
    isToggledAwards(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#awards__main");
        let tl = gsap.timeline();
        tl.to("#cards-wrapper", {
          opacity: 0,
          ease: "power4.out",
          duration: 1
        })
          .to(
            "#info-wrapper",
            {
              opacity: 0,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#wrapper-button",
            {
              opacity: 0,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#awards__main",
            {
              height: "0px",
              ease: "power4.out",
              duration: 2
            },
            "-=0.5"
          );
      } else {
        let tl = gsap.timeline();
        tl.to("#awards__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        })
          .to(
            "#cards-wrapper",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#info-wrapper",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#wrapper-button",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#cards-wrapper {
  opacity: 0;
}
#info-wrapper {
  opacity: 0;
}
#wrapper-button {
  opacity: 0;
}
.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.awards {
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

      &-info {
        align-self: start;
        font-size: 1.1875rem;
        font-weight: 300;
        line-height: 2.3;
        letter-spacing: -0.34px;

        @include breakpoint-down(medium) {
          font-size: 0.95rem;
        }

        @include breakpoint-down(small) {
          display: none;
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
    height: 0px;
    .cards-wrapper {
      padding-top: 5.3125rem;
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      @include breakpoint-down(medium) {
        padding-top: 1.875rem;
      }
    }
    .protectore-wrapper-relative {
      position: relative;
    }
    .protectore-wrapper-absolute {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
    .cards {
      width: 116.5625rem;
      & > div:not(:last-child) {
        margin-right: 2.1875rem;
      }
      &-individual {
        display: inline-block;
        position: relative;
        width: 14.5625rem;
        height: 20.6875rem;
        background-color: $blue-color;

        :nth-child(1) {
          position: absolute;
          width: 90%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 1rem;
          font-weight: 300;
          line-height: 1.25;
          letter-spacing: -0.29px;
          text-align: center;
        }

        :nth-child(2) {
          position: absolute;
          width: 100%;
          bottom: 10%;
          left: 50%;
          transform: translate(-50%);
          font-size: 1.1875rem;
          font-weight: bold;
          line-height: 1.05;
          letter-spacing: -0.34px;
          text-align: center;
        }

        &::before {
          content: url("/logos/awards.svg");
          position: absolute;
          top: -5%;
          left: 50%;
          transform: translate(-50%);
        }
      }
    }

    .info-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 5.5625rem;

      @include breakpoint-down(medium) {
        flex-direction: column-reverse;
        margin-top: 2.5rem;
        justify-content: center;
        align-items: center;
      }

      button {
        display: flex;
        align-items: center;
        background-color: $transparent-color;
        border: none;
      }

      .text {
        margin-left: 3.3125rem;
        font-size: 1.5rem;
        line-height: 0.79;
        letter-spacing: -0.43px;
        text-align: left;
        @include breakpoint-down(medium) {
          margin-left: 0px;
          padding: 0 1.25rem;
          line-height: 1.2;
          text-align: center;
        }
      }

      .arrows {
        display: flex;
        justify-content: space-between;
        width: 5.8125rem;

        @include breakpoint-down(medium) {
          margin-bottom: 1.875rem;
        }
        svg {
          cursor: pointer;
          path {
            transition: fill 0.5s ease-in-out;
            fill: $white-color;
          }
          &:hover {
            path {
              fill: $gold-color;
            }
          }

          @include breakpoint-down(small) {
            width: 0.48628125rem;
            height: 0.7875rem;
          }
        }
      }
    }

    .wrapper-button {
      @include breakpoint-down(medium) {
        display: flex;
        justify-content: center;
      }
    }

    .button {
      margin-top: 1.875rem;
      margin-bottom: 3.5625rem;
      margin-left: 3.3125rem;
      width: 8.0625rem;
      height: 2.3125rem;
      background-color: $transparent-color;
      color: $white-color;
      border: solid 1px $white-color;
      font-size: 1rem;
      line-height: 1.06;
      letter-spacing: -0.29px;
      text-align: center;
      cursor: pointer;
      transition: all 0.5s ease-in-out;

      @include breakpoint-down(medium) {
        margin-left: 0px;
      }

      &:hover {
        color: $gold-color;
        border: solid 1px $gold-color;
      }
    }
  }
}
</style>
