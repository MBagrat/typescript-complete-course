// import {PI, calculateCircomference} from "./math/circle"
// import {calculateRectangle} from "./math/rectangle"
System.register(["./math/circle", "./math/rectangle"], function (exports_1, context_1) {
    "use strict";
    var Circle, rectangle_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Circle_1) {
                Circle = Circle_1;
            },
            function (rectangle_1_1) {
                rectangle_1 = rectangle_1_1;
            }
        ],
        execute: function () {// import {PI, calculateCircomference} from "./math/circle"
            // import {calculateRectangle} from "./math/rectangle"
            console.log(Circle.PI);
            console.log(Circle.calculateCircomference(10));
            console.log(rectangle_1.default(100, 5));
        }
    };
});
