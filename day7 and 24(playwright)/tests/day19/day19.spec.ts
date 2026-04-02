import { test } from "@playwright/test"
import path from "path"
import excel from "exceljs"

test('Write_excel_data', async () => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/result.xlsx"));
    let sheet = await book.getWorksheet('Sheet4');
    if (!sheet) {
        sheet = await book.addWorksheet('Sheet4');
    }
    sheet.getRow(1).getCell(1).value = "Sahil";
    await book.xlsx.writeFile(path.join(__dirname, "../../testdata/result.xlsx"));
})

test('Write_multiple_data', async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../testdata/result.xlsx"));
    let sheet = await book.getWorksheet('Sheet5');
    if (!sheet) {
        sheet = await book.addWorksheet('Sheet5');
    }
    await page.goto('https://www.amazon.com/');
    let search = ['shoes', 'sahil', 'nimish'];
    for (let c = 1; c <= search.length; c++) {
        await page.locator('#twotabsearchtextbox').fill(search[c - 1]);
        let r = 1;
        sheet.getRow(r++).getCell(c).value = search[c-1];
        await page.waitForTimeout(2000);
        let items = await page.locator('//div[@class="s-suggestion s-suggestion-ellipsis-direction"]').allTextContents();
        for (let item of items) {
            sheet.getRow(r++).getCell(c).value = item;
        }
    }
    await book.xlsx.writeFile(path.join(__dirname, "../../testdata/result.xlsx"));
})