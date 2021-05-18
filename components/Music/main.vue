<template>
  <section class="container section">
    <div class="music" id="home-music">
      <div class="music__line" id="menu-stagger-links"></div>
      <div class="music__header">
        <div aria-label="Music Menu">
          <div class="music__header-left">
            <div class="music__header-left-number">04</div>
            <h2 class="music__header-left-title">music</h2>
          </div>
        </div>
        <div class="music__header-right">
          <nuxt-link to="/" class="music__header-right-link">
            <div>Back</div>
          </nuxt-link>
        </div>
      </div>
      <div class="music__main" id="music__main">
        <div class="filter-menu">
          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="18"
              viewBox="0 0 27 18"
            >
              <path
                id="Icon_material-filter-list"
                data-name="Icon material-filter-list"
                d="M15,27h6V24H15ZM4.5,9v3h27V9ZM9,19.5H27v-3H9Z"
                transform="translate(-4.5 -9)"
                fill="#fff"
              />
            </svg>
          </div>
          <button
            class="text"
            :class="`${isAll ? 'text--selected' : ''}`"
            @click="getFilteredArr('all')"
          >
            All
          </button>
          <button
            class="text"
            :class="`${isPop ? 'text--selected' : ''}`"
            @click="getFilteredArr('all')"
          >
            Pop
          </button>
          <button
            class="text"
            :class="`${isTraditional ? 'text--selected' : ''}`"
            @click="getFilteredArr('traditional')"
          >
            Traditional
          </button>
          <button
            class="text"
            :class="`${isClassical ? 'text--selected' : ''}`"
            @click="getFilteredArr('classical')"
          >
            Classical
          </button>
          <button
            class="text"
            :class="`${isInterview ? 'text--selected' : ''}`"
            @click="getFilteredArr('interview')"
          >
            Interview
          </button>
        </div>
        <div class="protectore-wrapper-relative">
          <div
            class="protectore-wrapper-absolute"
            v-touch:swipe.left="scrollNext"
            v-touch:swipe.right="scrollBack"
          ></div>
          <div class="videos-wrapper" ref="videos-wrapper" id="videos-wrapper">
            <transition name="fade">
              <div class="videos" v-if="isTransition">
                <MusicCards
                  v-for="(video, index) in filteredArr"
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
            </transition>
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
      isTransition: true,
      isAll: true,
      isPop: false,
      isTraditional: false,
      isClassical: false,
      isInterview: false,
      filteredArr: [],
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
          id: `video-1`,
          filter: `pop`
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
          id: `video-2`,
          filter: `pop`
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
          id: `video-3`,
          filter: `pop`
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
          id: `video-4`,
          filter: `pop`
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
          id: `video-5`,
          filter: `pop`
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
          id: `video-6`,
          filter: `pop`
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
          id: `video-7`,
          filter: `traditional`
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
          id: `video-8`,
          filter: `traditional`
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
          id: `video-9`,
          filter: `traditional`
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
          id: `video-10`,
          filter: `classical`
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
          id: `video-11`,
          filter: `classical`
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
          id: `video-12`,
          filter: `classical`
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
          id: `video-13`,
          filter: `classical`
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
          id: `video-14`,
          filter: `interview`
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
          id: `video-15`,
          filter: `interview`
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
          id: `video-16`,
          filter: `interview`
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
          id: `video-17`,
          filter: `interview`
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
          id: `video-18`,
          filter: `interview`
        }
      ]
    };
  },
  mounted() {
    this.getFilteredArr("all");
  },
  methods: {
    ...mapMutations({
      toggleMutationMusic: "toggleMenu/UPDATE_THE_STORE_MUSIC"
    }),
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-music", autoKill: true },
        ease: "power4.out"
      });
    },
    scrollNext() {
      let $this = this;
      if (IS_SCROLLING_DONE) {
        this.scrollingNxt().then(function() {
          $this.filteredArr.push($this.filteredArr.shift());
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
          scrollTo: `#${$this.filteredArr[0].id}`,
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
          scrollTo: `#${$this.filteredArr[1].id}`,
          ease: "power2.inOut"
        });
      });
    },
    scrollingBck() {
      this.$refs["videos-wrapper"].scrollLeft = 480;
      this.filteredArr.unshift(this.filteredArr.pop());
      IS_SCROLLING_DONE = false;
    },
    getFilteredArr(filteredValue) {
      if (filteredValue === "all") {
        this.isAll = true;
        this.isPop = false;
        this.isTraditional = false;
        this.isClassical = false;
        this.isInterview = false;
      } else if (filteredValue === "pop") {
        this.isAll = false;
        this.isPop = true;
        this.isTraditional = false;
        this.isClassical = false;
        this.isInterview = false;
      } else if (filteredValue === "traditional") {
        this.isAll = false;
        this.isPop = false;
        this.isTraditional = true;
        this.isClassical = false;
        this.isInterview = false;
      } else if (filteredValue === "classical") {
        this.isAll = false;
        this.isPop = false;
        this.isTraditional = false;
        this.isClassical = true;
        this.isInterview = false;
      } else if (filteredValue === "interview") {
        this.isAll = false;
        this.isPop = false;
        this.isTraditional = false;
        this.isClassical = false;
        this.isInterview = true;
      }
      this.isTransition = false;
      this.$nextTick(() => {
        this.isTransition = true;
      });
      filteredValue === "all"
        ? (this.filteredArr = this.videos)
        : (this.filteredArr = this.videos.filter(
            video => video.filter === filteredValue
          ));
    }
  },
  computed: {
    isToggledMusic() {
      return this.$store.state.toggleMenu.isToggledMusic;
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
    .filter-menu {
      display: flex;
      margin-top: 2.1875rem;
      @include breakpoint-down(medium) {
        .icon {
          display: flex;
          justify-content: center;
          align-content: center;
          svg {
            width: 80%;
            height: 80%;
          }
        }
      }
      @include breakpoint-down(xxsmall) {
        flex-direction: column;
        .icon {
          display: none;
        }
      }
      .text {
        display: inline-block;
        background-color: $transparent-color;
        border: 0;
        cursor: pointer;
        font-size: 1.125rem;
        letter-spacing: -0.32px;
        margin-left: 1.125rem;
        color: $white-70-color;
        transition: 0.3s color ease-in-out;
        @include breakpoint-down(medium) {
          font-size: 1rem;
          margin-left: 1rem;
        }
        @include breakpoint-down(xxsmall) {
          margin-left: 0px;
          margin-top: 0.625rem;
        }
        &--selected {
          color: $white-color;
        }
        &:hover {
          color: $white-color;
        }
      }
    }
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
        padding-top: 2.5rem;
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
      flex-wrap: wrap;
      justify-content: center;

      & > div {
        margin-left: 2.8125rem;
        margin-right: 2.8125rem;
        margin-bottom: 3.9375rem;
      }

      @include breakpoint-down(xlarge) {
        & > div {
          margin-left: 0.9375rem;
          margin-right: 0.9375rem;
          margin-bottom: 2.5rem;
        }
      }

      @include breakpoint-down(large) {
        display: block;
        width: 616.5625rem;
        & > div {
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 0;
        }
        & > div:not(:last-child) {
          margin-right: 5.6875rem;
        }
      }

      & > div:not(:last-child) {
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
      @include breakpoint-up(xlarge) {
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
