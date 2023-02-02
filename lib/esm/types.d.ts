import React from "react";
export interface Component {
    className?: string;
}
export type ClickEvent = React.MouseEventHandler<HTMLButtonElement> | undefined;
export declare enum ComponentColor {
    /** Discord's "primary" button color */
    Blurple = "#5865f2",
    /** Discord's "secondary" button color */
    Gray = "#474c53",
    /** Discord's "success" button color */
    Green = "#3ba55c",
    /** Discord's "danger" button color */
    Red = "#ed4245"
}
