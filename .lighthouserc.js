module.exports = {
    ci: {
      collect: {
        staticDistDir: "./",
      },
      upload: {
        target: "lhci",
        serverBaseUrl: "https://shrouded-woodland-98361.herokuapp.com",
        token: process.env.LIGHTHOUSE_BUILD_TOKEN
      },
    },
  };