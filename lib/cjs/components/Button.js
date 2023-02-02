"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = require("../types");
var react_1 = __importDefault(require("react"));
var utils_1 = require("../utils");
function Button(options) {
    var Options = (0, utils_1.CreateOptions)({
        color: types_1.ComponentColor.Blurple,
        children: null
    }, options);
    var _a = (0, utils_1.useHover)(), hoverProps = _a.properties, hoverState = _a.state;
    var _b = (0, utils_1.useClick)(options.onClick), clickProps = _b.properties, clickState = _b.state;
    var Style = {
        backgroundColor: options.color,
        padding: "0.5rem 1rem",
        borderRadius: "0.23rem",
        border: "none",
        outline: "none",
        font: "inherit",
        cursor: "pointer",
    };
    var HoverStyle = {
        backgroundColor: "#4752c4"
    };
    var ClickStyle = {
        backgroundColor: "#3c45a5"
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", __assign({ className: options.className, style: (0, utils_1.MergeStyles)(Style, hoverState && HoverStyle, clickState && ClickStyle) }, hoverProps, clickProps), Options.children)));
}
exports.default = Button;
