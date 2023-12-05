module.exports={
    clickElement: async function(page, selector) {
        try {
            await page.waitForSelector(selector);
            await page.click(selector);
        } catch (error) {
            throw new Error('Selector is not clickable: ${selector}');
        }
    },
    chooseSeat: async function(page, row, seat) {
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
    },
    bookSeats: async function(page, buttonSelector) {
        try {
            await page.waitForSelector(buttonSelector);
            if(await page.$('.acceptin-button[disabled=false]')){
                return console.log('Seat(s) has booked');
            }
        } catch (error) {
            throw new Error('Button is unactive');
        }
    }
    
}