"use strict";
exports.__esModule = true;
/**
 * 2차원 벡터 - 크기와 방향을 가진 물리량 혹은 좌표
 */
var Vector2 = /** @class */ (function () {
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @param {number} [x=0] 기본 벡터 x 속성
     * @param {number} [y=0] 기본 벡터 y 속성
     * @description TZFE.Vector2 생성자입니다.
     */
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 벡터 속성을 설정합니다.
     * @param {number} [x=this.x] 벡터 x 속성
     * @param {number} [y=this.y] 벡터 y 속성
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.set = function (x, y) {
        if (x === void 0) { x = this.x; }
        if (y === void 0) { y = this.y; }
        this.x = x;
        this.y = y;
        return this;
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 다른 벡터 속성을 this의 속성으로 복사합니다.
     * @param {TZFE.Vector2} vector2 복사에 참조할 벡터
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.copy = function (vector2) {
        this.set(vector2.x, vector2.y);
        return this;
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description this를 기준으로 새로운 벡터를 복사 생성합니다.
     * @returns {TZFE.Vector2} 복사된 벡터
     */
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 벡터의 크기를 반환합니다.
     * @returns {number} 벡터의 크기
     */
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y + this.y);
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 벡터의 방향은 그대로 크기를 1로 변경합니다.
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.normalize = function () {
        return this.divideScalar(this.length() || 1);
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 다른 벡터를 this에 곱합니다.
     * @param {TZFE.Vector2} vector2 곱할 벡터
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.multiply = function (vector2) {
        this.x *= vector2.x;
        this.y *= vector2.y;
        return this;
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 실수를 this에 곱합니다.
     * @param {number} scalar 곱할 실수
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.multiplyScalar = function (scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description this에서 다른 벡터를 나눕니다.
     * @param {TZFE.Vector2} vector2 나눌 벡터
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.divide = function (vector2) {
        this.x /= vector2.x;
        this.y /= vector2.y;
        return this;
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description this에서 실수를 나눕니다.
     * @param {number} scalar 나눌 실수
     * @returns {TZFE.Vector2} this
     */
    Vector2.prototype.divideScalar = function (scalar) {
        return this.multiplyScalar(1 / scalar);
    };
    /**
     * @author zzinpan <zzinapn@kakao.com>
     * @version 1.0.0
     * @description 방향성에 따라 방향속성 문자열을 반환합니다.
     * @returns {string}
     */
    Vector2.prototype.getDirectionPropertyName = function () {
        if (this.x != 0 && this.y != 0) {
            return Vector2.XY;
        }
        if (this.y != 0) {
            return Vector2.X;
        }
        return Vector2.Y;
    };
    /**
     * @constant
     * @type {string}
     * @default
     */
    Vector2.X = "x";
    /**
     * @constant
     * @type {string}
     * @default
     */
    Vector2.Y = "y";
    /**
     * @constant
     * @type {string}
     * @default
     */
    Vector2.XY = "xy";
    return Vector2;
}());
exports["default"] = Vector2;
