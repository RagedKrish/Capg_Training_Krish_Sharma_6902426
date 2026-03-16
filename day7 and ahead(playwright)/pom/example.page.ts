class example{
    usernameTF:string;
    passwordTF:string;
    SubmitBtn:any;
    constructor(page){
        this.usernameTF=page.locator('#username');
        this.passwordTF=page.locator('#password');
        this.SubmitBtn=page.locator('#submit');
    }
    async username(name){
        await this.usernameTF.fill(name);
    }
    async password(pass){
        await this.passwordTF.fill(pass);
    }
    async submit(){
        await this.SubmitBtn.click();
    }
    async login(name,pass){
        await this.username(name);
        await this.password(pass);
        await this.submit();
    }
}

export default example