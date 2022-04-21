'use strict';

const puppeteer = require('puppeteer');
 
exports.myGuiTest = async() => {
  // const browser = await puppeteer.launch({ headless: true, defaultViewport: null, args: [ '--proxy-server=http://70.10.15.10:8080' ] });

  const browser = await puppeteer.launch({ headless: true, defaultViewport: null });

  const page = await browser.newPage();

  await page.goto("https://www.naver.com");
  await page.waitForSelector("div.green_window", { timeout: 5000 });
  
  const content = await page.content();
  // console.log(content);
  await browser.close();
  return content;
};

