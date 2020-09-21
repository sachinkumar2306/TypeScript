var Rect = /** @class */ (function () {
    function Rect(x, y) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.printArea = function () {
            console.log(_this.x * _this.y);
        };
    }
    return Rect;
}());
var square = {
    x: 10,
    y: 20,
    printArea: function () {
        console.log(this.x * this.y);
    }
};
var createShape = function (shape) {
    shape.printArea();
};
// rectangle : Rect = new Rect();
// rectangle : Rect = new Rect();
createShape(new Rect());
createShape(square);
createShape({
    x: 10,
    y: 20,
    printArea: function () {
        console.log(this.x * this.y);
    }
});
