class Customer {
    private firstName:string;
    private lastName:string;

    public getFirstName():string{
        return this.firstName;
    }

    public setFirstName(theFirst:string):void{
        return this.firstName;
    }

    public getLastName():string{
        this.firstName=theFirst;
    }

}