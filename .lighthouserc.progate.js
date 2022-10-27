module.exports = {
    ci: {
      collect: {
        url: [`${process.env.PROGATE_URL}/dashboard`, `${process.env.PROGATE_URL}/courses`],
        puppeteerScript: `./progate/puppeteer.js`,
          puppeteerLaunchOptions: {
            defaultViewport: {
              width: 1920,
              height: 1080,
              isMobile: false
            },
            args: [
              '--headless',
              '--disable-gpu',
              '--no-zygote',
              '--no-sandbox',
              '--single-process',
              '--hide-scrollbars',
              '--incognito',
              '--settings.disableStorageReset'
            ], 
          },
          settings: {
            preset: "desktop", // default: mobile https://github.com/GoogleChrome/lighthouse/blob/master/docs/emulation.md
            output: 'json',
            onlyCategories: ['performance'],
          },
          numberOfRuns: 2
      },
      upload: {
        target: "lhci",
        serverBaseUrl: "https://shrouded-woodland-98361.herokuapp.com",
        ignoreDuplicateBuildFailure: true,
        token: process.env.LIGHTHOUSE_SERVER_PROGATE_BUILD_TOKEN
      },
    },
  };