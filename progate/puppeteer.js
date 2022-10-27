module.exports = async (browser, context) => {
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'ja-JP' });
  await page.setDefaultNavigationTimeout(90000);
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36');
  
  await page.goto(`${process.env.PROGATE_URL}/signin`, { waitUntil: "networkidle2" });
  const isAlreadyLoggedIn = await page.$('#email--1').then(res => !res);
  if(!isAlreadyLoggedIn){
    await page.$eval('#email', el => el.value = process.env.PROGATE_USER_EMAIL);
    await page.$eval('#password', el => el.value = process.env.PROGATE_USER_PASSWORD);
    const [button] = await page.$x("//button[contains(., 'ログイン')]");
    await button.click({ waitUntil: "networkidle2" });
  }
  await page.goto(context.url, { waitUntil: "networkidle2" });
  await page.close();
};