module.exports = {
    ci: {
      collect: {
        url: ['https://www.google.com/?hl=ja'],
        numberOfRuns: 1
      },
      upload: {
        target: "lhci",
        serverBaseUrl: "https://shrouded-woodland-98361.herokuapp.com",
        ignoreDuplicateBuildFailure: true,
        token: process.env.LIGHTHOUSE_BUILD_TOKEN
      },
    },
  };