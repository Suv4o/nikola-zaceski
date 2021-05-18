<template>
  <div class="footer">
    <div class="container">
      <div class="footer__main">
        <div class="footer__main-sections">
          <div class="footer__main-signature">
            <div class="section-two">
              <img
                src="/logos/relativeSignature.svg"
                alt="Nikola Zaceski Signature"
              />
            </div>
          </div>
        </div>
        <div class="footer__main-sections">
          <div class="footer__main-press">
            <div class="section-two"></div>
          </div>
        </div>
        <div class="footer__main-sections"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  position: relative;
  z-index: 0;
  background-color: $transparent-color;
  margin-top: 3.125rem;

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

  @include breakpoint-down(medium) {
    height: auto;
  }

  &__main {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 11.875rem;
    padding-bottom: 2.5rem;
    // padding-top: 6.25rem;

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
          margin-bottom: 3.125rem;
        }

        .social-icons {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          margin-top: 1.5625rem;
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 2;
          letter-spacing: -0.25px;
          text-align: center;

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

          @include breakpoint-down(small) {
            width: 11.5625rem;
            height: 4.35625rem;
            margin-left: 15%;
          }

          @include breakpoint-down(xsmall) {
            margin-left: 0;
          }
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

        @include breakpoint-down(medium) {
          margin-top: 1.4375rem;
        }

        & > :not(:last-child) {
          margin-right: 1.1875rem;
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
  }
}
</style>
