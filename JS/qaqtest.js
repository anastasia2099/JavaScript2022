require('chromedriver');
const {Builder, By, Key} = require ("selenium-webdriver");


async function example(){

    //launch browser

    let driver = await new Builder().forBrowser("chrome").build();


    //navigate to applocation 
    await driver.get('http://www.google.com/ncr');
//*[@id="L2AGLb"]/div
    await driver.findElement(By.id("L2AGLb")).click();

    //add a todo
    await driver.findElement(By.xpath("/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input")).sendKeys("webdriver", Key.RETURN);

    //close the browser 
    await driver.quit();
};
//дописать стобы быстро браузер не закрывался
example();