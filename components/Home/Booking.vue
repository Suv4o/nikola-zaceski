<template>
  <section class="container section">
    <div class="booking" id="home-booking">
      <div class="booking__line" id="menu-stagger-links"></div>
      <div class="booking__header">
        <div aria-label="Booking Menu" @click="toggleOnOff">
          <div class="booking__header-left">
            <div class="booking__header-left-number">07</div>
            <h2 class="booking__header-left-title">booking</h2>
          </div>
        </div>
        <div class="booking__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledBooking"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="booking__header-right-arrow-down"
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
            v-if="!isToggledBooking"
            to="/"
            class="booking__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="booking__main" id="booking__main">
        <div class="booking__main-content" id="booking__main-content">
          <div class="description">
            <h1>Contact me for availability</h1>
            <div class="description-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              nec tempus massa. Praesent ac ante ut quam commodo semper. Quisque
              commodo consequat orci, sed ultricies lorem ornare sit amet. Nulla
              accumsan laoreet est, at facilisis erat laoreet ut. Praesent
              suscipit, urna a venenatis interdum, lacus magna sollicitudin
              augue, eget lobortis purus tellus fermentum sapien. Nunc accumsan
              eu justo et commodo. Suspendisse pellentesque, quam accumsan
            </div>
            <nuxt-link to="/">Check my upcoming events and tours</nuxt-link>
          </div>
          <div class="form">
            <div class="form-content">
              <input type="text" class="email" placeholder="Email" />
              <div class="type">
                <div class="arrow">
                  <img src="/icons/select-arrow-down.svg" alt="arrow" />
                </div>
                <select name="type">
                  <option value="" disabled selected
                    >Choose type of booking
                  </option>
                  <option value="type-1">Type 1</option>
                  <option value="type-2">Type 2</option>
                  <option value="type-3">Type 3</option></select
                >
              </div>
              <textarea
                type="text"
                class="message"
                placeholder="Message"
              ></textarea>
              <button>SEND</button>
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
    if (!this.isToggledBooking) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationBooking: "toggleMenu/UPDATE_THE_STORE_BOOKING"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationBooking({
        isToggledBooking: !this.isToggledBooking
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-booking", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#booking__main", {
        height: "auto",
        ease: "power4.out",
        duration: 2
      }).to(
        "#booking__main-content",
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
    isToggledBooking() {
      return this.$store.state.toggleMenu.isToggledBooking;
    }
  },
  watch: {
    isToggledBooking(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#booking__main");
        let tl = gsap.timeline();
        tl.to("#booking__main-content", {
          opacity: 0,
          ease: "power4.out",
          duration: 1
        }).to(
          "#booking__main",
          {
            height: "0px",
            ease: "power4.out",
            duration: 2
          },
          "-=0.5"
        );
      } else {
        let tl = gsap.timeline();
        tl.to("#booking__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        }).to(
          "#booking__main-content",
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
#booking__main-content {
  opacity: 0;
}

.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.booking {
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
      padding-left: 5rem;

      @media (max-width: 81.875em) {
        flex-direction: column;
      }

      @include breakpoint-down(medium) {
        padding-left: 4.0625rem;
      }

      @include breakpoint-down(small) {
        padding: 0 2.1875rem;
      }

      .description {
        flex: 1;

        h1 {
          margin: 3.4375rem 0px 1.625rem 0px;
          font-size: 2.25rem;
          font-weight: 500;
          line-height: 1.33;
          letter-spacing: -0.64px;

          @include breakpoint-down(medium) {
            margin: 1.5625rem 0px 1.125rem 0px;
            font-size: 1.625rem;
          }
        }

        &-text {
          width: 90%;
          margin: 0.59375rem 0px 0px 0px;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.11;
          letter-spacing: -0.32px;

          @include breakpoint-down(medium) {
            font-size: 1rem;
          }
        }

        a {
          display: inline-block;
          width: 23.75rem;
          height: 3rem;
          margin-top: 2.1875rem;
          padding: 0.75rem 0px 0px 0px;
          font-size: 1.25rem;
          line-height: 1.05;
          letter-spacing: -0.36px;
          text-align: center;
          border: solid 1px $white-color;
          color: $white-color;
          transition: 0.3s all ease-in-out;

          @include breakpoint-down(medium) {
            width: 18.875rem;
            margin-top: 1.875rem;
            padding: 0.875rem 0px 0px 0px;
            font-size: 1rem;
          }

          @include breakpoint-down(small) {
            width: 100%;
          }

          @include breakpoint-down(xsmall) {
            font-size: 0.875rem;
          }

          &:hover {
            border: solid 1px $gold-color;
            color: $gold-color;
          }
        }
      }

      .form {
        display: flex;
        justify-content: center;
        flex: 1;

        @media (max-width: 81.875em) {
          justify-content: left;
        }

        &-content {
          display: flex;
          flex-direction: column;
          margin-top: 3.4375rem;

          @media (max-width: 81.875em) {
            width: 100%;
          }

          .email {
            width: 30.5rem;
            height: 3rem;
            margin: 0px 0px 1rem 0px;
            padding: 0px 1rem 0px 1rem;
            font-family: HelveticaNeue;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.1px;
            border: 0;
            color: $brown-color;
            background-color: $light-blue-color;

            @media (max-width: 81.875em) {
              width: auto;
            }

            &::placeholder {
              font-family: HelveticaNeue;
              font-size: 1rem;
              line-height: 1.5;
              letter-spacing: 0.1px;
              color: $brown-color;
            }
          }

          .type {
            position: relative;
            .arrow {
              position: absolute;
              top: 0.75rem;
              right: 0.5rem;
            }
            select {
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;

              width: 30.5rem;
              height: 3rem;
              margin: 0px 0px 1rem 0px;
              padding: 0px 1rem 0px 1rem;
              font-family: HelveticaNeue;
              font-size: 1rem;
              line-height: 1.5;
              letter-spacing: 0.1px;
              border: 0;
              color: $brown-color;
              background-color: $light-blue-color;

              @media (max-width: 81.875em) {
                width: 100%;
              }
            }
          }

          .message {
            width: 30.5rem;
            height: 9rem;
            margin: 0px 0px 1rem 0px;
            padding: 10px 1rem 0px 1rem;
            font-family: HelveticaNeue;
            font-size: 1rem;
            line-height: 1.5;
            letter-spacing: 0.1px;
            border: 0;
            resize: none;
            color: $brown-color;
            background-color: $light-blue-color;

            @media (max-width: 81.875em) {
              width: auto;
            }

            &::placeholder {
              font-family: HelveticaNeue;
              font-size: 1rem;
              line-height: 1.5;
              letter-spacing: 0.1px;
              color: $brown-color;
            }
          }

          button {
            width: 30.5rem;
            height: 3rem;
            font-family: HelveticaNeue;
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.13px;
            text-align: center;
            cursor: pointer;
            border: 0;
            color: $white-color;
            background-color: $gold-color;
            transition: 0.3s all ease-in-out;

            @media (max-width: 81.875em) {
              width: auto;
            }

            @include breakpoint-down(medium) {
              font-size: 1rem;
            }

            &:hover {
              background-color: $blue-color;
            }
          }
        }
      }
    }
  }
}
</style>
