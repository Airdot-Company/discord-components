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
import { ComponentColor } from "../types";
import React from "react";
import { CreateOptions, MergeStyles, useClick, useHover } from "../utils";
export default function Button(options) {
    var Options = CreateOptions({
        color: ComponentColor.Blurple,
        children: null
    }, options);
    var _a = useHover(), hoverProps = _a.properties, hoverState = _a.state;
    var _b = useClick(options.onClick), clickProps = _b.properties, clickState = _b.state;
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
    return (React.createElement(React.Fragment, null,
        React.createElement("button", __assign({ className: options.className, style: MergeStyles(Style, hoverState && HoverStyle, clickState && ClickStyle) }, hoverProps, clickProps), Options.children)));
}
