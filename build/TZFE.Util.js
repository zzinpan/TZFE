var Util = {
    getLineString: function (columnCount, maxStringlength, start, center, centerSeparator, end) {
        return start + new Array(columnCount).fill("".padStart(maxStringlength, center)).join(centerSeparator) + end;
    },
    getRandomId: function () {
        return Date.now() + "::" + Math.random() * 100000000000000000;
    },
    getRandomInteger: function (min, max) {
        return Math.round(Math.random() * (max - min)) + min;
    }
};
export default Util;
//# sourceMappingURL=TZFE.Util.js.map