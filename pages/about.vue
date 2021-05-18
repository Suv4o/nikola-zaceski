<template>
  <div>
    <Logo />
    <Main />
  </div>
</template>

<script>
import Logo from "@/components/ReusableUIs/discoverMoreTopLogo.vue";
import Main from "@/components/About/main.vue";

export default {
  components: {
    Logo,
    Main
  }
};
</script>

<style lang="scss" scoped></style>
