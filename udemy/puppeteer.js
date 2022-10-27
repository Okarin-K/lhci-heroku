require('dotenv').config();
module.exports = async (browser, context) => {
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'ja-JP' });
  await page.setDefaultNavigationTimeout(90000);
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.83 Safari/537.36');
  
  await page.goto(`${process.env.UDEMY_URL}/join/login-popup`, { waitUntil: "networkidle2" });
  const isAlreadyLoggedIn = await page.$('#email--1').then(res => !res);
  if(!isAlreadyLoggedIn){
    await page.type('#email--1', process.env.UDEMY_USER_EMAIL);
    await page.type('#id_password', process.env.UDEMY_USER_PASSWORD);
    await page.click('#submit-id-submit', { waitUntil: "networkidle2" });
  }
  await page.goto(context.url, { waitUntil: "networkidle2" });
  await page.close();
};