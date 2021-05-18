<template>
  <button
    @click="closeAll"
    class="nav__hamburger-button"
    aria-label="Hamburger Menu Button"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      toggleMutationNews: "toggleMenu/UPDATE_THE_STORE_NEWS",
      toggleMutationAbout: "toggleMenu/UPDATE_THE_STORE_ABOUT",
      toggleMutationAwards: "toggleMenu/UPDATE_THE_STORE_AWARDS",
      toggleMutationMusic: "toggleMenu/UPDATE_THE_STORE_MUSIC",
      toggleMutationDiscography: "toggleMenu/UPDATE_THE_STORE_DISCOGRAPHY",
      toggleMutationActivism: "toggleMenu/UPDATE_THE_STORE_ACTIVISM",
      toggleMutationBooking: "toggleMenu/UPDATE_THE_STORE_BOOKING",
      toggleMutationEventsAndTours:
        "toggleMenu/UPDATE_THE_STORE_EVENTS_AND_TOURS"
    }),
    closeAll() {
      this.toggleMutationNews({ isToggledNews: true });
      this.toggleMutationAbout({ isToggledAbout: true });
      this.toggleMutationAwards({ isToggledAwards: true });
      this.toggleMutationMusic({ isToggledMusic: true });
      this.toggleMutationDiscography({ isToggledDiscography: true });
      this.toggleMutationActivism({ isToggledActivism: true });
      this.toggleMutationEventsAndTours({ isToggledEventsAndTours: true });
      this.toggleMutationBooking({ isToggledBooking: true });
      this.scrollToTheTopOfTheSite();
    },
    scrollToTheTopOfTheSite() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0, autoKill: true },
        ease: "power4.out"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.nav__hamburger-button {
  position: fixed;
  top: 4.0625rem;
  left: 3%;
  z-index: 3;
  cursor: pointer;
  background-color: $transparent-color;
  border: 0;
  transition: all 0.5s ease-in-out;

  @include breakpoint-down(small) {
    top: 1.5rem;
    left: 2%;
  }

  &:hover {
    > span {
      background-color: $gold-color;
    }
  }

  > span {
    display: block;
    width: 2.5rem;
    height: 0.25rem;
    background-color: $white-color;
    transition: all 500ms ease-in-out;
    transform-origin: 4px 2px;
    &:not(:last-child) {
      margin-bottom: 0.4375rem;
    }

    @include breakpoint-down(medium) {
      width: 2rem;
      height: 0.2rem;
      &:not(:last-child) {
        margin-bottom: 0.35rem;
      }
    }

    @include breakpoint-down(small) {
      width: 1.6rem;
      height: 0.16rem;
      &:not(:last-child) {
        margin-bottom: 0.3rem;
      }
    }
  }
}
</style>
