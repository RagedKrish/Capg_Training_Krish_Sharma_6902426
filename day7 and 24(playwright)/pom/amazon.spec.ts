class amazon{
    searchbox:string;
    search:any;
    constructor(page){
        page.goto('https://www.amazon.in/');
        this.searchbox=page.locator('#twotabsearchtextbox').first();
        this.search=page.locator('#nav-search-submit-button');
    }
    async searchproduct(product){
        await this.searchbox.fill(product);
        await this.search.click();
    }
    async select10gbram(page){
        await page.locator('//span[text()="10 GB & Above"]').click();
    }
    async selectproduct(page,num){
        await page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]').nth(num).click();
    }
    async additem(page,num){
        await page.locator('#selectQuantity').click();
        await page.locator(`(//li[@class="a-dropdown-item a-declarative"])[${num}]`).click();
        await page.locator('[name="submit.add-to-cart"]').last().click();
    }

}

export default amazon;