<template>
  <section class="container section">
    <div class="activism" id="home-activism">
      <div class="activism__line" id="menu-stagger-links"></div>
      <div class="activism__header">
        <div aria-label="Activism Menu" @click="toggleOnOff">
          <div class="activism__header-left">
            <div class="activism__header-left-number">06</div>
            <h2 class="activism__header-left-title">activism</h2>
          </div>
        </div>
        <div class="activism__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledActivism"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="activism__header-right-arrow-down"
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
            v-if="!isToggledActivism"
            to="/"
            class="activism__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="activism__main" id="activism__main">
        <div class="activism__main-content" id="activism__main-content">
          <div class="content-left">
            <div class="text-title">
              Connecting People throught music while helping others in need
            </div>
            <div class="text-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec tempus massa. Praesent ac ante ut quam commodo semper. Quisque
              commodo consequat orci, sed ultricies lorem ornare sit amet. Nulla
              accumsan laoreet est, at facilisis erat laoreet ut. Praesent
              suscipit, urna a venenatis interdum, lacus magna sollicitudin
              augue, eget lobortis purus tellus fermentum sapien. Nunc accumsan
              eu justo et commodo. Suspendisse pellentesque, quam accumsan
              commodo condimentum, sapien metus ultrices ligula, sed tincidunt
              erat nisl commodo dolor. Aenean euismod facilisis nulla interdum
              lobortis. Aenean felis justo, rhoncus eget ante sed, fermentum
              porta orci. Suspendisse eget elit eget erat interdum mattis sit
              amet at ipsum. Morbi lobortis lacus ligula, sed fermentum erat
              mattis laoreet. Ut sagittis eleifend imperdiet. Integer fermentum
              congue justo et cursus. Morbi vel libero felis.
            </div>
            <nuxt-link to="/">Find out more</nuxt-link>
          </div>
          <div class="content-right">
            <div class="pwb-logo">
              <img
                src="/logos/pwb-activisam.svg"
                alt="Play Without Boundaries Logo"
              />
            </div>
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
    if (!this.isToggledActivism) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationActivism: "toggleMenu/UPDATE_THE_STORE_ACTIVISM"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationActivism({
        isToggledActivism: !this.isToggledActivism
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-activism", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#activism__main", {
        height: "auto",
        ease: "power4.out",
        duration: 2
      }).to(
        "#activism__main-content",
        {
          opacity: 1,
          ease: "power4.out",
          duration: 1
        },
        "-=0.7"
      );
    }
  },
  computed: {
    isToggledActivism() {
      return this.$store.state.toggleMenu.isToggledActivism;
    }
  },
  watch: {
    isToggledActivism(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#activism__main");
        let tl = gsap.timeline();
        tl.to("#activism__main-content", {
          opacity: 0,
          ease: "power4.out",
          duration: 1
        }).to(
          "#activism__main",
          {
            height: "0px",
            ease: "power4.out",
            duration: 2
          },
          "-=0.5"
        );
      } else {
        let tl = gsap.timeline();
        tl.to("#activism__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        }).to(
          "#activism__main-content",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=0.7"
        );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#activism__main-content {
  opacity: 0;
}

.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.activism {
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
    height: 0px;
    &-content {
      display: flex;
      justify-content: space-between;

      @include breakpoint-down(large) {
        flex-direction: column;
      }

      .content-left {
        flex: 1;
        padding-left: 5rem;

        @include breakpoint-down(medium) {
          padding-left: 3.75rem;
        }

        @include breakpoint-down(small) {
          padding-left: 2.1875rem;
          padding-right: 0.9375rem;
        }

        .text-title {
          font-family: SaolDisplay;
          font-size: 3.5rem;
          line-height: 1.04;
          letter-spacing: -1px;
          text-align: left;
          color: $gold-color;
          margin-top: 4.0625rem;
          margin-bottom: 2.6875rem;

          @include breakpoint-down(medium) {
            margin-top: 0px;
            font-size: 2.875rem;
          }
        }

        .text-body {
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.11;
          letter-spacing: -0.32px;
          text-align: left;
          margin-bottom: 2.6875rem;
          margin-bottom: 2.6875rem;

          @include breakpoint-down(medium) {
            display: none;
          }
        }

        a {
          display: inline-block;
          width: 10.625rem;
          height: 3rem;
          margin: 1.8125rem 0px 5.53125rem 0px;
          padding: 0.75rem 0px 0px 1.5625rem;
          border: solid 1px $white-color;
          font-size: 1.25rem;
          line-height: 1.05;
          letter-spacing: -0.36px;
          text-align: left;
          color: $white-color;
          transition: 0.3s all ease-in-out;

          @include breakpoint-down(large) {
            margin-bottom: 3.75rem;
          }

          @include breakpoint-down(medium) {
            display: none;
          }

          &:hover {
            border: solid 1px $gold-color;
            color: $gold-color;
          }
        }
      }

      .content-right {
        flex: 1;
        display: flex;
        justify-content: center;
        margin-top: 4.0625rem;

        @include breakpoint-down(large) {
          margin-top: 0px;
        }

        .pwb-logo {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 22.5625rem;
          height: 27.875rem;
          background-color: $blue-color;

          @include breakpoint-down(large) {
            margin-bottom: 3.75rem;
          }

          @include breakpoint-down(medium) {
            margin-bottom: 1.875rem;
          }

          @include breakpoint-down(medium) {
            width: 17.5rem;
            height: 18.5rem;
          }

          img {
            width: 18.5625rem;
            height: 22.3125rem;

            @include breakpoint-down(medium) {
              width: 12.3125rem;
              height: 14.8125rem;
            }
          }
        }
      }
    }
  }
}
</style>
