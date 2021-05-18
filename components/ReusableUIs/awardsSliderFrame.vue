<template>
  <div class="awards__main" id="awards__main">
    <div class="award__block">
      <div class="award__first-card">
        <div class="first-card">
          <div class="first-card-individual">
            <div>
              {{ lable }}
            </div>
          </div>
        </div>
      </div>
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
              :style="{ backgroundImage: 'url(' + award.url + ')' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <div class="info-wrapper" id="info-wrapper">
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
    <div v-if="line" class="horizontal-line"></div>
  </div>
</template>

<script>
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);

let IS_SCROLLING_DONE = true;
export default {
  props: {
    line: {
      type: Boolean,
      default: true
    },
    awards: {
      type: Array,
      required: true
    },
    lable: {
      type: String,
      required: true
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin);
  },
  methods: {
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
      let cardsWrapper = this.$refs["cards-wrapper"];
      if (IS_SCROLLING_DONE) {
        this.scrollingBck();
        let tl = gsap.timeline({
          onComplete: function() {
            IS_SCROLLING_DONE = true;
          }
        });
        tl.to(cardsWrapper, {
          duration: 0.5,
          scrollTo: `#${$this.awards[0].id}`,
          ease: "power2.inOut"
        });
      }
    },
    scrollingNxt() {
      let $this = this;
      let cardsWrapper = this.$refs["cards-wrapper"];
      IS_SCROLLING_DONE = false;
      return new Promise((resolve, reject) => {
        let tl = gsap.timeline({
          onComplete: function() {
            resolve("Done");
          }
        });
        tl.to(cardsWrapper, {
          duration: 0.5,
          scrollTo: `#${$this.awards[1].id}`,
          ease: "power2.inOut"
        });
      });
    },
    scrollingBck() {
      this.$refs["cards-wrapper"].scrollLeft = 510;
      this.awards.unshift(this.awards.pop());
      IS_SCROLLING_DONE = false;
    }
  }
};
</script>

<style lang="scss" scoped>
#cards-wrapper {
  opacity: 1;
}
#info-wrapper {
  opacity: 1;
}

.awards {
  &__main {
    height: auto;
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

    .award__block {
      display: flex;
      @include breakpoint-down(medium) {
        flex-direction: column;
      }
    }

    .award__first-card {
      padding-top: 5.3125rem;
      @include breakpoint-down(medium) {
        display: flex;
        justify-content: center;
        padding-top: 1.875rem;
      }
      .first-card {
        & > div {
          margin-right: 28px;
          @include breakpoint-down(medium) {
            margin-right: 0;
          }
        }
        &-individual {
          display: inline-block;
          position: relative;
          width: 14.5625rem;
          height: 20.6875rem;
          background-color: $blue-color;

          @include breakpoint-down(medium) {
            width: 14.5625rem;
            height: 5rem;
            margin-top: 40px;
            margin-bottom: -40px;
            background-color: $transparent-color;
          }

          @include breakpoint-down(small) {
            margin-top: 20px;
          }

          :nth-child(1) {
            position: absolute;
            width: 90%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 19px;
            font-weight: bold;
            line-height: 1.25;
            letter-spacing: -0.29px;
            text-align: center;
            @include breakpoint-down(small) {
              font-size: 16px;
            }
          }

          &::before {
            content: url("/logos/awards.svg");
            position: absolute;
            top: -5%;
            left: 50%;
            transform: translate(-50%);
            @include breakpoint-down(medium) {
              transform: scale(0.5);
              top: -75%;
              left: 34%;
            }
            @include breakpoint-down(small) {
              transform: scale(0.4);
              top: -70%;
              left: 34%;
            }
          }
        }
      }
    }

    .protectore-wrapper-relative {
      position: relative;
      overflow-x: hidden;
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
      width: 3730px;
      & > div:not(:last-child) {
        margin-right: 28px;
      }
      &-individual {
        display: inline-block;
        position: relative;
        width: 481px;
        height: 330px;
        background-color: $blue-color;
        background-repeat: no-repeat;
        background-size: cover;

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
      }
    }

    .info-wrapper {
      display: flex;
      justify-content: flex-end;
      margin-top: 36px;

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

    .horizontal-line {
      width: 100%;
      height: 1px;
      margin-top: 47px;
      margin-bottom: 30px;
      background-color: $white-color;
      opacity: 0.24;
    }
  }
}
</style>
