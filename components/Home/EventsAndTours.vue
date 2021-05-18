<template>
  <section class="container section">
    <div class="events-and-tours" id="home-events-and-tours">
      <div class="events-and-tours__line" id="menu-stagger-links"></div>
      <div class="events-and-tours__header">
        <div aria-label="Events And Tours Menu" @click="toggleOnOff">
          <div class="events-and-tours__header-left">
            <div class="events-and-tours__header-left-number">07</div>
            <h2 class="events-and-tours__header-left-title">
              events and tours
            </h2>
            <div class="events-and-tours__header-left-info">
              Balkan Tour 2021
            </div>
          </div>
        </div>
        <div class="events-and-tours__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledEventsAndTours"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="events-and-tours__header-right-arrow-down"
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
            v-if="!isToggledEventsAndTours"
            to="/"
            class="events-and-tours__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="events-and-tours__main" id="events-and-tours__main">
        <div
          class="events-and-tours__main-content"
          id="events-and-tours__main-content"
        >
          <div class="upcoming-events">
            <div class="upcoming-events__title">Upcoming Events</div>
            <div
              class="upcoming-events__body"
              v-for="(event, index) in upcomingEvents"
              :key="index"
            >
              <div class="event__name">{{ event.name }}</div>
              <div class="event__location">{{ event.location }}</div>
              <div class="times">
                <div class="event__time-1">{{ event.time1 }}</div>
                <div class="event__time-2">{{ event.time2 }}</div>
              </div>
              <nuxt-link to="/" class="event__button-action">{{
                event.actionButton
              }}</nuxt-link>
            </div>
          </div>
          <div class="past-events">
            <div class="past-events__title">Past Events</div>
            <div
              class="past-events__body"
              v-for="(event, index) in pastEvents"
              :key="index"
            >
              <div class="event__name">{{ event.name }}</div>
              <div class="event__location">{{ event.location }}</div>
              <div class="event__button-action">{{ event.actionButton }}</div>
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
  data() {
    return {
      upcomingEvents: [
        {
          name: "The Play March 29th",
          location: "Online",
          time1: "19:30",
          time2: "23:30",
          actionButton: "TICKETS"
        }
      ],
      pastEvents: [
        {
          name: "Detska nasmevka March 29th",
          location: "Melbourne, Australia",
          actionButton: "TICKETS"
        }
      ]
    };
  },
  mounted() {
    if (!this.isToggledEventsAndTours) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationEventsAndTours:
        "toggleMenu/UPDATE_THE_STORE_EVENTS_AND_TOURS"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationEventsAndTours({
        isToggledEventsAndTours: !this.isToggledEventsAndTours
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-events-and-tours", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#events-and-tours__main", {
        height: "auto",
        ease: "power4.out",
        duration: 2
      }).to(
        "#events-and-tours__main-content",
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
    isToggledEventsAndTours() {
      return this.$store.state.toggleMenu.isToggledEventsAndTours;
    }
  },
  watch: {
    isToggledEventsAndTours(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#events-and-tours__main");
        let tl = gsap.timeline();
        tl.to("#events-and-tours__main-content", {
          opacity: 0,
          ease: "power4.out",
          duration: 1
        }).to(
          "#events-and-tours__main",
          {
            height: "0px",
            ease: "power4.out",
            duration: 2
          },
          "-=0.5"
        );
      } else {
        let tl = gsap.timeline();
        tl.to("#events-and-tours__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        }).to(
          "#events-and-tours__main-content",
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
#events-and-tours__main-content {
  opacity: 0;
}

.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.events-and-tours {
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
    .upcoming-events {
      &__title {
        margin: 0px 7.15625rem 2.43125rem 0px;
        padding-top: 2.5rem;
        font-size: 2.875rem;
        font-weight: 500;
        line-height: 1.04;
        letter-spacing: -0.82px;

        @include breakpoint-down(medium) {
          font-size: 2.25rem;
        }

        @include breakpoint-down(small) {
          padding-left: 2.1875rem;
        }
      }

      &__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,w_1600,f_auto,e_sharpen:100/v1607228941/HomeScreen/events-and-tours-pattern");
        width: 100%;
        height: 6.4375rem;
        margin: 2.43125rem 5.30625rem 3.13125rem 0px;
        padding: 0.94375rem 2.06875rem 1.05625rem 2.575rem;

        @include breakpoint-down(medium) {
          flex-direction: column;
          background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,w_1600,f_auto,e_sharpen:100/v1607338180/HomeScreen/events-and-tours-pattern-small");
          height: 21.875rem;
        }

        @include breakpoint-down(small) {
          align-items: flex-start;
        }

        .times {
          display: flex;
        }

        .event {
          &__name {
            width: 8.875rem;
            font-size: 1.75rem;
            font-weight: 300;
            line-height: 1.21;
            letter-spacing: -0.5px;

            @include breakpoint-down(medium) {
              text-align: center;
            }

            @include breakpoint-down(small) {
              text-align: left;
            }
          }

          &__location {
            width: 4.625rem;
            font-size: 1.75rem;
            font-weight: 300;
            line-height: 1.21;
            letter-spacing: -0.5px;

            @include breakpoint-down(medium) {
              text-align: center;
            }

            @include breakpoint-down(small) {
              text-align: left;
            }
          }

          &__time-1 {
            width: 7.6875rem;
            height: 2.5625rem;
            margin: 0 0.25rem 0 0;
            padding: 0.3125rem 1.8125rem 0px 1.875rem;
            background-color: $gold-color;
            font-size: 1.6875rem;
            font-weight: 300;
            line-height: 1.22;
            letter-spacing: -0.48px;
          }

          &__time-2 {
            width: 7.6875rem;
            height: 2.5625rem;
            padding: 0.3125rem 1.8125rem 0px 1.875rem;
            background-color: $gold-color;
            font-size: 1.6875rem;
            font-weight: 300;
            line-height: 1.22;
            letter-spacing: -0.48px;
          }

          &__button-action {
            width: 9.25rem;
            height: 2.5625rem;
            padding: 0.6875rem 0px 0px 0px;
            font-size: 1.1875rem;
            font-weight: 300;
            line-height: 1.05;
            letter-spacing: -0.34px;
            text-align: center;
            color: $deep-blue-color;
            border: solid 1px $white-color;
            background-color: $white-color;
            transition: 0.3s all ease-in-out;

            &:hover {
              color: $white-color;
              border: solid 1px $gold-color;
              background-color: $deep-blue-color;
            }
          }
        }
      }
    }

    .past-events {
      padding-bottom: 3.5625rem;

      &__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        height: 6.4375rem;
        margin: 2.43125rem 5.30625rem 0px 0px;
        padding: 0.94375rem 2.06875rem 1.05625rem 0px;

        @include breakpoint-down(large) {
          width: 100%;
        }

        @include breakpoint-down(medium) {
          flex-direction: column;
          height: 18.75rem;
        }

        @include breakpoint-down(small) {
          align-items: flex-start;
          padding-left: 2.1875rem;
        }
      }

      &__title {
        margin: 3.4375rem 1.40625rem 1rem 0px;
        font-size: 2.875rem;
        font-weight: 500;
        line-height: 1.04;
        letter-spacing: -0.82px;

        @include breakpoint-down(medium) {
          font-size: 2.25rem;
        }

        @include breakpoint-down(small) {
          padding-left: 2.1875rem;
        }
      }

      .event {
        &__name {
          width: 15.625rem;
          font-size: 1.75rem;
          font-weight: 300;
          line-height: 1.21;
          letter-spacing: -0.5px;

          @include breakpoint-down(medium) {
            text-align: center;
          }

          @include breakpoint-down(small) {
            text-align: left;
          }
        }

        &__location {
          width: 13.125rem;
          font-size: 1.75rem;
          font-weight: 300;
          line-height: 1.21;
          letter-spacing: -0.5px;

          @include breakpoint-down(medium) {
            text-align: center;
          }

          @include breakpoint-down(small) {
            text-align: left;
          }
        }

        &__button-action {
          width: 9.25rem;
          height: 2.5625rem;
          padding: 0.6875rem 0px 0px 0px;
          font-size: 1.1875rem;
          font-weight: 300;
          line-height: 1.05;
          letter-spacing: -0.34px;
          text-align: center;
          color: $deep-blue-color;
          border: solid 1px $less-deep-blue-color;
          background-color: $less-deep-blue-color;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
