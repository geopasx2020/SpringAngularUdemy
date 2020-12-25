var Customer = /** @class */ (function () {
    //constructors
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//let myCustomer=new Customer();
/*
myCustomer.firstName= "Martin";
myCustomer.lastName= "Dixon";


console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
*/
var myCustomer = new Customer("Martin", "Deexon");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
