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
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClick = exports.useHover = exports.MergeStyles = exports.CreateOptions = void 0;
var react_1 = require("react");
function CreateOptions(defaults, given) {
    return __assign(__assign({}, defaults), given);
}
exports.CreateOptions = CreateOptions;
function MergeStyles(style, hover, click) {
    if (hover == false && click == false)
        return style;
    if (hover != false && click != false)
        return Object.assign(style, click);
    return Object.assign(style, hover);
}
exports.MergeStyles = MergeStyles;
function useHover() {
    var _a = (0, react_1.useState)(false), state = _a[0], setState = _a[1];
    return {
        state: state,
        setState: setState,
        properties: {
            onMouseEnter: function () { return setState(true); },
            onMouseLeave: function () { return setState(false); }
        }
    };
}
exports.useHover = useHover;
function useClick(clickHandle) {
    var _a = (0, react_1.useState)(false), state = _a[0], setState = _a[1];
    return {
        state: state,
        setState: setState,
        properties: {
            onClick: function (e) {
                if (clickHandle != null && typeof clickHandle == "function")
                    clickHandle(e);
                setState(true);
                setTimeout(function () { return setState(false); }, 5000);
            }
        }
    };
}
exports.useClick = useClick;
