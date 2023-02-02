import { CSSProperties, useState } from "react";
import { ClickEvent } from "./types";

export function CreateOptions<defaults = any, given = any>(defaults: defaults, given: given): given & defaults {
    return {
        ...defaults,
        ...given
    }
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

export function useClick(clickHandle?: ClickEvent) {
    const [state, setState] = useState(false);
    return {
        state,
        setState,
        properties: {
            onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                if (clickHandle != null && typeof clickHandle == "function") clickHandle(e);
                setState(true);
                setTimeout(() => setState(false), 5000)
            }
        }
    }
}