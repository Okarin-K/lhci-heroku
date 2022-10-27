module.exports = {
    ci: {
      collect: {
        url: ['https://www.google.com/?hl=ja'],
      },
      upload: {
        target: "lhci",
        serverBaseUrl: "https://shrouded-woodland-98361.herokuapp.com",
        ignoreDuplicateBuildFailuer: true,
        token: process.env.LIGHTHOUSE_BUILD_TOKEN
      },
    },
  };