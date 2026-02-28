import { test } from "@playwright/test"

test("title", () => {
    console.log("hii");

})
test("title2", () => {
    console.log("hii2");

})
test("title3", () => {
    console.log("hii3");

})

test("Amazon", async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.locator('input#twotabsearchtextbox').fill("shoes");

    await page.keyboard.press("Enter");

})