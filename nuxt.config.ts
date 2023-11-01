export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: "Raft",

      link: [
        {
          href: "path/to/font-awesome/css/font-awesome.min.css",
          rel: "stylesheet",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/ed95a14eea.js",
        },
      ],
    },
  },
});
