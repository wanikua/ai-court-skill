"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogLevel = void 0;
exports.makeConsoleLogger = makeConsoleLogger;
exports.logLevelSeverity = logLevelSeverity;
const utils_1 = require("./utils");
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "debug";
    LogLevel["INFO"] = "info";
    LogLevel["WARN"] = "warn";
    LogLevel["ERROR"] = "error";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
function makeConsoleLogger(name) {
    return (level, message, extraInfo) => {
        console[level](`${name} ${level}:`, message, extraInfo);
    };
}
/**
 * Transforms a log level into a comparable (numerical) value ordered by severity.
 */
function logLevelSeverity(level) {
    switch (level) {
        case LogLevel.DEBUG:
            return 20;
        case LogLevel.INFO:
            return 40;
        case LogLevel.WARN:
            return 60;
        case LogLevel.ERROR:
            return 80;
        default:
            return (0, utils_1.assertNever)(level);
    }
}
//# sourceMappingURL=logging.js.map