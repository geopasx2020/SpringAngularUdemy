var pelatis = /** @class */ (function () {
    function pelatis() {
    }
    Object.defineProperty(pelatis.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    return pelatis;
}());
var myCustomer = new pelatis();
myCustomer.FirstName = "Susan"; //calls the set method
console.log(myCustomer.FirstName); //calls the get method
//tsc --target ES5 --noEmitOnError Customer.ts, command in order for no error
