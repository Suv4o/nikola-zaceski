<template>
  <section class="container section">
    <div class="background-img bg__style" id="bg_img-news"></div>
    <div class="news" id="home-news">
      <div class="news__line" id="news__line"></div>
      <div class="news__header">
        <div aria-label="News Menu" @click="toggleOnOff">
          <div class="news__header-left gsapNewsStaggerMenu">
            <div class="news__header-left-number">01</div>
            <h2 class="news__header-left-title">news</h2>
            <div class="news__header-left-info">
              New Song: Srceto Moe Tuka Chuka
            </div>
          </div>
        </div>
        <div class="news__header-right gsapNewsStaggerMenu">
          <svg
            @click="toggleOnOff"
            v-if="isToggledNews"
            xmlns="http://www.w3.org/2000/svg"
            width="18.365"
            height="11.341"
            viewBox="0 0 18.365 11.341"
            class="news__header-right-arrow-down"
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
            v-if="!isToggledNews"
            to="/"
            class="news__header-right-link"
          >
            <div>Discover More</div>
          </nuxt-link>
        </div>
      </div>
      <div class="news__main" id="news__main">
        <div class="news__main-info" id="news__main-info">
          <div class="title">New Song:</div>
          Srceto Moe Tuka Chuka
        </div>
        <div class="news__main-text-wrapper" id="news__main-text-wrapper">
          <div class="news__main-text-overlay"></div>
          <div id="song-lyrics" class="news__main-text">
            Srceto moe tuka čuka <br />
            Ti, zemjo, ti <br />
            rasti i tancuvaj <br />
            site nevolji, <br />
            prosti gi vo sjaj. <br />
            Te ljubam, <br />
            od ljubov jas umiram <br />
            Te ljubam, <br />
            za pak da se prerodam. <br />
            Ti,mirno spij, <br />
            koga noḱ caruva, <br />
            pod mesečina <br />
            tivko ti peam. <br />
            Te ljubam, <br />
            od ljubov jas umiram <br />
            Te ljubam, <br />
            za pak da se prerodam. <br />
            Srceto moe tuka čuka, <br />
            ovde silno bie, <br />
            ti si mojot dar, <br />
            Zlatna e rodnata mi grutka <br />
            mene što me rodi <br />
            i me izgleda. <br />
            Srceto moe tuka čuka, <br />
            ovde silno bie, <br />
            ti si mojot dar, <br />
            Zlatna e rodnata mi grutka, <br />
            milno što me gušna <br />
            za da porasnam.
          </div>
        </div>
        <div class="news__main-signature" id="news__main-signature">
          <RelativeSignature />
        </div>
        <div class="news__main-available-on" id="news__main-available-on">
          <div>Available on</div>
          <div class="news__main-available-on-icons">
            <a href="#"
              ><svg
                class="spotify-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  id="Icon_simple-spotify"
                  data-name="Icon simple-spotify"
                  d="M16.086,0A16.086,16.086,0,1,0,32.173,16.086,16.134,16.134,0,0,0,16.086,0Zm7.4,23.245a.958.958,0,0,1-1.369.322c-3.78-2.333-8.526-2.816-14.157-1.53a.994.994,0,1,1-.481-1.929c6.113-1.369,11.421-.8,15.6,1.77a.966.966,0,0,1,.4,1.367Zm1.93-4.424a1.215,1.215,0,0,1-1.692.4,20.845,20.845,0,0,0-16-1.85A1.222,1.222,0,0,1,7,15.039a23.541,23.541,0,0,1,18.1,2.173,1.136,1.136,0,0,1,.323,1.609Zm.161-4.5C20.43,11.26,11.823,10.939,6.917,12.468A1.477,1.477,0,0,1,6.032,9.65c5.711-1.689,15.121-1.367,21.075,2.173a1.555,1.555,0,0,1,.562,2.091,1.683,1.683,0,0,1-2.09.4Z"
                  fill="#fff"
                /></svg
            ></a>
            <a href="#"
              ><svg
                class="applemusic-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  id="Icon_awesome-itunes"
                  data-name="Icon awesome-itunes"
                  d="M15.722,5.646A12.041,12.041,0,1,0,27.759,17.691,12.032,12.032,0,0,0,15.722,5.646ZM21.3,22.521a2.216,2.216,0,0,1-1.92,1.673,2.518,2.518,0,0,1-2.243-.352,1.714,1.714,0,0,1-.1-2.587,5.023,5.023,0,0,1,2.672-.9.809.809,0,0,0,.541-.26c.225-.253.155-.141.155-5.681,0-.394-.19-.5-.591-.429-.281.049-6.462,1.2-6.462,1.2-.352.077-.471.183-.471.584,0,8.163.035,7.791-.084,8.332a2.044,2.044,0,0,1-1.048,1.378,4.118,4.118,0,0,1-2.208.366A1.778,1.778,0,0,1,8.536,22.83a5.023,5.023,0,0,1,2.672-.9.809.809,0,0,0,.541-.26c.352-.4.063-8.93.183-9.4a.687.687,0,0,1,.246-.45,1.064,1.064,0,0,1,.471-.19c7.1-1.336,7.966-1.5,8.093-1.5a.55.55,0,0,1,.633.612c-.007,12,.028,11.348-.07,11.784ZM24.272,2.25H7.228A7.217,7.217,0,0,0,0,9.478V26.522A7.217,7.217,0,0,0,7.228,33.75H24.272A7.212,7.212,0,0,0,31.5,26.522V9.478A7.217,7.217,0,0,0,24.272,2.25Zm-8.55,28.969A13.535,13.535,0,1,1,29.257,17.684,13.536,13.536,0,0,1,15.722,31.219Z"
                  transform="translate(0 -2.25)"
                  fill="#fff"
                /></svg
            ></a>
            <a href="#"
              ><svg
                class="applemusic-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="41.011"
                height="28.836"
                viewBox="0 0 41.011 28.836"
              >
                <path
                  id="Icon_awesome-youtube"
                  data-name="Icon awesome-youtube"
                  d="M41.2,9.012a5.153,5.153,0,0,0-3.626-3.649C34.38,4.5,21.556,4.5,21.556,4.5s-12.825,0-16.023.863A5.153,5.153,0,0,0,1.907,9.012c-.857,3.219-.857,9.935-.857,9.935s0,6.716.857,9.935a5.076,5.076,0,0,0,3.626,3.591c3.2.863,16.023.863,16.023.863s12.825,0,16.023-.863A5.076,5.076,0,0,0,41.2,28.882c.857-3.219.857-9.935.857-9.935s0-6.716-.857-9.935ZM17.361,25.045v-12.2l10.719,6.1-10.719,6.1Z"
                  transform="translate(-1.05 -4.5)"
                  fill="#fff"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import RelativeSignature from "@/components/ReusableUIs/relativeSignature.vue";

