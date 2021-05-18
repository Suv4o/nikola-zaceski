<template>
  <div class="logo">
    <img src="/logos/signature.svg" alt="Logo Signature" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  margin-top: 4.0625rem;
  margin-bottom: 3.5625rem;
  @include breakpoint-down(small) {
    margin-top: 0.875rem;
    margin-bottom: 1.25rem;
  }

  img {
    width: 18.95625rem;
    height: 7.14375rem;

    @include breakpoint-down(small) {
      width: 9.51875rem;
      height: 3.5875rem;
    }
  }
}
</style>
