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

Given("user is on {string} page", async function (string) {
    return await this.page.goto(string, {setTimeout: 10000});
});

When("user click on {string} day {string} seance and choose (-?\d+) row and (-?\d+) seat", async function (day, seance, row, seat) {
    clickElement(this.page, day);
    clickElement(this.page, seance);
    return await chooseSeat(this.page, row, seat);
});

Then("User can book seat(s) with {string} confirm button", async function (string) {
    return await bookSeats(this.page, string);
});