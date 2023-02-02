import React, { CSSProperties, useState } from "react";

export interface ButtonProperties {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

export function MergeStyles(style: CSSProperties, hover: CSSProperties | false, click: CSSProperties | false) {
    if (hover == false && click == false) return style;
    if (hover != false && click != false) return Object.assign(style, click);
    return Object.assign(style, hover);
}

export function useHover() {
    const [state, setState] = useState(false);
    return {
        state,
        setState,
        properties: {
            onMouseEnter: () => setState(true),
            onMouseLeave: () => setState(false)
        }
    }
}

export function useClick() {
    const [state, setState] = useState(false);
    return {
        state,
        setState,
        properties: {
            onClick: () => {
                setState(true);
                setTimeout(() => setState(false), 5000)
            }
        }
    }
}

export default function Button(options: ButtonProperties) {
    const { properties: hoverProps, state: hoverState } = useHover();
    const { properties: clickProps, state: clickState } = useClick();
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
                {options.children}
            </button>
        </>
    )
}