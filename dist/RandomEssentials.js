"use strict";
exports.__esModule = true;
exports.randomNetPort = exports.randomAlphanumeric = exports.randomHex = exports.randomBytes = exports.randomInt = void 0;
var tslib_1 = require("tslib");
var net_1 = tslib_1.__importDefault(require("net"));
var crypto_1 = tslib_1.__importDefault(require("crypto"));
var _randomInt = function (max) { return new Promise(function (resolve, reject) { return crypto_1["default"].randomInt(max, function (error, value) { return error ? reject(error) : resolve(value); }); }); };
var randomInt = function (max, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var checker, result, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checker = options.checker;
                    _b.label = 1;
                case 1: return [4 /*yield*/, _randomInt(max)];
                case 2:
                    result = _b.sent();
                    _b.label = 3;
                case 3:
                    _a = (checker != null);
                    if (!_a) return [3 /*break*/, 5];
                    return [4 /*yield*/, checker(result)];
                case 4:
                    _a = (!(_b.sent()));
                    _b.label = 5;
                case 5:
                    if (_a) return [3 /*break*/, 1];
                    _b.label = 6;
                case 6: return [2 /*return*/, result];
            }
        });
    });
};
exports.randomInt = randomInt;
var _randomBytes = function (length) { return new Promise(function (resolve, reject) { return crypto_1["default"].randomBytes(length, function (error, buffer) { return error ? reject(error) : resolve(buffer); }); }); };
var randomBytes = function (length, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var checker, result, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checker = options.checker;
                    _b.label = 1;
                case 1: return [4 /*yield*/, _randomBytes(length)];
                case 2:
                    result = _b.sent();
                    _b.label = 3;
                case 3:
                    _a = (checker != null);
                    if (!_a) return [3 /*break*/, 5];
                    return [4 /*yield*/, checker(result)];
                case 4:
                    _a = (!(_b.sent()));
                    _b.label = 5;
                case 5:
                    if (_a) return [3 /*break*/, 1];
                    _b.label = 6;
                case 6: return [2 /*return*/, result];
            }
        });
    });
};
exports.randomBytes = randomBytes;
var _randomHex = function (length) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d;
    var _e;
    return tslib_1.__generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, _randomBytes(length)];
            case 1:
                _b = (_a = (_e = (_f.sent()).toString('hex')).slice).apply;
                _c = [_e];
                _d = (function (offset) { return [offset, offset + (length)]; });
                return [4 /*yield*/, (0, exports.randomInt)(length)];
            case 2: return [2 /*return*/, _b.apply(_a, _c.concat([_d.apply(void 0, [_f.sent()])]))];
        }
    });
}); };
var randomHex = function (length, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var checker, result, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checker = options.checker;
                    _b.label = 1;
                case 1: return [4 /*yield*/, _randomHex(length)];
                case 2:
                    result = _b.sent();
                    _b.label = 3;
                case 3:
                    _a = (checker != null);
                    if (!_a) return [3 /*break*/, 5];
                    return [4 /*yield*/, checker(result)];
                case 4:
                    _a = (!(_b.sent()));
                    _b.label = 5;
                case 5:
                    if (_a) return [3 /*break*/, 1];
                    _b.label = 6;
                case 6: return [2 /*return*/, result];
            }
        });
    });
};
exports.randomHex = randomHex;
var _randomAlphanumeric = function (length) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var str, _a;
    return tslib_1.__generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                str = '';
                _b.label = 1;
            case 1:
                if (!(str.length < length)) return [3 /*break*/, 3];
                _a = str;
                return [4 /*yield*/, _randomInt(36)];
            case 2:
                str = _a + (_b.sent()).toString(36);
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/, str];
        }
    });
}); };
var randomAlphanumeric = function (length, options) {
    if (options === void 0) { options = {}; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var checker, result, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    checker = options.checker;
                    _b.label = 1;
                case 1: return [4 /*yield*/, _randomAlphanumeric(length)];
                case 2:
                    result = _b.sent();
                    _b.label = 3;
                case 3:
                    _a = (checker != null);
                    if (!_a) return [3 /*break*/, 5];
                    return [4 /*yield*/, checker(result)];
                case 4:
                    _a = (!(_b.sent()));
                    _b.label = 5;
                case 5:
                    if (_a) return [3 /*break*/, 1];
                    _b.label = 6;
                case 6: return [2 /*return*/, result];
            }
        });
    });
};
exports.randomAlphanumeric = randomAlphanumeric;
var randomNetPort = function (min, max) { return (0, exports.randomInt)(max, {
    checker: function (result) { return new Promise(function (resolve) {
        var listener = net_1["default"].createServer();
        listener.on('listening', function () { return listener.close(function (error) { return error ? resolve(false) : resolve(true); }); });
        listener.on('error', function (error) { return resolve(false); });
        listener.listen(result + min);
    }); }
}); };
exports.randomNetPort = randomNetPort;
