"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNever = assertNever;
exports.pick = pick;
exports.isObject = isObject;
/**
 * Utility for enforcing exhaustiveness checks in the type system.
 *
 * @see https://basarat.gitbook.io/typescript/type-system/discriminated-unions#throw-in-exhaustive-checks
 *
 * @param value The variable with no remaining values
 */
function assertNever(value) {
    throw new Error(`Unexpected value should never occur: ${value}`);
}
function pick(base, keys) {
    const entries = keys.map(key => [key, base === null || base === void 0 ? void 0 : base[key]]);
    return Object.fromEntries(entries);
}
function isObject(o) {
    return typeof o === "object" && o !== null;
}
//# sourceMappingURL=utils.js.map