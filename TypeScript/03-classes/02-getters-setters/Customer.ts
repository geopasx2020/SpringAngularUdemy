class pelatis {
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst:string, theLast:string){
        this._firstName=theFirst;
        this._lastName=theLast;

    }

    public get FirstName(): string{
        return this._firstName;
    }

    public set FirstName(value:string) {
        this._firstName = value;
    }

    

}

let myCustomer=new pelatis("Martin","Dixon");

myCustomer.FirstName="Susan"; //calls the set method
console.log(myCustomer.FirstName);//calls the get method

//tsc --target ES5 --noEmitOnError Customer.ts, command in order for no error
