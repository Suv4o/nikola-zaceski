<template>
  <section class="container section">
    <div class="music" id="home-music">
      <div class="music__line" id="menu-stagger-links"></div>
      <div class="music__header">
        <div aria-label="Music Menu" @click="toggleOnOff">
          <div class="music__header-left">
            <div class="music__header-left-number">04</div>
            <h2 class="music__header-left-title">music</h2>
          </div>
        </div>
        <div class="music__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledMusic"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="music__header-right-arrow-down"
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
            v-if="!isToggledMusic"
            to="/music"
            class="music__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="music__main" id="music__main">
        <div class="protectore-wrapper-relative">
          <div
            class="protectore-wrapper-absolute"
            v-touch:swipe.left="scrollNext"
            v-touch:swipe.right="scrollBack"
          ></div>
          <div class="videos-wrapper" ref="videos-wrapper" id="videos-wrapper">
            <div class="videos">
              <MusicCards
                v-for="(video, index) in videos"
                :key="index"
                :imgUrl="video.imgUrl"
                :id="video.id"
                :youtubeChannel="video.youtubeChannel"
                :name="video.name"
                :shareLink="video.shareLink"
                :youtubeSong="video.youtubeSong"
                :title="video.title"
                :time="video.time"
              />
            </div>
          </div>
        </div>
        <div class="arrows-wrapper">
          <div class="arrows" id="music-arrows">
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
      </div>
    </div>
  </section>
</template>

<script>
import MusicCards from "@/components/ReusableUIs/music-cards.vue";
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
import { mapMutations } from "vuex";
Vue.use(Vue2TouchEvents);

let IS_SCROLLING_DONE = true;
export default {
  components: {
    MusicCards
  },
  data() {
    return {
      videos: [
        {
          name: `Nikola Zaceski`,
          youtubeChannel: "/",
          youtubeSong: "/",
          shareLink: "/",
          title: `"Na Veligden" & "Kilometri" (Cover)`,
          time: `2:50`,
          imgUrl: `https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_389,e_sharpen:100/v1605181099/HomeScreen/video-thumbnail`,
          link: `/`,
          id: `video-1`
        },
        {
          name: `Nikola Zaceski`,
          youtubeChannel: "/",
          youtubeSong: "/",
          shareLink: "/",
          title: `"Na Veligden" & "Kilometri" (Cover)`,
          time: `2:50`,
          imgUrl: `https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_389,e_sharpen:100/v1605181099/HomeScreen/video-thumbnail`,
          link: `/`,
          id: `video-2`
        },
        {
          name: `Nikola Zaceski`,
          youtubeChannel: "/",
          youtubeSong: "/",
          shareLink: "/",
          title: `"Na Veligden" & "Kilometri" (Cover)`,
          time: `2:50`,
          imgUrl: `https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_389,e_sharpen:100/v1605181099/HomeScreen/video-thumbnail`,
          link: `/`,
          id: `video-3`
        }
      ]
    };
  },
  mounted() {
    if (!this.isToggledMusic) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationMusic: "toggleMenu/UPDATE_THE_STORE_MUSIC"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationMusic({
        isToggledMusic: !this.isToggledMusic
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-music", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#music__main", {
        height: "auto",
        ease: "power4.out",
        duration: 2
      })
        .to(
          "#videos-wrapper",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=1"
        )
        .to(
          "#music-arrows",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=0.7"
        );
    },
    scrollNext() {
      let $this = this;
      if (IS_SCROLLING_DONE) {
        this.scrollingNxt().then(function() {
          $this.videos.push($this.videos.shift());
          $this.$refs["videos-wrapper"].scrollLeft = 0;
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
        tl.to(".videos-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.videos[0].id}`,
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
        tl.to(".videos-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.videos[1].id}`,
          ease: "power2.inOut"
        });
      });
    },
    scrollingBck() {
      this.$refs["videos-wrapper"].scrollLeft = 480;
      this.videos.unshift(this.videos.pop());
      IS_SCROLLING_DONE = false;
    }
  },
  computed: {
    isToggledMusic() {
      return this.$store.state.toggleMenu.isToggledMusic;
    }
  },
  watch: {
    isToggledMusic(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#music__main");
        let tl = gsap.timeline();
        tl.to("#music-arrows", {
          opacity: 0,
          ease: "power4.out",
          duration: 1
        })
          .to(
            "#videos-wrapper",
            {
              opacity: 0,
              ease: "power4.out",
              duration: 1
            },
            "-=0.7"
          )
          .to(
            "#music__main",
            {
              height: "0px",
              ease: "power4.out",
              duration: 2
            },
            "-=0.5"
          );
      } else {
        let tl = gsap.timeline();
        tl.to("#music__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        })
          .to(
            "#videos-wrapper",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#music-arrows",
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
#videos-wrapper {
  opacity: 0;
}

.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.music {
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
    .videos-wrapper {
      padding-top: 3.125rem;
      padding-bottom: 5.5625rem;
      max-width: 100%;
      overflow-x: hidden;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      @include breakpoint-down(medium) {
        padding-top: 0px;
        padding-bottom: 1.875rem;
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
    .videos {
      display: flex;
      justify-content: center;
      @media (max-width: 105.625em) {
        display: block;
        width: 116.5625rem;
      }
      & > div:not(:last-child) {
        margin-right: 5.6875rem;
        @include breakpoint-down(medium) {
          margin-right: 0.9375rem;
        }
      }
    }

    .arrows-wrapper {
      display: flex;
      justify-content: flex-end;
      @include breakpoint-down(medium) {
        justify-content: center;
      }
    }

    .arrows {
      display: flex;
      justify-content: space-between;
      padding-bottom: 3.125rem;
      width: 5.8125rem;
      opacity: 0;
      @media (min-width: 105.625em) {
        display: none;
      }

      button {
        display: flex;
        align-items: center;
        background-color: $transparent-color;
        border: none;
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
}
</style>
