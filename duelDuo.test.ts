
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays div with id = choices', async () => {
    await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.id('choices'));
    const isDisplayed = await choices.isDisplayed();
    expect(isDisplayed).toBeTruthy();
})


test('See All Bots button lists all bot cards', async () => {
    await driver.findElement(By.id('see-all')).click();
    const allBots = await driver.findElement(By.id('all-bots'));
    const isDisplayed = await allBots.isDisplayed();
    expect(isDisplayed).toBeTruthy();
})