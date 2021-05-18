<template>
  <section class="container section">
    <div class="discography" id="home-discography">
      <div class="discography__line" id="menu-stagger-links"></div>
      <div class="discography__header">
        <div aria-label="Discography Menu" @click="toggleOnOff">
          <div class="discography__header-left">
            <div class="discography__header-left-number">05</div>
            <h2 class="discography__header-left-title">discography</h2>
          </div>
        </div>
        <div class="discography__header-right">
          <svg
            @click="toggleOnOff"
            v-if="isToggledDiscography"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="discography__header-right-arrow-down"
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
            v-if="!isToggledDiscography"
            to="/discography"
            class="discography__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="discography__main" id="discography__main">
        <div class="protectore-wrapper-relative">
          <div
            class="protectore-wrapper-absolute"
            v-touch:swipe.left="scrollNext"
            v-touch:swipe.right="scrollBack"
          ></div>
          <div
            class="discographies-wrapper"
            ref="discographies-wrapper"
            id="discographies-wrapper"
          >
            <div class="discographies">
              <div
                class="discographies-individual"
                v-for="(discography, index) in discographies"
                :key="index"
                :id="discography.id"
              >
                <img :src="discography.imgUrl" alt="Discography Cover" />
                <div class="info-box">
                  <div class="lable">
                    {{ discography.lableText }}
                  </div>
                  <div class="title">
                    {{ discography.title }}
                  </div>
                  <div class="details">
                    <div>
                      {{ discography.typeMusic }}
                    </div>
                    <div>
                      {{ discography.typeAlbum }}
                    </div>
                    <div>
                      {{ discography.numberSongs }}
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="play-section-wrapper">
                      <button class="play-section">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.412"
                          height="12"
                          viewBox="0 0 9.412 12"
                        >
                          <path
                            id="Icon_ionic-md-play"
                            data-name="Icon ionic-md-play"
                            d="M6.75,3.656v12l9.412-6Z"
                            transform="translate(-6.75 -3.656)"
                            fill="#fff"
                            opacity="0.21"
                          />
                        </svg>
                        <div class="play-sample">Play a Sample</div>
                      </button>
                      <div class="timeline"></div>
                    </div>
                    <div class="release">{{ discography.release }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="arrows-wrapper">
          <div class="arrows" id="discography-arrows">
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
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
import { mapMutations } from "vuex";
Vue.use(Vue2TouchEvents);

let IS_SCROLLING_DONE = true;
export default {
  data() {
    return {
      discographies: [
        {
          name: `Nikola Zaceski`,
          lableText: "Coming Soon",
          title: `Srceto Moe Tuka Chuka`,
          typeMusic: "Evergreen",
          typeAlbum: "Solo Album",
          numberSongs: "11 Songs",
          release: "Release: May 2021",
          imgUrl: `https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_420,e_sharpen:100/v1606906098/HomeScreen/discography-album-1`,
          id: `discography-1`
        },
        {
          name: `Nikola Zaceski`,
          lableText: "Coming Soon",
          title: `Srceto Moe Tuka Chuka`,
          typeMusic: "Evergreen",
          typeAlbum: "Solo Album",
          numberSongs: "11 Songs",
          release: "Release: May 2021",
          imgUrl: `https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_420,e_sharpen:100/v1606906098/HomeScreen/discography-album-1`,
          id: `discography-2`
        }
      ]
    };
  },
  mounted() {
    if (!this.isToggledDiscography) {
      this.openUpTheSection();
    }
  },
  methods: {
    ...mapMutations({
      toggleMutationDiscography: "toggleMenu/UPDATE_THE_STORE_DISCOGRAPHY"
    }),
    toggleOnOff() {
      let $this = this;

      this.toggleMutationDiscography({
        isToggledDiscography: !this.isToggledDiscography
      });

      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "#home-discography", autoKill: true },
        ease: "power4.out"
      });
    },
    openUpTheSection() {
      let tl = gsap.timeline();
      tl.to("#discography__main", {
        height: "auto",
        ease: "power4.out",
        duration: 2
      })
        .to(
          "#discographies-wrapper",
          {
            opacity: 1,
            ease: "power4.out",
            duration: 1
          },
          "-=1"
        )
        .to(
          "#discography-arrows",
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
          $this.discographies.push($this.discographies.shift());
          $this.$refs["discographies-wrapper"].scrollLeft = 0;
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
        tl.to(".discographies-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.discographies[0].id}`,
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
        tl.to(".discographies-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.discographies[1].id}`,
          ease: "power2.inOut"
        });
      });
    },
    scrollingBck() {
      this.$refs["discographies-wrapper"].scrollLeft = 410;
      this.discographies.unshift(this.discographies.pop());
      IS_SCROLLING_DONE = false;
    }
  },
  computed: {
    isToggledDiscography() {
      return this.$store.state.toggleMenu.isToggledDiscography;
    }
  },
  watch: {
    isToggledDiscography(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#discography__main");
        let tl = gsap.timeline();
        tl.to("#discography-arrows", {
          opacity: 0,
          ease: "power4.out",
          duration: 1
        })
          .to(
            "#discographies-wrapper",
            {
              opacity: 0,
              ease: "power4.out",
              duration: 1
            },
            "-=0.7"
          )
          .to(
            "#discography__main",
            {
              height: "0px",
              ease: "power4.out",
              duration: 2
            },
            "-=0.5"
          );
      } else {
        let tl = gsap.timeline();
        tl.to("#discography__main", {
          height: "auto",
          ease: "power4.out",
          duration: 2
        })
          .to(
            "#discographies-wrapper",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#discography-arrows",
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
#discographies-wrapper {
  opacity: 0;
}

.section {
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.discography {
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
    .discographies-wrapper {
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
    .discographies {
      display: flex;
      justify-content: center;

      @include breakpoint-down(medium) {
        display: block;
        width: 116.5625rem;
      }

      // @media (max-width: 105.625em) {
      //   display: block;
      //   width: 116.5625rem;
      // }

      & > div:not(:last-child) {
        margin-right: 5.6875rem;

        @include breakpoint-down(large) {
          margin-right: 0.625rem;
        }

        @include breakpoint-down(medium) {
          margin-right: 0.9375rem;
        }
      }

      &-individual {
        display: unset;
        position: relative;
        width: 24.875rem;

        @include breakpoint-down(medium) {
          display: inline-block;
        }
        // @media (max-width: 105.625em) {
        //   display: inline-block;
        // }

        img {
          width: 24.875rem;
        }

        // @include breakpoint-down(medium) {
        //   width: 235px;
        //   height: 381px;

        //   img {
        //     width: 235px;
        //   }
        // }

        .info-box {
          position: relative;
          width: 17.0625rem;
          height: 9.6875rem;
          padding: 0.9375rem;
          background-color: $blue-color;
          transform: translate(0, -5px);
          z-index: 3;

          .lable {
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.25;
            letter-spacing: -0.29px;
          }

          .title {
            margin-top: 0.125rem;
            margin-bottom: 0.9375rem;
            font-size: 1.1875rem;
            font-weight: bold;
            line-height: 1.05;
            letter-spacing: -0.34px;
          }

          .details {
            display: flex;
            justify-content: space-between;
            opacity: 0.32;
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 1.43;
            letter-spacing: -0.25px;
          }

          .bottom-section {
            margin-top: 1.25rem;
            display: flex;
            justify-content: space-between;

            .play-section-wrapper {
              .play-section {
                display: flex;
                align-items: center;
                background-color: $transparent-color;
                border: 0;
                cursor: pointer;

                &:hover {
                  path {
                    fill: $gold-color;
                    transition: 0.3s all ease-in-out;
                  }
                  .play-sample {
                    color: $gold-color;
                    transition: 0.3s all ease-in-out;
                  }
                }

                path {
                  transition: 0.3s all ease-in-out;
                }

                .play-sample {
                  margin-left: 0.5rem;
                  font-size: 0.625rem;
                  font-weight: 300;
                  line-height: 2;
                  letter-spacing: -0.18px;
                  color: $white-color;
                  transition: 0.3s all ease-in-out;
                }
              }

              .timeline {
                position: relative;
                width: 6.25rem;
                height: 1px;
                background-color: $white-color;
                border-radius: 50%;
                margin-top: 0.5rem;

                &::before {
                  content: "";
                  position: absolute;
                  top: 0;
                  right: 0;
                  width: 50%;
                  opacity: 0.5;
                  height: 1px;
                  background-color: $black-color;
                  border-radius: 50%;
                }
              }
            }

            .release {
              align-self: flex-end;
              font-size: 0.625rem;
              font-weight: 300;
              line-height: 2;
              letter-spacing: -0.18px;
            }
          }
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

      @include breakpoint-up(large) {
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
