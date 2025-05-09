"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = isPalindrome;
function isPalindrome(x) {
    const str = x.toString();
    const len = str.length;
    const correction = len % 2;
    for (let i = 0; i < len; i++) {
        if (i === len - i - correction) {
            return true;
        }
        else if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return false;
}
