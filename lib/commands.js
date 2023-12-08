module.exports={
    clickElement: async function(page, selector) {
        try {
            await page.waitForTimeout(1000);
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error('Selector is not clickable: ${selector}');
        }
    },
    chooseSeat: async function(page, row, seat) {
        try {
            await page.waitForTimeout(1000);
            await page.waitForSelector('.buying-scheme__row');
            let rows = await page.$$('.buying-scheme__row');
            let chairs = await rows[row].$$('.buying-scheme__chair');
            chairs[seat].click();
        } catch (error) {
            throw new Error('Invalid seat or row');
        }
    },
    bookSeats: async function(page, buttonSelector) {
        try {
            await page.waitForSelector(buttonSelector);
            const bool = await page.$eval(".acceptin-button", link => link.getAttribute('disabled'));
            if(bool == null) {
                console.log('Seat(s) is booked');
            }
        } catch (error) {
            throw new Error('Button is unactive');
        }
    }
    
}