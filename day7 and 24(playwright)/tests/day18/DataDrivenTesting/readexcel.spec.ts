import { test } from "@playwright/test"
import excel from "exceljs"
import path from "path";

test('Reading_test_data', async () => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../../testdata/result.xlsx"));
    let sheet = await book.getWorksheet('Sheet2');
    // let data=await sheet?.getRow(2).getCell(1).value;
    let data = await sheet?.getRow(2).getCell(1).toString();
    console.log(data);

})

test('Reading_multiple_data', async () => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../../testdata/result.xlsx"));
    let sheet = await book.getWorksheet('Sheet1');
    for (let i = 1; i <= sheet?.actualRowCount; i++) {
        for (let j = 1; j <= sheet?.actualColumnCount; j++) {
            let data = await sheet?.getRow(i).getCell(j).toString();
            console.log(data)
        }
    }
})

test('Using_test_data', async ({ page }) => {
    let book = new excel.Workbook();
    await book.xlsx.readFile(path.join(__dirname, "../../../testdata/result.xlsx"));
    let sheet = await book.getWorksheet('Sheet3');
    let url = await sheet?.getRow(2).getCell(1).value;
    await page.goto(url);
    for (let r = 2; r <= sheet?.actualRowCount; r++) {
        for (let c = 2; c <= sheet?.actualColumnCount; c++) {
            let label = await sheet?.getRow(1).getCell(c).toString();
            let data = await sheet?.getRow(r).getCell(c).toString();
            await page.getByLabel(label).fill(data);
        }
        await page.waitForTimeout(3000);
    }
})