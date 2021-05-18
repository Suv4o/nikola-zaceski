export default {
  target: "static",
  server: {
    host: "0"
  },
  /*
   ** Headers of the page
   */
  head: {
    title: "Nikola Zaceski - Singer",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Nikola Zaceski - Singer"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap"
      }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#000000" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  pageTransition: {
    name: "fade",
    mode: "out-in"
    // name: "slide-fade",
    // mode: "out-in"
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],

  styleResources: {
    scss: ["~/assets/scss/_variables.scss", "~/assets/scss/_breakpoints.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
