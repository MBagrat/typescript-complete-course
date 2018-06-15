// import {PI, calculateCircomference} from "./math/circle"
// import {calculateRectangle} from "./math/rectangle"

import * as Circle from './math/circle' // If we want use all as one name Circle
import calcRectangle from './math/rectangle' // If we have one method default keyword in rectangle and use like this

console.log(Circle.PI);
console.log(Circle.calculateCircomference(10));
console.log(calcRectangle(100, 5));