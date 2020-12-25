class Customer {
    //properties
    private firstName: string;
    private lastName: string; 

    //constructors
    constructor(theFirst: string, theLast: string){
        this.firstName=theFirst;
        this.lastName=theLast;
    }


    //getter / setter methods
}

//let myCustomer=new Customer();
/*
myCustomer.firstName= "Martin";
myCustomer.lastName= "Dixon";


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/

let myCustomer=new Customer("Martin","Deexon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);