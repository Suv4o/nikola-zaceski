<template>
  <div class="nav">
    <button class="nav__language-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.863"
        height="24.242"
        viewBox="0 0 23.863 24.242"
      >
        <path
          id="Icon_awesome-flag"
          data-name="Icon awesome-flag"
          d="M16.735,4.677C14.2,4.677,12.1,3.03,8.912,3.03A9.2,9.2,0,0,0,5.69,3.6,2.652,2.652,0,1,0,1.7,4.827V23.106a1.136,1.136,0,0,0,1.136,1.136h.758a1.136,1.136,0,0,0,1.136-1.136v-4.47a13.229,13.229,0,0,1,5.418-1.047c2.537,0,4.633,1.647,7.823,1.647a9.912,9.912,0,0,0,5.8-1.935,1.512,1.512,0,0,0,.655-1.248V4.543a1.515,1.515,0,0,0-2.154-1.374,13.785,13.785,0,0,1-5.537,1.508Z"
          transform="translate(-0.563 0)"
          fill="#fff"
        />
      </svg>
      <div>EN</div>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  &__language-button {
    display: flex;
    align-items: center;
    position: fixed;
    top: 4.0625rem;
    right: 3%;
    z-index: 3;
    cursor: pointer;
    background-color: $transparent-color;
    border: 0;
    transition: all 0.5s ease-in-out;

    &:hover {
      transition: all 0.5s ease-in-out;
      svg {
        path {
          transition: all 0.5s ease-in-out;
          fill: $gold-color;
        }
      }
      & > div {
        transition: all 0.5s ease-in-out;
        color: $gold-color;
      }
    }

    svg {
      path {
        transition: all 0.5s ease-in-out;
        fill: $white-color;
      }
      margin-right: 1rem;
      @include breakpoint-down(medium) {
        margin-right: 0.8125rem;
        width: 1.25125rem;
        height: 1.2675rem;
      }
      @include breakpoint-down(small) {
        margin-right: 0.625rem;
        width: 0.9625rem;
        height: 0.975rem;
      }
    }

    & > div {
      font-size: 1.375rem;
      font-weight: 300;
      line-height: 1.14;
      letter-spacing: -0.39px;
      text-align: left;
      color: $white-color;
      transition: all 0.5s ease-in-out;

      @include breakpoint-down(medium) {
        font-size: 1.1375rem;
      }

      @include breakpoint-down(small) {
        font-size: 0.875rem;
      }
    }

    @include breakpoint-down(xlarge) {
      right: 2%;
    }

    @include breakpoint-down(large) {
      right: 1%;
    }

    @include breakpoint-down(small) {
      position: absolute;
      top: 1.5rem;
      right: 2%;
    }
  }
}
</style>
