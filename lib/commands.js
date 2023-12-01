module.exports={
    clickElement: async function(page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error('Selector is not clickable: ${selector}');
        }
    },
    chooseSeat: async function(row, seat) {
        try {
            await page.waitForSelector('.buying-scheme__row');
            let rows = await page.$$('.buying-scheme__row');
            console.log(rows.length);
            let chairs = await rows[row].$$('.buying-scheme__chair');
            console.log(chairs.length);
            chairs[seat].click();
        } catch (error) {
            throw new Error('Invalid seat or row');
        }
    }
}