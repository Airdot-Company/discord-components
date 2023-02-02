import { CSSProperties } from "react";
import { ClickEvent } from "./types";
export declare function CreateOptions<defaults = any, given = any>(defaults: defaults, given: given): given & defaults;
export declare function MergeStyles(style: CSSProperties, hover: CSSProperties | false, click: CSSProperties | false): CSSProperties;
export declare function useHover(): {
    state: boolean;
    setState: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    properties: {
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };
};
export declare function useClick(clickHandle?: ClickEvent): {
    state: boolean;
    setState: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    properties: {
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
};
