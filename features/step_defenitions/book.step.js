const {Given, When, Then, Before, After} = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai');
const { clickElement, chooseSeat, bookSeats } = require("../../lib/commands.js");

Before(async function() {
    const browser = await puppeteer.launch({ headless: false, slowMo: 50});
    const page = await browser.newPage();
    this.browser = browser;
    this.page = page;
});

After(async function() {
    if(this.browser) {
        await this.browser.close();
    }
});

Given("user is on {string} page",{timeout: 30000}, async function (string) {
    return await this.page.goto(string, {setTimeout: 10000});
});

When("user click on {string} day {string} seance and choose {int} row and {int} seat",{timeout: 30000}, async function (day, seance, row, seat) {
    await clickElement(this.page, day);
    await clickElement(this.page, seance);
    return await chooseSeat(this.page, row, seat);
});

When("user click on {string} day {string} seance", {timeout: 30000}, async function (day, seance) {
    await clickElement(this.page, day);
    return await clickElement(this.page, seance);
});

Then("user can book seat with {string} confirm button",{timeout: 30000}, async function (string) {
    return await bookSeats(this.page, string);
});

Then("user choose {int} row and {int} seat", {timeout: 30000}, async function (row, seat) {
    await chooseSeat(this.page, 13, 24);
});