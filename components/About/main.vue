<template>
  <section class="container section">
    <div class="background-img bg__style"></div>
    <div class="about">
      <div class="about__line"></div>
      <div class="about__header">
        <div aria-label="About Menu">
          <div class="about__header-left">
            <div class="about__header-left-number">02</div>
            <h2 class="about__header-left-title">about</h2>
          </div>
        </div>
        <div class="about__header-right">
          <nuxt-link to="/" class="about__header-right-link">
            <div>Back</div>
          </nuxt-link>
        </div>
      </div>
      <div class="about__main">
        <div class="about__main-img"></div>
        <div class="about__main-text">
          <div class="about__main-paragraph-1">
            Nikola Zaceski is an ambassador of Macedonian music and loves to
            share his voice with the world. From a very early age, Nikola showed
            a great interest in music. He began playing the piano at ten years
            old, and later he learned music theory. During this time he
            discovered his voice and realised that singing was his passion.
            <br /><br />
            Nikola attended high school at the Public Musical School in Bitola
            and continued his studies at the Faculty of Musical Arts at Saints
            Cyril And Methodius University in Skopje, Macedonia. Studying music
            and specialising in Vocal Performances.
            <br /><br />
            After graduating, he returned to Bitola, his hometown, to begin his
            career as a music teacher at the Public Musical High school, the
            school that he had studied at earlier. Nikola was able to share his
            love of music with his students at this school and also at the
            Primary School "St. Kliment Ohridski in Bitola".
            <div class="experience-text">13 years singing experience</div>
          </div>
          <div class="about__main-paragraph-2">
            Nikola Zaceski is an ambassador of Macedonian music and loves to
            share his voice with the world. From a very early age, Nikola showed
            a great interest in music. He began playing the piano at ten years
            old, and later he learned music theory. During this time he
            discovered his voice and realised that singing was his passion.
            <br /><br />
            Nikola attended high school at the Public Musical School in Bitola
            and continued his studies at the Faculty of Musical Arts at Saints
            Cyril And Methodius University in Skopje, Macedonia. Studying music
            and specialising in Vocal Performances.
            <br /><br />
            After graduating, he returned to Bitola, his hometown, to begin his
            career as a music teacher at the Public Musical High school, the
            school that he had studied at earlier. Nikola was able to share his
            love of music with his students at this school and also at the
            Primary School "St. Kliment Ohridski in Bitola".
            <!-- <div class="experience-text">13 years singing experience</div> -->
          </div>
        </div>
      </div>
      <div class="about__my-carrer">
        <h1>My Carrer</h1>
        <div class="protectore-wrapper-relative">
          <div
            class="protectore-wrapper-absolute"
            v-touch:swipe.left="scrollNext"
            v-touch:swipe.right="scrollBack"
          ></div>
          <div class="cards-wrapper" ref="cards-wrapper" id="cards-wrapper">
            <div class="cards">
              <div class="line"></div>
              <div
                class="cards-individual"
                v-for="(gallery, index) in galleries"
                :key="index"
                :id="gallery.id"
                :style="'background-image: url(' + gallery.imgUrl + ')'"
              >
                <div class="cards-individual__info">
                  <div class="title">
                    {{ gallery.title }}
                  </div>
                  <div class="text">{{ gallery.text }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapper-arrows">
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
      <div class="experience-text">13 years singing experience</div>
      <div class="current-events">
        <div>
          <h1>
            Current Events
          </h1>
          <p>
            Nikola moved to Australia in 2018, continuing his career in both
            music and dance. <br />
            <br />

            In 2019 he joined Toše Australian Macedonian Dance Ensemble as the
            Senior choreographer, sharing his talents, expertise and experience
            with the dancers. He created a spectacular program for the ensembles
            10th-anniversary theatre concert held in November 2019. <br />
            <br />

            Performing with Synthesis from Macedonia at the Thornbury Theatre in
            Melbourne, Australia in November 2019 was a highlight in his career.
            Besides live performances, Nikola has shared his musical talents on
            live radio during interviews with Roger Holdsworth at PBSfm and
            Geelong radio.
          </p>
        </div>
      </div>
      <div class="humanitarian-work">
        <div>
          <h1>
            Humanitarian Work
          </h1>
          <p>
            Nikola moved to Australia in 2018, continuing his career in both
            music and dance. <br />
            <br />

            In 2019 he joined Toše Australian Macedonian Dance Ensemble as the
            Senior choreographer, sharing his talents, expertise and experience
            with the dancers. He created a spectacular program for the ensembles
            10th-anniversary theatre concert held in November 2019. <br />
            <br />

            Performing with Synthesis from Macedonia at the Thornbury Theatre in
            Melbourne, Australia in November 2019 was a highlight in his career.
            Besides live performances, Nikola has shared his musical talents on
            live radio during interviews with Roger Holdsworth at PBSfm and
            Geelong radio.
          </p>
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
      galleries: [
        {
          id: "gallery-1",
          imgUrl:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1608786066/About/about-main-gallery-1",
          title: "concerts",
          text:
            "He actively takes part in large concerts as part of the Macedonian Opera and Ballet, Ohrid summer festival, Bitola summer festival, Skopje summer festival and many other festivals in Europe."
        },
        {
          id: "gallery-2",
          imgUrl:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1608787482/About/about-main-gallery-2",
          title: "concerts",
          text:
            "He actively takes part in large concerts as part of the Macedonian Opera and Ballet, Ohrid summer festival, Bitola summer festival, Skopje summer festival and many other festivals in Europe."
        },
        {
          id: "gallery-3",
          imgUrl:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1608787482/About/about-main-gallery-3",
          title: "concerts",
          text:
            "He actively takes part in large concerts as part of the Macedonian Opera and Ballet, Ohrid summer festival, Bitola summer festival, Skopje summer festival and many other festivals in Europe."
        },
        {
          id: "gallery-4",
          imgUrl:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1608787482/About/about-main-gallery-2",
          title: "concerts",
          text:
            "He actively takes part in large concerts as part of the Macedonian Opera and Ballet, Ohrid summer festival, Bitola summer festival, Skopje summer festival and many other festivals in Europe."
        },
        {
          id: "gallery-5",
          imgUrl:
            "https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_1200,e_sharpen:100/v1608786066/About/about-main-gallery-1",
          title: "concerts",
          text:
            "He actively takes part in large concerts as part of the Macedonian Opera and Ballet, Ohrid summer festival, Bitola summer festival, Skopje summer festival and many other festivals in Europe."
        }
      ]
    };
  },
  mounted() {
    gsap.registerPlugin(ScrollToPlugin);
  },
  methods: {
    scrollNext() {
      let $this = this;
      if (IS_SCROLLING_DONE) {
        this.scrollingNxt().then(function() {
          $this.galleries.push($this.galleries.shift());
          $this.$refs["cards-wrapper"].scrollLeft = 0;
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
        tl.to(".cards-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.galleries[0].id}`,
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
        tl.to(".cards-wrapper", {
          duration: 0.5,
          scrollTo: `#${$this.galleries[1].id}`,
          ease: "power2.inOut"
        });
      });
    },
    scrollingBck() {
      this.$refs["cards-wrapper"].scrollLeft =
        document.getElementById("gallery-1").offsetWidth + 32;
      this.galleries.unshift(this.galleries.pop());
      IS_SCROLLING_DONE = false;
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

.background-img {
  background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_600,e_sharpen:100/v1601768385/HomeScreen/home-about-background-v3");
  background-size: 30rem;
  background-repeat: no-repeat;
  background-position: 20% -3.125rem;

  @include breakpoint-down(large) {
    background-position: 0% 0px;
    background-size: 22.1875rem;
  }

  @include breakpoint-down(medium) {
    background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_400,e_sharpen:100/v1601768385/HomeScreen/home-about-background-v3");
    background-position: 0% -3.125rem;
  }

  @include breakpoint-down(xsmall) {
    background-image: url("https://res.cloudinary.com/dbhmhr67q/image/upload/q_auto,f_auto,w_300,e_sharpen:100/v1601768385/HomeScreen/home-about-background-v3");
    background-position: 0% -3.125rem;
  }
}

.bg__style {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.about {
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
    display: flex;
    overflow: hidden;

    @include breakpoint-down(medium) {
      flex-direction: column;
    }

    &-img {
      width: 56.25rem;

      @include breakpoint-down(large) {
        width: 23.75rem;
      }

      @include breakpoint-down(medium) {
        height: 27.5rem;
      }
    }

    &-text {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      margin-top: 3.125rem;

      @include breakpoint-down(medium) {
        flex-direction: column;
        justify-content: unset;
      }

      @include breakpoint-down(small) {
        padding-left: 2.1875rem;
      }
    }

    &-paragraph-1 {
      flex: 1;
      margin-right: 4.0625rem;
      font-size: 1.125rem;
      font-weight: 300;
      line-height: 1.11;
      letter-spacing: -0.32px;
      text-align: left;

      .experience-text {
        width: 15.5625rem;
        font-family: SaolDisplay;
        font-size: 3.5rem;
        line-height: 1.07;
        letter-spacing: -1px;
        text-align: left;
        margin-top: 2.5rem;
        color: $gold-color;

        @include breakpoint-down(medium) {
          display: none;
        }
      }

      @include breakpoint-down(xlarge) {
        margin-right: 1.875rem;
      }

      @include breakpoint-down(medium) {
        margin-right: 0px;
      }

      @include breakpoint-down(small) {
        font-size: 1rem;
      }
    }

    &-paragraph-2 {
      flex: 1;
      font-size: 1.125rem;
      font-weight: 300;
      line-height: 1.11;
      letter-spacing: -0.32px;
      text-align: left;

      @include breakpoint-down(medium) {
        margin-top: 20px;
      }

      @include breakpoint-down(small) {
        font-size: 1.25rem;
      }

      // .experience-text {
      //   width: 249px;
      //   font-family: SaolDisplay;
      //   font-size: 56px;
      //   line-height: 1.07;
      //   letter-spacing: -1px;
      //   text-align: left;
      //   margin-top: 40px;
      //   color: $gold-color;

      //   @include breakpoint-up(large) {
      //     display: none;
      //   }
      // }
    }
  }

  &__my-carrer {
    h1 {
      margin-top: 18vw;
      margin-bottom: 3.25rem;
      margin-left: 11%;
      font-family: SaolDisplay;
      font-size: 7.125rem;
      font-weight: normal;
      font-stretch: normal;
      font-style: italic;
      line-height: 1.07;
      letter-spacing: -2.04px;
      text-align: left;
      color: $white-color;

      @include breakpoint-down(medium) {
        font-size: 2.875rem;
        margin-top: 4.625rem;
        margin-bottom: 1.6875rem;
        margin-left: 0px;
        letter-spacing: -0.82px;
      }

      @include breakpoint-down(small) {
        margin-left: 2.1875rem;
      }
    }

    .cards-wrapper {
      overflow-y: scroll;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }

      @include breakpoint-down(medium) {
        max-width: 100%;
        overflow-x: hidden;
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

      @include breakpoint-down(medium) {
        display: none;
      }
    }
    .cards {
      width: 410rem;
      position: relative;

      .line {
        position: absolute;
        z-index: 1;
        bottom: 25%;
        left: 0;
        width: 100%;
        height: 0.1875rem;
        background-color: $gold-color;

        @include breakpoint-down(medium) {
          display: none;
        }
      }

      & > div:not(:last-child) {
        margin-right: 2.1875rem;
      }

      &-individual {
        display: inline-block;
        position: relative;
        max-width: 78.625rem;
        max-height: 49.75rem;
        width: 80vw;
        height: 47vw;
        background-color: $blue-color;
        background-repeat: no-repeat;
        background-size: cover;

        @include breakpoint-down(medium) {
          display: block;
          max-width: 100vw;
          max-height: 100%;
          width: 80vw;
          margin-bottom: 9.5vw;
        }

        @include breakpoint-down(small) {
          display: block;
          max-width: 100vw;
          max-height: 100%;
          width: 95vw;
          margin-bottom: 14.3vw;
        }

        @include breakpoint-down(xsmall) {
          margin-bottom: 28.2vw;
        }

        &__info {
          display: flex;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 25%;
          padding-top: 1%;
          padding-left: 5%;
          padding-right: 2%;
          background-image: linear-gradient(
            to right,
            rgba(12, 27, 45, 0.45) 27%,
            rgba(184, 184, 184, 0.45) 134%
          );
          border-top: 0.1875rem solid $gold-color;

          @include breakpoint-down(medium) {
            left: 0;
            bottom: -20%;
            width: 100%;
            height: 10.25rem;
            z-index: 1;
          }

          @include breakpoint-down(small) {
            bottom: -30%;
          }

          @include breakpoint-down(xsmall) {
            bottom: -60%;
          }

          .title {
            font-family: SaolDisplay;
            font-size: 2.875rem;
            margin-right: 2.25rem;
            line-height: 1.11;
            letter-spacing: -0.82px;
            color: $white-color;

            @include breakpoint-down(medium) {
              font-size: 2.125rem;
              transform: rotate(-90deg) translate(-0px, 35%);
            }
          }

          .text {
            width: 55%;
            font-size: 1.375rem;
            font-weight: 300;
            line-height: 1.09;
            letter-spacing: -0.39px;
            text-align: left;
            color: $white-color;

            @include breakpoint-down(large) {
              width: 100%;
            }

            @include breakpoint-down(medium) {
              font-size: 1rem;
              line-height: 1.13;
              letter-spacing: -0.29px;
            }

            @include breakpoint-down(xxsmall) {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }

  .wrapper-arrows {
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5625rem;

    @include breakpoint-down(medium) {
      display: none;
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
      }
    }
  }

  .experience-text {
    width: 15.5625rem;
    font-family: SaolDisplay;
    font-size: 3.5rem;
    line-height: 1.07;
    letter-spacing: -1px;
    text-align: left;
    margin-top: 2.5rem;
    color: $gold-color;

    @include breakpoint-up(large) {
      display: none;
    }

    @include breakpoint-down(small) {
      margin-left: 2.1875rem;
    }
  }

  .current-events {
    display: flex;
    justify-content: flex-start;
    margin-top: 7.5rem;

    @include breakpoint-down(medium) {
      justify-content: center;
      margin-top: 4.5rem;
    }

    div {
      width: 40vw;

      @include breakpoint-down(large) {
        width: 45vw;
      }

      @include breakpoint-down(medium) {
        width: 100%;
      }

      h1 {
        margin-bottom: 1.875rem;
        font-family: SaolDisplay;
        font-size: 5.5625rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: italic;
        line-height: 1.07;
        letter-spacing: -1.59px;
        text-align: left;
        color: $white-color;

        @include breakpoint-down(medium) {
          font-size: 2.875rem;
          line-height: 2.07;
          letter-spacing: -0.82px;
        }

        @include breakpoint-down(small) {
          margin-left: 2.1875rem;
          line-height: 1.2;
        }
      }

      p {
        width: 70%;
        margin-bottom: 3.25rem;
        font-size: 1.125rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: -0.32px;
        text-align: left;
        color: $white-color;

        @include breakpoint-down(xlarge) {
          width: 90%;
        }

        @include breakpoint-down(medium) {
          font-size: 1.125rem;
          line-height: 1.11;
          letter-spacing: -0.32px;
        }

        @include breakpoint-down(small) {
          margin-left: 2.1875rem;
          font-size: 1.125rem;
          line-height: 1.11;
          letter-spacing: -0.32px;
        }
      }
    }
  }

  .humanitarian-work {
    display: flex;
    justify-content: flex-end;
    margin-top: 3.25rem;

    @include breakpoint-down(medium) {
      justify-content: center;
    }

    @include breakpoint-down(small) {
      margin-top: 0.9375rem;
    }

    div {
      width: 40vw;

      @include breakpoint-down(large) {
        width: 45vw;
      }

      @include breakpoint-down(medium) {
        width: 100%;
      }

      h1 {
        margin-bottom: 1.875rem;
        font-family: SaolDisplay;
        font-size: 5.5625rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: italic;
        line-height: 1.07;
        letter-spacing: -1.59px;
        text-align: left;
        color: $white-color;

        @include breakpoint-down(medium) {
          font-size: 2.875rem;
          line-height: 2.07;
          letter-spacing: -0.82px;
        }

        @include breakpoint-down(small) {
          margin-left: 2.1875rem;
          line-height: 1.2;
        }
      }

      p {
        width: 70%;
        margin-bottom: 3.25rem;
        font-size: 1.125rem;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.11;
        letter-spacing: -0.32px;
        text-align: left;
        color: $white-color;

        @include breakpoint-down(xlarge) {
          width: 90%;
        }

        @include breakpoint-down(medium) {
          font-size: 1.125rem;
          line-height: 1.11;
          letter-spacing: -0.32px;
        }

        @include breakpoint-down(small) {
          margin-left: 2.1875rem;
        }
      }
    }
  }
}
</style>
