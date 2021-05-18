<template>
  <div>
    <nuxt />
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  components: {
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>
