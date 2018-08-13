export class Quote {
    mydate: Date;
    // tslint:disable-next-line:one-line
    constructor(public details: string, public author: string, public publisher: string) {
        this.mydate = new Date();
    }
}
