const { clickElement, chooseSeat, bookSeats } = require("./lib/commands.js");
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
    clickElement(page, 'a[data-time-stamp="1701810000"]');
    await page.waitForTimeout(1000);
    clickElement(page, 'a[data-seance-id="177"]');
    await page.waitForTimeout(1000);
    chooseSeat(page, 1, 2);
    await page.waitForTimeout(1000);
    bookSeats(page, '.acceptin-button');
    await page.waitForTimeout(1000);
  });

  test("Try book unexisted seat", async () => {
    clickElement(page, 'a[data-time-stamp="1701810000"]');
    await page.waitForTimeout(1000);
    clickElement(page, 'a[data-seance-id="177"]');
    await page.waitForTimeout(1000);
    expect(() => chooseSeat(page, 13, 24).toThrowError('Invalid seat or row'));
    await page.waitForTimeout(1000);
  });
});
