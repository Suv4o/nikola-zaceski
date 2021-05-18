<template>
  <div class="footer">
    <div class="container">
      <div class="footer__main">
        <div class="footer__main-sections">
          <div class="footer__main-signature">
            <div class="section-one footer--hidden-desktop">
              <div class="current-section">
                <transition
                  v-on:enter="gsapTransitionEnter"
                  v-on:leave="gsapTransitionLeave"
                >
                  <div
                    v-show="menuValue.title != ''"
                    class="title"
                    id="absolute-menu-properties"
                  >
                    {{ menuValue.title }}
                  </div>
                </transition>
                <transition
                  v-on:enter="gsapTransitionEnter"
                  v-on:leave="gsapTransitionLeave"
                >
                  <div
                    v-show="menuValue.link != ''"
                    class="discover"
                    id="absolute-menu-properties"
                  >
                    <nuxt-link :to="menuValue.link">Discover More</nuxt-link>
                  </div>
                </transition>
              </div>
              <!-- <div class="social-icons">
                <a href="#" class="social-icons--hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.321"
                    height="30.675"
                    viewBox="0 0 17.321 30.675"
                  >
                    <path
                      id="Icon_feather-facebook"
                      data-name="Icon feather-facebook"
                      d="M26.821,3H22.37a7.419,7.419,0,0,0-7.419,7.419V14.87H10.5v5.935h4.451v11.87h5.935V20.805h4.451l1.484-5.935H20.886V10.419A1.484,1.484,0,0,1,22.37,8.935h4.451Z"
                      transform="translate(-10 -2.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                  </svg>
                  <div>Facebook</div>
                </a>
                <a href="#" class="social-icons--hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.414"
                    height="26.414"
                    viewBox="0 0 26.414 26.414"
                  >
                    <g
                      id="Icon_feather-instagram"
                      data-name="Icon feather-instagram"
                      transform="translate(0.5 0.5)"
                    >
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M9.353,3H22.06a6.353,6.353,0,0,1,6.353,6.353V22.06a6.353,6.353,0,0,1-6.353,6.353H9.353A6.353,6.353,0,0,1,3,22.06V9.353A6.353,6.353,0,0,1,9.353,3Z"
                        transform="translate(-3 -3)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M23.767,16.955A5.883,5.883,0,1,1,18.811,12a5.883,5.883,0,0,1,4.956,4.956Z"
                        transform="translate(-5.177 -5.175)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M26.25,9.75h0"
                        transform="translate(-5.454 -5.132)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <div>Instagram</div>
                </a>
                <a href="#" class="social-icons--hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35.13"
                    height="24.983"
                    viewBox="0 0 35.13 24.983"
                  >
                    <g
                      id="Icon_feather-youtube"
                      data-name="Icon feather-youtube"
                      transform="translate(0.5 0.5)"
                    >
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M34.915,9.754a4.313,4.313,0,0,0-3.01-3.1C29.237,6,18.564,6,18.564,6S7.891,6,5.223,6.714a4.313,4.313,0,0,0-3.01,3.1A44.988,44.988,0,0,0,1.5,18.022a44.987,44.987,0,0,0,.714,8.268,4.313,4.313,0,0,0,3.01,2.978c2.668.714,13.341.714,13.341.714s10.673,0,13.341-.714a4.313,4.313,0,0,0,3.01-3.1,44.986,44.986,0,0,0,.714-8.144,44.986,44.986,0,0,0-.714-8.268Z"
                        transform="translate(-1.499 -6)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_65"
                        data-name="Path 65"
                        d="M14.625,22.865l8.92-5.073-8.92-5.073Z"
                        transform="translate(-1.05 -5.77)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <div>Youtube</div>
                </a>
              </div> -->
            </div>
            <div class="section-two">
              <img
                src="/logos/absoluteSignature.svg"
                alt="Nikola Zaceski Signature"
              />
            </div>
          </div>
        </div>
        <div class="footer__main-sections">
          <div class="footer__main-press">
            <div class="section-two">
              <div class="line-between"></div>
              <div class="social-icons">
                <a href="#" class="social-icons--hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17.321"
                    height="30.675"
                    viewBox="0 0 17.321 30.675"
                  >
                    <path
                      id="Icon_feather-facebook"
                      data-name="Icon feather-facebook"
                      d="M26.821,3H22.37a7.419,7.419,0,0,0-7.419,7.419V14.87H10.5v5.935h4.451v11.87h5.935V20.805h4.451l1.484-5.935H20.886V10.419A1.484,1.484,0,0,1,22.37,8.935h4.451Z"
                      transform="translate(-10 -2.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                  </svg>
                  <div>Facebook</div>
                </a>
                <a href="#" class="social-icons--hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26.414"
                    height="26.414"
                    viewBox="0 0 26.414 26.414"
                  >
                    <g
                      id="Icon_feather-instagram"
                      data-name="Icon feather-instagram"
                      transform="translate(0.5 0.5)"
                    >
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M9.353,3H22.06a6.353,6.353,0,0,1,6.353,6.353V22.06a6.353,6.353,0,0,1-6.353,6.353H9.353A6.353,6.353,0,0,1,3,22.06V9.353A6.353,6.353,0,0,1,9.353,3Z"
                        transform="translate(-3 -3)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M23.767,16.955A5.883,5.883,0,1,1,18.811,12a5.883,5.883,0,0,1,4.956,4.956Z"
                        transform="translate(-5.177 -5.175)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M26.25,9.75h0"
                        transform="translate(-5.454 -5.132)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <div>Instagram</div>
                </a>
                <a href="#" class="social-icons--hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35.13"
                    height="24.983"
                    viewBox="0 0 35.13 24.983"
                  >
                    <g
                      id="Icon_feather-youtube"
                      data-name="Icon feather-youtube"
                      transform="translate(0.5 0.5)"
                    >
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M34.915,9.754a4.313,4.313,0,0,0-3.01-3.1C29.237,6,18.564,6,18.564,6S7.891,6,5.223,6.714a4.313,4.313,0,0,0-3.01,3.1A44.988,44.988,0,0,0,1.5,18.022a44.987,44.987,0,0,0,.714,8.268,4.313,4.313,0,0,0,3.01,2.978c2.668.714,13.341.714,13.341.714s10.673,0,13.341-.714a4.313,4.313,0,0,0,3.01-3.1,44.986,44.986,0,0,0,.714-8.144,44.986,44.986,0,0,0-.714-8.268Z"
                        transform="translate(-1.499 -6)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_65"
                        data-name="Path 65"
                        d="M14.625,22.865l8.92-5.073-8.92-5.073Z"
                        transform="translate(-1.05 -5.77)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                  <div>Youtube</div>
                </a>
              </div>
              <!-- <div class="current-section">
                <transition
                  v-on:enter="gsapTransitionEnter"
                  v-on:leave="gsapTransitionLeave"
                >
                  <div
                    v-show="menuValue.title != ''"
                    class="title"
                    id="absolute-menu-properties"
                  >
                    {{ menuValue.title }}
                  </div>
                </transition>
                <transition
                  v-on:enter="gsapTransitionEnter"
                  v-on:leave="gsapTransitionLeave"
                >
                  <div
                    v-show="menuValue.link != ''"
                    class="discover"
                    id="absolute-menu-properties"
                  >
                    <nuxt-link :to="menuValue.link">Discover More</nuxt-link>
                  </div>
                </transition>
              </div> -->
              <div class="social-section footer--hidden-mobile">
                <a href="#" class="socials">
                  <div class="socials-title">Facebook</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.662"
                    height="18.568"
                    viewBox="0 0 10.662 18.568"
                  >
                    <path
                      id="Icon_feather-facebook"
                      data-name="Icon feather-facebook"
                      d="M20.162,3H17.527a4.392,4.392,0,0,0-4.392,4.392v2.635H10.5v3.514h2.635v7.027h3.514V13.541h2.635l.878-3.514H16.649V7.392a.878.878,0,0,1,.878-.878h2.635Z"
                      transform="translate(-10 -2.5)"
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                    />
                  </svg>
                </a>
                <a href="#" class="socials">
                  <div class="socials-title">Instagram</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.243"
                    height="14.243"
                    viewBox="0 0 14.243 14.243"
                  >
                    <g
                      id="Icon_feather-instagram"
                      data-name="Icon feather-instagram"
                      transform="translate(-2.5 -2.5)"
                    >
                      <path
                        id="Path_61"
                        data-name="Path 61"
                        d="M6.311,3h6.622a3.311,3.311,0,0,1,3.311,3.311v6.622a3.311,3.311,0,0,1-3.311,3.311H6.311A3.311,3.311,0,0,1,3,12.932V6.311A3.311,3.311,0,0,1,6.311,3Z"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M17.333,14.2A2.649,2.649,0,1,1,15.1,11.964,2.649,2.649,0,0,1,17.333,14.2Z"
                        transform="translate(-5.063 -4.991)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M26.25,9.75h0"
                        transform="translate(-12.987 -3.77)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </a>
                <a href="#" class="socials">
                  <div class="socials-title">Youtube</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.23"
                    height="13.81"
                    viewBox="0 0 19.23 13.81"
                  >
                    <g
                      id="Icon_feather-youtube"
                      data-name="Icon feather-youtube"
                      transform="translate(-0.999 -5.5)"
                    >
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M19.347,8.005A2.3,2.3,0,0,0,17.74,6.348,59.669,59.669,0,0,0,10.614,6a54.525,54.525,0,0,0-7.126.381A2.3,2.3,0,0,0,1.881,8.038,24.029,24.029,0,0,0,1.5,12.422a24.029,24.029,0,0,0,.381,4.416,2.3,2.3,0,0,0,1.607,1.591,54.525,54.525,0,0,0,7.126.381,54.525,54.525,0,0,0,7.126-.381,2.3,2.3,0,0,0,1.607-1.657,24.029,24.029,0,0,0,.381-4.35,24.029,24.029,0,0,0-.381-4.416Z"
                        transform="translate(0)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                      <path
                        id="Path_65"
                        data-name="Path 65"
                        d="M14.625,18.139l4.764-2.709L14.625,12.72Z"
                        transform="translate(-5.875 -3.008)"
                        fill="none"
                        stroke="#fff"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      />
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__main-sections">
          <div class="footer__main-logo-name">
            <img
              src="/logos/absoluteSignature.svg"
              alt="Nikola Zaceski Signature"
            />
          </div>
          <div class="footer__main-current-section">
            <div class="wrapper">
              <transition
                v-on:enter="gsapTransitionEnter"
                v-on:leave="gsapTransitionLeave"
              >
                <div
                  v-show="menuValue.title != ''"
                  class="title"
                  id="absolute-menu-properties"
                >
                  {{ menuValue.title }}
                </div>
              </transition>
              <transition
                v-on:enter="gsapTransitionEnter"
                v-on:leave="gsapTransitionLeave"
              >
                <div
                  v-show="menuValue.link != ''"
                  class="discover"
                  id="absolute-menu-properties"
                >
                  <nuxt-link :to="menuValue.link">Discover More</nuxt-link>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gsapTransitionEnter() {
      let $this = this;

      gsap.fromTo(
        "#absolute-menu-properties",
        { opacity: 0 },
        {
          duration: 2,
          opacity: 1,
          ease: "power4.out"
        }
      );
    },
    gsapTransitionLeave() {
      let $this = this;

      gsap.to("#absolute-menu-properties", {
        duration: 2,
        opacity: 0,
        ease: "power4.out"
      });
    }
  },
  computed: {
    menuValue() {
      return this.$store.state.titleMenu.menuValue;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(31, 65, 76, 0) 40%,
    rgba(44, 64, 87, 1) 60%,
    rgba(44, 64, 87, 1) 100%
  );

  &--margin-bottom {
    margin-bottom: 5.125rem;
    @include breakpoint-down(medium) {
      margin-bottom: 0px;
    }
  }

  &--hidden-desktop {
    @include breakpoint-up(large) {
      display: none;
    }
  }

  &--hidden-mobile {
    @include breakpoint-down(medium) {
      display: none !important;
    }
  }

  @include breakpoint-down(xlarge) {
    padding-top: 0.625rem;
  }

  @include breakpoint-down(medium) {
    background: linear-gradient(
      180deg,
      rgba(31, 65, 76, 0) 0%,
      rgba(44, 64, 87, 1) 20%,
      rgba(44, 64, 87, 1) 100%
    );
    height: 14.375rem;
  }

  &__main {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    // height: 11.875rem;
    padding-bottom: 2.1875rem;

    @include breakpoint-down(xlarge) {
      padding-bottom: 2.375rem;
    }

    @include breakpoint-down(medium) {
      flex-direction: column;
      justify-content: unset;
      align-items: center;
      padding-top: 0px;
    }

    &-sections {
      width: 26.625rem;

      @media (max-width: 100em) {
        width: 18.75rem;
      }

      @include breakpoint-down(medium) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
      }

      @include breakpoint-down(small) {
        width: 90%;
      }
    }

    & > :not(:last-child) {
      margin-right: 4.875rem;

      @media (max-width: 75em) {
        margin-right: 1.5625rem;
      }

      @include breakpoint-down(medium) {
        margin-right: 0px;
      }
    }

    &-lines {
      width: 100%;
      height: 1px;
      background-color: $white-color;
    }

    &-signature {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;

      @include breakpoint-down(medium) {
        width: 100%;
      }

      .section-one {
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.56;
        letter-spacing: -0.32px;
        text-align: center;
        margin-bottom: 5.1875rem;

        @include breakpoint-down(medium) {
          margin-bottom: 0px;
        }

        .current-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 2.5rem;
          margin-top: 0.625rem;

          @include breakpoint-up(large) {
            display: none;
          }

          @include breakpoint-down(medium) {
            padding: 0 12%;
          }

          @include breakpoint-down(xsmall) {
            padding: 0 7%;
          }

          .title {
            font-family: SaolDisplay;
            font-size: 1.625rem;
            line-height: 1.54;
            letter-spacing: -0.46px;
          }

          .discover {
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 1.64;
            letter-spacing: -0.25px;

            a {
              transition: 0.5s color ease-in-out;
              &:hover {
                transition: 0.5s color ease-in-out;
                color: $gold-color;
              }
            }
          }
        }

        .social-icons {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          margin-top: 2.5625rem;
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 2;
          letter-spacing: -0.25px;
          text-align: center;

          a {
            div {
              visibility: hidden;
            }
          }

          svg {
            margin-bottom: 0.3125rem;
            path {
              stroke: $white-color;
              transition: stroke 0.5s ease-in-out;
            }
          }

          &--hover {
            cursor: pointer;
            transition: color 0.5s ease-in-out;
            &:hover {
              path {
                stroke: $gold-color;
              }
              color: $gold-color;
            }
          }
        }
      }

      .section-two {
        img {
          width: 24.33125rem;
          height: 9.16875rem;

          @media (max-width: 100em) {
            width: 17.031875rem;
            height: 6.418125rem;
          }
        }

        @include breakpoint-down(medium) {
          display: none;
        }
      }
    }

    &-press {
      @include breakpoint-down(medium) {
        width: 100%;
      }
      .section-one {
        margin-top: 0.96875rem;

        @include breakpoint-down(medium) {
          margin-top: 1.4375rem;
          margin-bottom: 1.4375rem;
        }

        & > :not(:last-child) {
          margin-right: 2.25rem;
        }

        .press-text {
          font-family: SaolDisplay;
          font-size: 2.125rem;
          line-height: 1.06;
          letter-spacing: -0.61px;
          text-align: left;
          margin-bottom: 0.9375rem;

          @include breakpoint-down(small) {
            font-size: 1.625rem;
          }
        }

        .download {
          display: flex;
          align-items: center;
          color: $white-color;
          transition: color 0.3s ease-in-out;

          @include breakpoint-down(medium) {
            flex-direction: column-reverse;
          }

          svg {
            @include breakpoint-down(medium) {
              width: 1.9375rem;
              height: 1.9375rem;
            }
            path {
              transition: stroke 0.3s ease-in-out;
              stroke: $white-color;
            }
          }

          &:hover {
            color: $gold-color;
            svg {
              path {
                stroke: $gold-color;
              }
            }
          }

          &-title {
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 1.56;
            letter-spacing: -0.32px;
            text-align: left;
            margin-right: 0.9375rem;

            @include breakpoint-down(medium) {
              font-size: 0.875rem;
              font-weight: 300;
              line-height: 2;
              letter-spacing: -0.25px;
            }
          }
        }
      }

      .section-two {
        margin-top: 0.96875rem;

        .line-between {
          @include breakpoint-up(large) {
            display: none;
          }
          border: solid 1px $less-deep-blue-color;
        }

        .current-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 2.5rem;
          margin-top: 0.625rem;

          @include breakpoint-up(large) {
            display: none;
          }

          @include breakpoint-down(medium) {
            padding: 0 12%;
          }

          @include breakpoint-down(xsmall) {
            padding: 0 7%;
          }

          .title {
            font-family: SaolDisplay;
            font-size: 1.625rem;
            line-height: 1.54;
            letter-spacing: -0.46px;
          }

          .discover {
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 1.64;
            letter-spacing: -0.25px;

            a {
              transition: 0.5s color ease-in-out;
              &:hover {
                transition: 0.5s color ease-in-out;
                color: $gold-color;
              }
            }
          }
        }

        .social-icons {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          margin-top: 2.5625rem;
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 2;
          letter-spacing: -0.25px;
          text-align: center;

          @include breakpoint-up(large) {
            display: none;
          }

          a {
            div {
              visibility: hidden;
            }
          }

          svg {
            margin-bottom: 0.3125rem;
            path {
              stroke: $white-color;
              transition: stroke 0.5s ease-in-out;
            }
          }

          &--hover {
            cursor: pointer;
            transition: color 0.5s ease-in-out;
            &:hover {
              path {
                stroke: $gold-color;
              }
              color: $gold-color;
            }
          }
        }

        @include breakpoint-down(medium) {
          margin-top: 0px;
        }

        & > :not(:last-child) {
          margin-right: 1.1875rem;
          @include breakpoint-down(medium) {
            margin-right: 0px;
          }
        }

        .follow-text {
          font-family: SaolDisplay;
          font-size: 2.125rem;
          line-height: 1.06;
          letter-spacing: -0.61px;
          text-align: left;
          margin-bottom: 1.875rem;

          @include breakpoint-down(small) {
            font-size: 1.625rem;
          }
        }

        .social-section {
          display: flex;
          justify-content: space-between;
        }

        .socials {
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: color 0.3s ease-in-out;

          svg {
            path {
              transition: stroke 0.3s ease-in-out;
              stroke: $white-color;
            }
          }

          &:hover {
            color: $gold-color;
            svg {
              path {
                stroke: $gold-color;
              }
            }
          }

          &-title {
            font-size: 1.125rem;
            font-weight: 300;
            line-height: 1.8;
            letter-spacing: -0.32px;
            text-align: left;
            margin-right: 0.9375rem;
            visibility: hidden;

            @include breakpoint-down(xlarge) {
              font-size: 0.95rem;
            }
          }
        }
      }
    }

    &-more {
      @include breakpoint-down(medium) {
        width: 100%;
      }

      .more-title {
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 2;
        letter-spacing: -0.25px;
        text-align: center;
        margin-bottom: 3.125rem;
      }

      .section-one {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        @include breakpoint-down(medium) {
          justify-content: center;
        }

        img {
          @include breakpoint-down(small) {
            width: 6rem;
            height: 6rem;
          }
        }

        & > :not(:last-child) {
          margin-right: 2.28125rem;

          @include breakpoint-down(small) {
            margin-right: 1.5625rem;
          }
        }

        .content {
          p {
            font-size: 1.125rem;
            font-weight: 500;
            line-height: 1.56;
            letter-spacing: -0.32px;
            text-align: left;

            @include breakpoint-down(small) {
              font-size: 0.95rem;
            }
          }
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 9.625rem;
            height: 2.3125rem;
            font-size: 1rem;
            line-height: 1.06;
            letter-spacing: -0.29px;
            margin-top: 1.1875rem;
            background-color: $transparent-color;
            border: solid 1px $white-color;
            color: $white-color;
            transition: color 0.3s ease-in-out, border 0.3s ease-in-out;

            & > :not(:last-child) {
              margin-right: 1.3125rem;
            }

            svg {
              path {
                transition: stroke 0.3s ease-in-out;
                stroke: $white-color;
              }
            }

            &:hover {
              color: $gold-color;
              border: solid 1px $gold-color;
              svg {
                path {
                  stroke: $gold-color;
                }
              }
            }
          }
        }
      }

      .section-three {
        display: flex;
        justify-content: flex-end;
        padding-top: 2.625rem;
        padding-bottom: 2.875rem;

        @include breakpoint-down(medium) {
          justify-content: center;
        }

        img {
          width: 15.81875rem;
          height: 5.9625rem;
        }

        @include breakpoint-up(large) {
          display: none;
        }
      }
    }

    &-logo-name {
      transform: translateY(-2.8125rem);
      z-index: -1;
      margin: 0 auto;
      img {
        width: 15.81875rem;
        height: 5.9625rem;
      }
      @include breakpoint-up(large) {
        display: none;
      }
    }

    &-current-section {
      display: flex;
      justify-content: flex-end;

      @include breakpoint-down(medium) {
        display: none;
      }

      .wrapper {
        transform: translateY(1.25rem);
        @include breakpoint-down(xlarge) {
          transform: translateY(1.6rem);
        }
      }

      .title {
        font-family: SaolDisplay;
        font-size: 2.3125rem;
        line-height: 1.08;
        letter-spacing: -0.66px;
        text-align: left;

        @include breakpoint-down(xlarge) {
          font-size: 1.875rem;
        }
      }

      .discover {
        font-size: 1.375rem;
        font-weight: 300;
        line-height: 1.05;
        letter-spacing: -0.39px;
        text-align: left;

        @include breakpoint-down(xlarge) {
          font-size: 1.125rem;
        }

        a {
          transition: 0.5s color ease-in-out;
          &:hover {
            transition: 0.5s color ease-in-out;
            color: $gold-color;
          }
        }
      }
    }
  }
}
</style>
