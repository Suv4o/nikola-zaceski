<template>
  <main>
    <News id="news-section" />
    <About id="about-section" />
    <Awards id="awards-section" />
    <Music id="music-section" />
    <Discography id="discography-section" />
    <Activism id="activism-section" />
    <EventsAndTours id="events-and-tours-section" />
    <Booking id="booking-section" />
    <HamburgerBtn />
    <LanguageBtn />
    <transition
      v-on:enter="gsapTransitionEnter"
      v-on:leave="gsapTransitionLeave"
    >
      <AbsoluteSignature v-if="isAbsoluteShown" id="absolute-signature" />
    </transition>
  </main>
</template>

<script>
import { mapMutations } from "vuex";
import News from "@/components/Home/News.vue";
import About from "@/components/Home/About.vue";
import Awards from "@/components/Home/Awards.vue";
import Music from "@/components/Home/Music.vue";
import Discography from "@/components/Home/Discography.vue";
import Activism from "@/components/Home/Activism.vue";
import EventsAndTours from "@/components/Home/EventsAndTours.vue";
import Booking from "@/components/Home/Booking.vue";
import HamburgerBtn from "@/components/ReusableUIs/hamburgerBtn.vue";
import LanguageBtn from "@/components/ReusableUIs/languagesBtn.vue";
import AbsoluteSignature from "@/components/ReusableUIs/absoluteSignature.vue";

