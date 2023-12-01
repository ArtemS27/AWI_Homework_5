const { clickElement, chooseSeat } = require("./lib/commands.js");
let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php", {timeout: 120000});
});

afterEach(async () => {
  page.close();
});

describe("tmweb page test", () => {
  test("Check title", async () => {
    const title = await page.title();
    expect(title).toEqual("ИдёмВКино");
  });

  test("Book on Tomorrow", async () => {
    clickElement(page, 'a[data-time-stamp="1701464400"]');
    await page.waitForTimeout(1000);
    clickElement(page, 'a[data-seance-id="177"]');
    await page.waitForTimeout(1000);
    // выбор ряда и места
    const rows = await page.$$('.buying-scheme__row');
    console.log(rows.length);
    const chairs = await rows[1].$$('.buying-scheme__chair');
    console.log(chairs.length);
    chairs[2].click();
    //выбор ряда и места из commands.js
    chooseSeat(1, 2);
    await page.waitForTimeout(3000);
  });
});
