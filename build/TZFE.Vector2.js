var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.set = function (x, y) {
        if (x === void 0) { x = this.x; }
        if (y === void 0) { y = this.y; }
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.copy = function (vector2) {
        this.set(vector2.x, vector2.y);
        return this;
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y + this.y);
    };
    Vector2.prototype.normalize = function () {
        return this.divideScalar(this.length() || 1);
    };
    Vector2.prototype.multiply = function (vector2) {
        this.x *= vector2.x;
        this.y *= vector2.y;
        return this;
    };
    Vector2.prototype.multiplyScalar = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    Vector2.prototype.divide = function (vector2) {
        this.x /= vector2.x;
        this.y /= vector2.y;
        return this;
    };
    Vector2.prototype.divideScalar = function (scalar) {
        return this.multiplyScalar(1 / scalar);
    };
    Vector2.prototype.getDirectionPropertyName = function () {
        if (this.x != 0 && this.y != 0) {
            return Vector2.XY;
        }
        if (this.y != 0) {
            return Vector2.X;
        }
        return Vector2.Y;
    };
    Vector2.X = "x";
    Vector2.Y = "y";
    Vector2.XY = "xy";
    return Vector2;
}());
export default Vector2;
//# sourceMappingURL=TZFE.Vector2.js.map