export default {
  components: {
    News,
    About,
    Awards,
    Music,
    Discography,
    Activism,
    EventsAndTours,
    Booking,
    HamburgerBtn,
    LanguageBtn,
    AbsoluteSignature
  },
  data() {
    return {
      isFloatingMenuToggled: false
    };
  },
  mounted() {
    let $this = this;
    gsap.registerPlugin(ScrollTrigger);

    this.scrollToTheTopOfTheSection();

    setTimeout(() => {
      ScrollTrigger.refresh();
      if (window.innerHeight < 1100) {
        this.isSignatureToogled = false;
      }
    }, 1000);

    ScrollTrigger.matchMedia({
      "(min-width: 62em) and (min-height: 31.25em)": function() {
        $this.gsapOnScrollLarge();
        $this.gsapOnScrollLargeGeneral();
      }
    });
    ScrollTrigger.matchMedia({
      "(min-width: 21.875em) and (max-width: 61.9375em) and (min-height: 31.25em)": function() {
        $this.gsapOnScrollSmall();
        $this.gsapOnScrollSmallGeneral();
      }
    });
  },
  destroyed() {
    this.isSignatureToogled = false;
    ScrollTrigger.clearMatchMedia(
      "(min-width: 62em) and (min-height: 31.25em)"
    );
    ScrollTrigger.clearMatchMedia(
      "(min-width: 21.875em) and (max-width: 61.9375em) and (min-height: 31.25em)"
    );
  },
  methods: {
    ...mapMutations({
      toggleSignature: "toggleMenu/UPDATE_THE_STORE_SIGNATURE",
      titleMenu: "titleMenu/UPDATE_THE_STORE_MENU"
    }),

    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#news-section", autoKill: true },
        ease: "power4.out"
      });
    },

    gsapOnScrollLargeGeneral() {
      let $this = this;

      gsap.to("#about-section", {
        scrollTrigger: {
          trigger: "#about-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledAbout) {
              $this.onEnterSection({ title: "About", link: "/about" });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onUpdate: function() {
            if (!$this.isToggledAbout) {
              $this.onEnterSection({ title: "About", link: "/about" });
            }
          },
          onEnterBack: function() {
            if (!$this.isToggledAbout) {
              $this.onEnterSection({ title: "About", link: "/about" });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#awards-section", {
        scrollTrigger: {
          trigger: "#awards-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledAwards) {
              $this.onEnterSection({ title: "Awards", link: "/awards" });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledAwards) {
              $this.onEnterSection({ title: "Awards", link: "/awards" });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledAwards) {
              $this.onEnterSection({ title: "Awards", link: "/awards" });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#music-section", {
        scrollTrigger: {
          trigger: "#music-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledMusic) {
              $this.onEnterSection({ title: "Music", link: "/music" });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledMusic) {
              $this.onEnterSection({ title: "Music", link: "/music" });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledMusic) {
              $this.onEnterSection({ title: "Music", link: "/music" });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#discography-section", {
        scrollTrigger: {
          trigger: "#discography-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledDiscography) {
              $this.onEnterSection({
                title: "Discography",
                link: "/discography"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledDiscography) {
              $this.onEnterSection({
                title: "Discography",
                link: "/discography"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledDiscography) {
              $this.onEnterSection({
                title: "Discography",
                link: "/discography"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#activism-section", {
        scrollTrigger: {
          trigger: "#activism-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Activism",
                link: "/activism"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Activism",
                link: "/activism"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Activism",
                link: "/activism"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#events-and-tours-section", {
        scrollTrigger: {
          trigger: "#events-and-tours-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledEventsAndTours) {
              $this.onEnterSection({
                title: "Events And Tours",
                link: "/eventsandtours"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledEventsAndTours) {
              $this.onEnterSection({
                title: "Events And Tours",
                link: "/eventsandtours"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledEventsAndTours) {
              $this.onEnterSection({
                title: "Events And Tours",
                link: "/eventsandtours"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#booking-section", {
        scrollTrigger: {
          trigger: "#booking-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledBooking) {
              $this.onEnterSection({
                title: "Booking",
                link: "/booking"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledBooking) {
              $this.onEnterSection({
                title: "Booking",
                link: "/booking"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledBooking) {
              $this.onEnterSection({
                title: "Booking",
                link: "/booking"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });
    },

    gsapOnScrollSmallGeneral() {
      let $this = this;

      gsap.to("#about-section", {
        scrollTrigger: {
          trigger: "#about-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledAbout) {
              $this.onEnterSection({ title: "About", link: "/about" });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledAbout) {
              $this.onEnterSection({ title: "About", link: "/about" });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledAbout) {
              $this.onEnterSection({ title: "About", link: "/about" });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#awards-section", {
        scrollTrigger: {
          trigger: "#awards-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledAwards) {
              $this.onEnterSection({ title: "Awards", link: "/awards" });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledAwards) {
              $this.onEnterSection({ title: "Awards", link: "/awards" });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledAwards) {
              $this.onEnterSection({ title: "Awards", link: "/awards" });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#music-section", {
        scrollTrigger: {
          trigger: "#music-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledMusic) {
              $this.onEnterSection({ title: "Music", link: "/music" });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledMusic) {
              $this.onEnterSection({ title: "Music", link: "/music" });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledMusic) {
              $this.onEnterSection({ title: "Music", link: "/music" });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#discography-section", {
        scrollTrigger: {
          trigger: "#discography-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledDiscography) {
              $this.onEnterSection({
                title: "Discography",
                link: "/discography"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledDiscography) {
              $this.onEnterSection({
                title: "Discography",
                link: "/discography"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledDiscography) {
              $this.onEnterSection({
                title: "Discography",
                link: "/discography"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#activism-section", {
        scrollTrigger: {
          trigger: "#activism-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Activism",
                link: "/activism"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Activism",
                link: "/activism"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Activism",
                link: "/activism"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#events-and-tours-section", {
        scrollTrigger: {
          trigger: "#events-and-tours-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledEventsAndTours) {
              $this.onEnterSection({
                title: "Events And Tours",
                link: "/eventsandtours"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Events And Tours",
                link: "/eventsandtours"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledActivism) {
              $this.onEnterSection({
                title: "Events And Tours",
                link: "/eventsandtours"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });

      gsap.to("#booking-section", {
        scrollTrigger: {
          trigger: "#booking-section",
          start: "top top",
          end: "bottom top",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: function() {
            if (!$this.isToggledBooking) {
              $this.onEnterSection({
                title: "Booking",
                link: "/booking"
              });
            }
          },
          onUpdate: function() {
            if (!$this.isToggledBooking) {
              $this.onEnterSection({
                title: "Booking",
                link: "/booking"
              });
            }
          },
          onLeave: () => $this.onLeaveSection(),
          onEnterBack: function() {
            if (!$this.isToggledBooking) {
              $this.onEnterSection({
                title: "Booking",
                link: "/booking"
              });
            }
          },
          onLeaveBack: () => $this.onLeaveSection()
        }
      });
    },

    gsapOnScrollLarge() {
      let $this = this;

      gsap.to("#news__main-signature", {
        scrollTrigger: {
          trigger: "#news__main-signature",
          start: "bottom bottom",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: () => ($this.isSignatureToogled = true),
          onLeaveBack: () => ($this.isSignatureToogled = false)
        }
      });
    },

    gsapOnScrollSmall() {
      let $this = this;

      gsap.to("#news__main-signature", {
        scrollTrigger: {
          trigger: "#news__main-signature",
          start: "top center",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: () => ($this.isSignatureToogled = true),
          onLeaveBack: () => ($this.isSignatureToogled = false)
        }
      });

      gsap.to("#footer-section", {
        scrollTrigger: {
          trigger: "#footer-section",
          start: "34% bottom",
          // markers: true,
          toggleActions: "restart pause reverse pause",
          onEnter: () => ($this.isSignatureToogled = false),
          onLeaveBack: () => ($this.isSignatureToogled = true)
        }
      });
    },
    gsapTransitionEnter() {
      let $this = this;

      gsap.to("#absolute-signature", {
        duration: 0.5,
        opacity: 1,
        ease: "power4.out"
      });
    },
    gsapTransitionLeave() {
      let $this = this;

      gsap.to("#absolute-signature", {
        duration: 0.5,
        opacity: 0,
        ease: "power4.out"
      });
    },

    onEnterSection(value) {
      if (
        !this.isToggledAbout ||
        !this.isToggledAwards ||
        !this.isToggledMusic ||
        !this.isToggledDiscography ||
        !this.isToggledActivism ||
        !this.isToggledEventsAndTours ||
        !this.isToggledBooking
      ) {
        this.titleMenu({ title: value.title, link: value.link });
      } else {
        this.titleMenu({ title: "", link: "" });
      }
    },

    onLeaveSection() {
      this.titleMenu({ title: "", link: "" });
    }
  },
  computed: {
    isToggledNews() {
      return this.$store.state.toggleMenu.isToggledNews;
    },
    isToggledAbout() {
      return this.$store.state.toggleMenu.isToggledAbout;
    },
    isToggledAwards() {
      return this.$store.state.toggleMenu.isToggledAwards;
    },
    isToggledMusic() {
      return this.$store.state.toggleMenu.isToggledMusic;
    },
    isToggledDiscography() {
      return this.$store.state.toggleMenu.isToggledDiscography;
    },
    isToggledActivism() {
      return this.$store.state.toggleMenu.isToggledActivism;
    },
    isToggledEventsAndTours() {
      return this.$store.state.toggleMenu.isToggledEventsAndTours;
    },
    isToggledBooking() {
      return this.$store.state.toggleMenu.isToggledBooking;
    },
    isSignatureToogled: {
      get: function() {
        return this.$store.state.toggleMenu.isSignatureToogled;
      },
      set: function(newValue) {
        this.toggleSignature(newValue);
      }
    },
    menuValue() {
      return this.$store.state.titleMenu.menuValue;
    },
    isAbsoluteShown() {
      if (
        this.isToggledNews &&
        this.isToggledAbout &&
        this.isToggledAwards &&
        this.isToggledMusic &&
        this.isToggledDiscography &&
        this.isToggledActivism &&
        this.isToggledEventsAndTours &&
        this.isToggledBooking
      ) {
        return false;
      } else if (
        this.isToggledNews &&
        !this.isToggledAbout &&
        !this.isToggledAwards &&
        !this.isToggledMusic &&
        !this.isToggledDiscography &&
        !this.isToggledActivism &&
        !this.isToggledEventsAndTours &&
        !this.isToggledBooking
      ) {
        return true;
      } else {
        return this.isFloatingMenuToggled;
      }
    }
  },
  watch: {
    isSignatureToogled(newValue, oldValue) {
      if (
        !this.isToggledNews ||
        !this.isToggledAbout ||
        !this.isToggledAwards ||
        !this.isToggledMusic ||
        !this.isToggledDiscography ||
        !this.isToggledActivism ||
        !this.isToggledEventsAndTours ||
        !this.isToggledBooking
      ) {
        this.isFloatingMenuToggled = this.isSignatureToogled;
      } else {
        this.isFloatingMenuToggled = false;
      }
    }
  }
};
</script>

<style lang="scss">
#absolute-signature {
  opacity: 0;
}
</style>
