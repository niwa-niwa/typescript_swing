var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// implemented object
var heel = {
    size: 16,
    color: "white",
    show: function () {
        return this.size;
    }
};
console.log(heel.show());
// implemented function
function func(values) {
    return values;
}
console.log(func({ size: 20, color: 'black' }));
// implemented class
var C_bag = /** @class */ (function () {
    function C_bag(co, st) {
        this.color = co;
        this.stack = st;
    }
    C_bag.prototype.total = function () {
        return this.stack;
    };
    return C_bag;
}());
var ba = new C_bag("blue", 4);
console.log(ba.total());
var TotalFn = /** @class */ (function () {
    function TotalFn(num) {
        this.sub_point = 'aaa';
        this.total = num;
    }
    TotalFn.getSubPoint = function () {
        return "ccccc";
    };
    TotalFn.brand = 'Prada';
    return TotalFn;
}());
var subTotal = /** @class */ (function (_super) {
    __extends(subTotal, _super);
    function subTotal(num) {
        return _super.call(this, num) || this;
    }
    subTotal.prototype.getNumber = function () {
        return this.total;
    };
    return subTotal;
}(TotalFn));
var abst = new subTotal(200);
console.log(abst.getNumber());
