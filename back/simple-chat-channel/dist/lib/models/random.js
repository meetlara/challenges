"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomIn = exports.random = void 0;
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.random = random;
function randomIn(array) {
    return array[random(0, array.length - 1)];
}
exports.randomIn = randomIn;
