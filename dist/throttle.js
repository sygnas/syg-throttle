(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.throttle = factory());
}(this, (function () { 'use strict';

var index = function (timing, func, scope) {
    var id = null;

    return function () {
        if (id !== null) return;
        func.apply(scope);

        id = setTimeout(function () {
            id = null;
        }, timing);
    };
};

return index;

})));
//# sourceMappingURL=throttle.js.map