let STYLE_MAIN = {
  HEIGHT: 0,
  MARGIN_TOP: 0,
  LYRICS_SLIDER_PERCENT: 0,
  LYRICS_SLIDERS_SPEED: 0
};
let DEBOUNCING_MEDIUM = false;
let DEBOUNCING_SMALL = false;
let DEBOUNCING_XSMALL = false;
let DEBOUNCING_XXSMALL = false;

let LOADING_TL;

export default {
  components: {
    RelativeSignature
  },
  data() {
    return {
      isBackgroundImgToggled: false
    };
  },
  created() {
    if (process.client) {
      window.addEventListener("resize", this.onResize);
    }
  },
  mounted() {
    this.initSectionHeight();
    this.gsapOnLoadAnimations();
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener("resize", this.onResize);
    }
  },
  methods: {
    ...mapMutations({
      toggleMutation: "toggleMenu/UPDATE_THE_STORE_NEWS"
    }),
    onResize() {
      if (window.innerWidth > 991) {
        if (!DEBOUNCING_MEDIUM) {
          STYLE_MAIN.HEIGHT = 870;
          STYLE_MAIN.MARGIN_TOP = 103;
          STYLE_MAIN.LYRICS_SLIDER_PERCENT = -220;
          STYLE_MAIN.LYRICS_SLIDERS_SPEED = 70;
          DEBOUNCING_MEDIUM = true;
          DEBOUNCING_SMALL = false;
          DEBOUNCING_XSMALL = false;
          DEBOUNCING_XXSMALL = false;
          this.autoScrollLyrics();
          this.resetNewsMain();
        }
      } else if (window.innerWidth <= 991 && window.innerWidth > 767) {
        if (!DEBOUNCING_SMALL) {
          STYLE_MAIN.HEIGHT = 800;
          STYLE_MAIN.MARGIN_TOP = 82.4;
          STYLE_MAIN.LYRICS_SLIDER_PERCENT = -150;
          STYLE_MAIN.LYRICS_SLIDERS_SPEED = 56;
          DEBOUNCING_MEDIUM = false;
          DEBOUNCING_SMALL = true;
          DEBOUNCING_XSMALL = false;
          DEBOUNCING_XXSMALL = false;
          this.autoScrollLyrics();
          this.resetNewsMain();
        }
      } else if (window.innerWidth <= 767 && window.innerWidth > 349) {
        if (!DEBOUNCING_XSMALL) {
          STYLE_MAIN.HEIGHT = 500;
          STYLE_MAIN.MARGIN_TOP = 51.5;
          STYLE_MAIN.LYRICS_SLIDER_PERCENT = -200;
          STYLE_MAIN.LYRICS_SLIDERS_SPEED = 50;
          DEBOUNCING_MEDIUM = false;
          DEBOUNCING_SMALL = false;
          DEBOUNCING_XSMALL = true;
          DEBOUNCING_XXSMALL = false;
          this.autoScrollLyrics();
          this.resetNewsMain();
        }
      } else if (window.innerWidth <= 349) {
        if (!DEBOUNCING_XXSMALL) {
          STYLE_MAIN.LYRICS_SLIDER_PERCENT = -200;
          STYLE_MAIN.LYRICS_SLIDERS_SPEED = 50;
          DEBOUNCING_MEDIUM = false;
          DEBOUNCING_SMALL = false;
          DEBOUNCING_XSMALL = false;
          DEBOUNCING_XXSMALL = true;
          this.autoScrollLyrics();
          this.resetNewsMain();
        }
      }
    },
    initSectionHeight() {
      if (window.innerWidth > 991) {
        STYLE_MAIN.HEIGHT = 870;
        STYLE_MAIN.MARGIN_TOP = 103;
        STYLE_MAIN.LYRICS_SLIDER_PERCENT = -220;
        STYLE_MAIN.LYRICS_SLIDERS_SPEED = 70;
      } else if (window.innerWidth <= 991 && window.innerWidth > 767) {
        STYLE_MAIN.HEIGHT = 800;
        STYLE_MAIN.MARGIN_TOP = 82.4;
        STYLE_MAIN.LYRICS_SLIDER_PERCENT = -150;
        STYLE_MAIN.LYRICS_SLIDERS_SPEED = 56;
      } else if (window.innerWidth <= 767 && window.innerWidth > 349) {
        STYLE_MAIN.HEIGHT = 500;
        STYLE_MAIN.MARGIN_TOP = 51.5;
        STYLE_MAIN.LYRICS_SLIDER_PERCENT = -200;
        STYLE_MAIN.LYRICS_SLIDERS_SPEED = 50;
      } else if (window.innerWidth <= 349) {
        STYLE_MAIN.LYRICS_SLIDER_PERCENT = -200;
        STYLE_MAIN.LYRICS_SLIDERS_SPEED = 50;
      }
    },
    gsapOnLoadAnimations() {
      let $this = this;
      LOADING_TL = gsap.timeline();

      LOADING_TL.to("#news__line", {
        duration: 2,
        delay: 1,
        ease: "power4.out",
        width: "100%"
      })
        .from(
          ".gsapNewsStaggerMenu",
          {
            duration: 2,
            opacity: 0,
            y: 30,
            ease: "back.out(1.7)",
            stagger: 0.3
          },
          "-=1.5"
        )
        .from(
          "#news__main-text-wrapper",
          {
            duration: 3,
            ease: "power4.out",
            opacity: 0,
            ease: "back.out(1.7)",
            y: 30
          },
          "-=1"
        )
        .from(
          "#news__main-signature, #news__main-available-on, #news__main-info",
          {
            opacity: 0,
            ease: "power4.inOut",
            duration: 1
          },
          "-=2.5"
        )
        .from(
          "#bg_img-news",
          {
            opacity: 0,
            ease: "power4.inOut",
            duration: 1
          },
          "-=3.5"
        );

      gsap.to("#song-lyrics", {
        y: STYLE_MAIN.LYRICS_SLIDER_PERCENT + "%",
        duration: STYLE_MAIN.LYRICS_SLIDERS_SPEED,
        delay: 5,
        ease: "none",
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
    },
    autoScrollLyrics() {
      gsap.killTweensOf("#song-lyrics");
      gsap.set("#song-lyrics", {
        clearProps: "all"
      });
      gsap.to("#song-lyrics", {
        y: STYLE_MAIN.LYRICS_SLIDER_PERCENT + "%",
        duration: STYLE_MAIN.LYRICS_SLIDERS_SPEED,
        delay: 1,
        ease: "none",
        repeat: -1,
        repeatDelay: 1,
        yoyo: true
      });
    },
    resetNewsMain() {
      if (!this.isToggledNews) {
        gsap.killTweensOf("#news__main");
        gsap.set("#news__main", {
          clearProps: "all"
        });
      }
    },
    toggleOnOff() {
      this.toggleMutation({
        isToggledNews: !this.isToggledNews
        // isToggledAbout: true
      });
      this.scrollToTheTopOfTheSection();
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 2000);
    },
    scrollToTheNextSection() {
      gsap.to(window, {
        duration: 2,
        scrollTo: { y: "#home-about", autoKill: true },
        ease: "power4.out"
      });
    },
    scrollToTheTopOfTheSection() {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: 0, autoKill: true },
        ease: "power4.out"
      });
    }
  },
  computed: {
    isToggledNews() {
      return this.$store.state.toggleMenu.isToggledNews;
    }
  },
  watch: {
    isToggledNews(newValue, oldValue) {
      if (newValue) {
        gsap.killTweensOf("#bg_img-news");
        gsap.killTweensOf("#news__main-available-on");
        gsap.killTweensOf("#news__main-info");
        gsap.killTweensOf("#news__main-text-wrapper");
        gsap.killTweensOf("#news__main-signature");
        let tl = gsap.timeline();
        tl.to("#bg_img-news", {
          opacity: 0,
          ease: "power4.out",
          duration: 0.3
        })
          .to(
            "#news__main-available-on, #news__main-info, #news__main-text-wrapper, #news__main-signature",
            {
              opacity: 0,
              ease: "power4.out",
              duration: 0.3
            },
            "-=0.3"
          )
          .to("#news__main", {
            height: "0px",
            marginTop: "0px",
            ease: "power4.out",
            duration: 2
          });
      } else {
        let $this = this;
        this.autoScrollLyrics();
        let tl = gsap.timeline();
        tl.to("#news__main", {
          height: STYLE_MAIN.HEIGHT + "px",
          marginTop: STYLE_MAIN.MARGIN_TOP + "px",
          ease: "power4.out",
          duration: 2
        })
          .to(
            "#news__main-available-on, #news__main-info, #news__main-text-wrapper, #news__main-signature",
            {
              opacity: 1,
              ease: "power4.out",
              duration: 1
            },
            "-=1"
          )
          .to(
            "#bg_img-news",
            {
              opacity: 1,
              ease: "power4.inOut",
              duration: 1
            },
            "-=1"
          );
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.background-img {
  background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1600,e_sharpen:100/v1601079764/HomeScreen/home-news-background-v1");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: left center;

  @media (max-width: 106.25em) {
    background-position: center center;
  }

  @include breakpoint-down(xlarge) {
    background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1601079764/HomeScreen/home-news-background-v1");
  }

  @include breakpoint-down(medium) {
    background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_800,e_sharpen:100/v1601079764/HomeScreen/home-news-background-v1");
  }

  @media (max-width: 75em) {
    background-position: 65% center;
  }

  @include breakpoint-down(small) {
    background-position: 65%;
  }
}

.section {
  position: relative;
  overflow: hidden;
}

.bg__style {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  height: 85%;
  transform: translate(0, 70px);

  @include breakpoint-down(small) {
    height: 85%;
  }
}

.news {
  position: relative;
  z-index: 2;
  width: 80%;
  margin-top: 4.375rem;
  margin-left: auto;
  margin-right: auto;

  @include breakpoint-down(small) {
    width: 95%;
  }

  &__line {
    width: 0%;
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
        // padding-left: 0.625rem;
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
    position: relative;
    height: 870px;
    margin-top: 103px;
    overflow: hidden;

    @include breakpoint-down(medium) {
      height: 800px;
      margin-top: 82.4px;
    }

    @include breakpoint-down(small) {
      height: 500px;
      margin-top: 51.5px;
    }

    &--hidden {
      display: none;
    }

    &-info {
      font-family: SaolDisplay;
      font-size: 1.125rem;
      line-height: 1.11;
      letter-spacing: -0.32px;
      padding-left: 2.1875rem;
      margin-left: 15%;
      margin-bottom: 1rem;

      .title {
        font-family: Roboto;
        font-size: 0.75rem;
        font-weight: 300;
        line-height: 0.92;
        letter-spacing: -0.21px;
        text-align: left;
        margin-bottom: 0.3125rem;
      }

      @include breakpoint-down(xsmall) {
        margin-left: 0;
      }

      @include breakpoint-up(medium) {
        display: none;
      }
    }

    &-text-wrapper {
      position: relative;
      display: flex;
      justify-content: flex-start;
      width: 39.5625rem;
      max-height: 36.25rem;
      overflow: hidden;
      padding-left: 2.5625rem;

      @include breakpoint-down(medium) {
        padding-left: 2.05rem;
        width: 31.625rem;
      }

      @include breakpoint-down(small) {
        margin-left: 15%;
        padding-left: 2.1875rem;
        max-height: 11.375rem;
        width: 10.625rem;
      }

      @include breakpoint-down(xsmall) {
        margin-left: 0;
        padding-left: 2.1875rem;
      }
    }

    &-text-overlay {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(13, 28, 47, 0.3);
      background: linear-gradient(
        to bottom,
        rgba(12, 27, 45, 0.9) 0%,
        rgba(12, 27, 45, 0) 20%,
        rgba(12, 27, 45, 0) 50%,
        rgba(12, 27, 45, 0) 80%,
        rgba(12, 27, 45, 0.9) 100%
      );
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0d1c2f', endColorstr='#0d1c2f', GradientType=0 );
    }

    &-text {
      position: relative;
      z-index: 1;
      font-family: SaolDisplay;
      font-size: 3.5rem;
      line-height: 1.07;
      letter-spacing: -1px;
      text-align: left;
      color: $white-color;

      @include breakpoint-down(medium) {
        font-size: 2.8rem;
      }

      @include breakpoint-down(small) {
        font-size: 1rem;
      }
    }

    &-available-on {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      position: absolute;
      left: 50%;
      bottom: 20%;
      opacity: 1;
      transform: translate(-50%);
      font-size: 1.1875rem;
      font-weight: 300;
      line-height: 1.05;
      letter-spacing: -0.34px;

      @include breakpoint-down(medium) {
        font-size: 0.975rem;

        svg {
          width: 25.6px;
          height: 25.6px;
        }
      }

      @include breakpoint-down(small) {
        flex-direction: column;
        justify-content: center;
        align-items: unset;
        left: 28%;
        top: 85%;
        font-size: 0.75rem;

        svg {
          width: 21px;
          height: 21px;
        }
      }

      @include breakpoint-down(xsmall) {
        left: 17%;
      }

      & > :not(:last-child) {
        margin-right: 1.25rem;

        @include breakpoint-down(medium) {
          margin-right: 1rem;
        }

        @include breakpoint-down(small) {
          margin-right: 0.6875rem;
        }
      }

      &-icons {
        display: flex;
        align-items: center;
        margin-top: 25px;

        @include breakpoint-down(medium) {
          margin-top: 17.5px;
        }

        .spotify-icon {
          path {
            transition: fill 0.3s ease-in-out;
            fill: $white-color;
          }

          &:hover {
            path {
              fill: $gold-color;
            }
          }
        }

        .applemusic-icon {
          path {
            transition: fill 0.3s ease-in-out;
            fill: $white-color;
          }

          &:hover {
            path {
              fill: $gold-color;
            }
          }
        }

        & > :not(:last-child) {
          margin-right: 1.25rem;

          @include breakpoint-down(medium) {
            margin-right: 1rem;
          }

          @include breakpoint-down(small) {
            margin-right: 0.6875rem;
          }
        }
      }
    }
  }
}
</style>
