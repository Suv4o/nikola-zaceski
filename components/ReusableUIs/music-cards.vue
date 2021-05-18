<template>
  <div class="videos-individual" :id="id">
    <img :src="imgUrl" alt="Video Cover" />
    <svg
      class="play-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="32.632"
      height="22.944"
      viewBox="0 0 32.632 22.944"
    >
      <path
        id="Icon_awesome-youtube"
        data-name="Icon awesome-youtube"
        d="M33,8.09a4.1,4.1,0,0,0-2.885-2.9C27.57,4.5,17.366,4.5,17.366,4.5s-10.2,0-12.749.686a4.1,4.1,0,0,0-2.885,2.9A43.013,43.013,0,0,0,1.05,16,43.013,43.013,0,0,0,1.732,23.9a4.039,4.039,0,0,0,2.885,2.857c2.545.686,12.749.686,12.749.686s10.2,0,12.749-.686A4.039,4.039,0,0,0,33,23.9,43.013,43.013,0,0,0,33.682,16,43.013,43.013,0,0,0,33,8.09ZM14.029,20.847v-9.7L22.557,16l-8.529,4.852Z"
        transform="translate(-1.05 -4.5)"
        fill="#fff"
      />
    </svg>
    <div class="first-row">
      <div class="name">
        <a :href="youtubeChannel">{{ name }}</a>
      </div>
      <a :href="shareLink" class="share">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.885"
          height="17.675"
          viewBox="0 0 19.885 17.675"
        >
          <path
            id="Icon_awesome-share-square"
            data-name="Icon awesome-share-square"
            d="M19.625,6.126,14.654,10.82a.829.829,0,0,1-1.4-.6V7.734c-4.991.033-7.1,1.212-5.688,5.915a.553.553,0,0,1-.863.6A6.645,6.645,0,0,1,4.143,9.3c0-4.969,4.06-5.955,9.114-5.983V.829a.829.829,0,0,1,1.4-.6l4.971,4.695A.829.829,0,0,1,19.625,6.126Zm-6.369,6.962v2.378H2.209V4.419H3.967a.414.414,0,0,0,.3-.127,6.73,6.73,0,0,1,1.761-1.3.414.414,0,0,0-.191-.781H1.657A1.657,1.657,0,0,0,0,3.866V16.018a1.657,1.657,0,0,0,1.657,1.657H13.809a1.657,1.657,0,0,0,1.657-1.657V12.953a.414.414,0,0,0-.553-.39,2.48,2.48,0,0,1-1.18.117A.415.415,0,0,0,13.257,13.088Z"
            transform="translate(0 0)"
            fill="#fff"
            opacity="0.44"
          />
        </svg>
      </a>
    </div>
    <div class="second-row">
      <div class="title">
        <a :href="youtubeSong">{{ title }}</a>
      </div>
      <div class="time">{{ time }}</div>
    </div>
    <div class="third-row">
      <div class="time">{{ time }}</div>
      <a :href="shareLink" class="share">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19.885"
          height="17.675"
          viewBox="0 0 19.885 17.675"
        >
          <path
            id="Icon_awesome-share-square"
            data-name="Icon awesome-share-square"
            d="M19.625,6.126,14.654,10.82a.829.829,0,0,1-1.4-.6V7.734c-4.991.033-7.1,1.212-5.688,5.915a.553.553,0,0,1-.863.6A6.645,6.645,0,0,1,4.143,9.3c0-4.969,4.06-5.955,9.114-5.983V.829a.829.829,0,0,1,1.4-.6l4.971,4.695A.829.829,0,0,1,19.625,6.126Zm-6.369,6.962v2.378H2.209V4.419H3.967a.414.414,0,0,0,.3-.127,6.73,6.73,0,0,1,1.761-1.3.414.414,0,0,0-.191-.781H1.657A1.657,1.657,0,0,0,0,3.866V16.018a1.657,1.657,0,0,0,1.657,1.657H13.809a1.657,1.657,0,0,0,1.657-1.657V12.953a.414.414,0,0,0-.553-.39,2.48,2.48,0,0,1-1.18.117A.415.415,0,0,0,13.257,13.088Z"
            transform="translate(0 0)"
            fill="#fff"
            opacity="0.44"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    youtubeChannel: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    shareLink: {
      type: String,
      required: true
    },
    youtubeSong: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    isInside: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.videos {
  &-individual {
    display: unset;
    position: relative;
    width: 24.3125rem;
    height: 20.625rem;
    background-color: $blue-color;
    @media (max-width: 105.625em) {
      display: inline-block;
    }

    @include breakpoint-down(medium) {
      width: 14.25rem;
      height: 15.5rem;
    }

    img {
      height: 13.625rem;
      @include breakpoint-down(medium) {
        width: 14.25rem;
        height: auto;
      }
    }

    .play-icon {
      position: absolute;
      top: 12.8125rem;
      left: 1.5625rem;
      @include breakpoint-down(medium) {
        top: 7.1875rem;
        left: 1.25rem;
      }
    }

    .first-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.9375rem;
      padding-top: 1.875rem;
      padding-bottom: 0.5rem;

      @include breakpoint-down(medium) {
        padding-top: 1.5625rem;
        padding-bottom: 0.25rem;
      }

      .name {
        position: relative;
        font-size: 1.25rem;
        font-weight: bold;
        letter-spacing: -0.36px;
        text-align: left;
        z-index: 2;
        @include breakpoint-down(medium) {
          font-size: 1.125rem;
        }
        a {
          transition: 0.3s color ease-in-out;
          &:hover {
            color: $gold-color;
            transition: 0.3s color ease-in-out;
          }
        }
      }

      .share {
        position: relative;
        cursor: pointer;
        z-index: 2;
        svg {
          path {
            transition: 0.3s fill ease-in-out;
            fill: $white-color;
          }
        }
        transition: 0.3s fill ease-in-out;
        &:hover {
          svg {
            path {
              transition: 0.3s fill ease-in-out;
              fill: $gold-color;
            }
          }
        }
        @include breakpoint-down(medium) {
          display: none;
        }
      }
    }

    .second-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.9375rem;

      .title {
        position: relative;
        font-size: 1.125rem;
        font-weight: 300;
        letter-spacing: -0.32px;
        text-align: left;
        z-index: 2;
        @include breakpoint-down(medium) {
          font-size: 0.875rem;
        }
        a {
          transition: 0.3s color ease-in-out;
          &:hover {
            color: $gold-color;
            transition: 0.3s color ease-in-out;
          }
        }
      }

      .time {
        font-size: 0.875rem;
        font-weight: 300;
        letter-spacing: -0.25px;
        text-align: left;

        @include breakpoint-down(medium) {
          display: none;
        }
      }
    }

    .third-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 0.9375rem;
      padding-top: 0.9375rem;

      @include breakpoint-up(large) {
        display: none;
      }

      .time {
        font-size: 0.875rem;
        font-weight: 300;
        letter-spacing: -0.25px;
        text-align: left;
      }

      .share {
        cursor: pointer;
        svg {
          path {
            transition: 0.3s fill ease-in-out;
            fill: $white-color;
          }
        }
        transition: 0.3s fill ease-in-out;
        &:hover {
          svg {
            path {
              transition: 0.3s fill ease-in-out;
              fill: $gold-color;
            }
          }
        }
      }
    }
  }
}
</style>
