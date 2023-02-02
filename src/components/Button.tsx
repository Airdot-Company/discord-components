import { ClickEvent, Component, ComponentColor } from "../types";
import React, { CSSProperties } from "react";
import { CreateOptions, MergeStyles, useClick, useHover } from "../utils";

export interface ButtonProperties extends Component {
    children: React.ReactNode;
    onClick?: ClickEvent;
    color?: ComponentColor;
}

export default function Button(options: ButtonProperties) {
    const Options: ButtonProperties = CreateOptions<ButtonProperties, ButtonProperties>({
        color: ComponentColor.Blurple,
        children: null
    }, options);
    const { properties: hoverProps, state: hoverState } = useHover();
    const { properties: clickProps, state: clickState } = useClick(options.onClick);
    const Style: CSSProperties = {
        backgroundColor: options.color,
        padding: "0.5rem 1rem",
        borderRadius: "0.23rem",
        border: "none",
        outline: "none",
        font: "inherit",
        cursor: "pointer",
    }
    const HoverStyle: CSSProperties = {
        backgroundColor: "#4752c4"
    }
    const ClickStyle: CSSProperties = {
        backgroundColor: "#3c45a5"
    }

    return (
        <>
            <button className={options.className} style={MergeStyles(Style, hoverState && HoverStyle, clickState && ClickStyle)} {...hoverProps} {...clickProps}>
                {Options.children}
            </button>
        </>
    )
}