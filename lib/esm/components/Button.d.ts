import { ClickEvent, Component, ComponentColor } from "../types";
import React from "react";
export interface ButtonProperties extends Component {
    children: React.ReactNode;
    onClick?: ClickEvent;
    color?: ComponentColor;
}
export default function Button(options: ButtonProperties): JSX.Element;
