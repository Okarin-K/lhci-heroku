module.exports = {
    ci: {
      collect: {
        url: ['https://www.google.com/?hl=ja', `${process.env.UDEMY_URL}/courses/development/web-development/`],
        collect: {
          url,
          puppeteerScript: `./udemy/puppeteer.js`,
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
          numberOfRuns: 2
        },
      },
      upload: {
        target: "lhci",
        serverBaseUrl: "https://shrouded-woodland-98361.herokuapp.com",
        ignoreDuplicateBuildFailuer: true,
        token: process.env.LIGHTHOUSE_BUILD_TOKEN
      },
    },
  };