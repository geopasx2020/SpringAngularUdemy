class Customer {
    private firstName: string;
    private lastName: string;

    constructor(theFirst:string, theLast:string){
        this.firstName=theFirst;
        this.lastName=theLast;

    }
}

//let's create an intance for our class
let myCustomer=new Customer('Martin','Dixon');
 

 console.log(myCustomer.firstName);
 console.log(myCustomer.lastName);