<template>
  <section class="container section">
    <div class="awards" id="home-awards">
      <div class="awards__line" id="menu-stagger-links"></div>
      <div class="awards__header">
        <div aria-label="Awards Menu">
          <div class="awards__header-left">
            <div class="awards__header-left-number">03</div>
            <h2 class="awards__header-left-title">awards</h2>
            <div class="awards__header-left-info">MUSICLAND 2020 V CAT</div>
          </div>
        </div>
        <div class="awards__header-right">
          <nuxt-link to="/" class="awards__header-right-link">
            <div>Back</div>
          </nuxt-link>
        </div>
      </div>
      <AwardsSliderFrame :awards="awards1" :lable="'Won 14 Group Awards'" />
      <AwardsSliderFrame :awards="awards2" :lable="'Won 12'" :line="false" />
    </div>
  </section>
</template>

<script>
import AwardsSliderFrame from "@/components/ReusableUIs/awardsSliderFrame";

export default {
  components: {
    AwardsSliderFrame
  },
  data() {
    return {
      awards1: [
        {
          id: `award-1-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921516/Awards/awards-1-1"
        },
        {
          id: `award-2-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921515/Awards/awards-1-2"
        },
        {
          id: `award-3-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921519/Awards/awards-1-3"
        },
        {
          id: `award-4-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921516/Awards/awards-1-1"
        },
        {
          id: `award-5-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921515/Awards/awards-1-2"
        },
        {
          id: `award-6-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921519/Awards/awards-1-3"
        },
        {
          id: `award-7-1`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921516/Awards/awards-1-1"
        }
      ],
      awards2: [
        {
          id: `award-1-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921516/Awards/awards-2-1"
        },
        {
          id: `award-2-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921515/Awards/awards-2-2"
        },
        {
          id: `award-3-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921519/Awards/awards-2-3"
        },
        {
          id: `award-4-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921516/Awards/awards-2-1"
        },
        {
          id: `award-5-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921515/Awards/awards-2-2"
        },
        {
          id: `award-6-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921519/Awards/awards-2-3"
        },
        {
          id: `award-7-2`,
          url:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_481,e_sharpen:100/v1611921516/Awards/awards-2-1"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
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
}
</style>
