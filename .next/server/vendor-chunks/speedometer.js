/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/speedometer";
exports.ids = ["vendor-chunks/speedometer"];
exports.modules = {

/***/ "(ssr)/./node_modules/speedometer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/speedometer/index.js ***!
  \*******************************************/
/***/ ((module) => {

eval("var tick = 1\nvar maxTick = 65535\nvar resolution = 4\nvar inc = function () {\n  tick = (tick + 1) & maxTick\n}\n\nvar timer = setInterval(inc, (1000 / resolution) | 0)\nif (timer.unref) timer.unref()\n\nmodule.exports = function (seconds) {\n  var size = resolution * (seconds || 5)\n  var buffer = [0]\n  var pointer = 1\n  var last = (tick - 1) & maxTick\n\n  return function (delta) {\n    var dist = (tick - last) & maxTick\n    if (dist > size) dist = size\n    last = tick\n\n    while (dist--) {\n      if (pointer === size) pointer = 0\n      buffer[pointer] = buffer[pointer === 0 ? size - 1 : pointer - 1]\n      pointer++\n    }\n\n    if (delta) buffer[pointer - 1] += delta\n\n    var top = buffer[pointer - 1]\n    var btm = buffer.length < size ? 0 : buffer[pointer === size ? 0 : pointer]\n\n    return buffer.length < resolution ? top : (top - btm) * resolution / buffer.length\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3BlZWRvbWV0ZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2Utc2hvcGNvLy4vbm9kZV9tb2R1bGVzL3NwZWVkb21ldGVyL2luZGV4LmpzP2NjYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRpY2sgPSAxXG52YXIgbWF4VGljayA9IDY1NTM1XG52YXIgcmVzb2x1dGlvbiA9IDRcbnZhciBpbmMgPSBmdW5jdGlvbiAoKSB7XG4gIHRpY2sgPSAodGljayArIDEpICYgbWF4VGlja1xufVxuXG52YXIgdGltZXIgPSBzZXRJbnRlcnZhbChpbmMsICgxMDAwIC8gcmVzb2x1dGlvbikgfCAwKVxuaWYgKHRpbWVyLnVucmVmKSB0aW1lci51bnJlZigpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHNlY29uZHMpIHtcbiAgdmFyIHNpemUgPSByZXNvbHV0aW9uICogKHNlY29uZHMgfHwgNSlcbiAgdmFyIGJ1ZmZlciA9IFswXVxuICB2YXIgcG9pbnRlciA9IDFcbiAgdmFyIGxhc3QgPSAodGljayAtIDEpICYgbWF4VGlja1xuXG4gIHJldHVybiBmdW5jdGlvbiAoZGVsdGEpIHtcbiAgICB2YXIgZGlzdCA9ICh0aWNrIC0gbGFzdCkgJiBtYXhUaWNrXG4gICAgaWYgKGRpc3QgPiBzaXplKSBkaXN0ID0gc2l6ZVxuICAgIGxhc3QgPSB0aWNrXG5cbiAgICB3aGlsZSAoZGlzdC0tKSB7XG4gICAgICBpZiAocG9pbnRlciA9PT0gc2l6ZSkgcG9pbnRlciA9IDBcbiAgICAgIGJ1ZmZlcltwb2ludGVyXSA9IGJ1ZmZlcltwb2ludGVyID09PSAwID8gc2l6ZSAtIDEgOiBwb2ludGVyIC0gMV1cbiAgICAgIHBvaW50ZXIrK1xuICAgIH1cblxuICAgIGlmIChkZWx0YSkgYnVmZmVyW3BvaW50ZXIgLSAxXSArPSBkZWx0YVxuXG4gICAgdmFyIHRvcCA9IGJ1ZmZlcltwb2ludGVyIC0gMV1cbiAgICB2YXIgYnRtID0gYnVmZmVyLmxlbmd0aCA8IHNpemUgPyAwIDogYnVmZmVyW3BvaW50ZXIgPT09IHNpemUgPyAwIDogcG9pbnRlcl1cblxuICAgIHJldHVybiBidWZmZXIubGVuZ3RoIDwgcmVzb2x1dGlvbiA/IHRvcCA6ICh0b3AgLSBidG0pICogcmVzb2x1dGlvbiAvIGJ1ZmZlci5sZW5ndGhcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/speedometer/index.js\n");

/***/ })

};
;