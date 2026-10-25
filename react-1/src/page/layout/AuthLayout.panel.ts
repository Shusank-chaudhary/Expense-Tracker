import type { ReactNode } from "react";

export interface ISidePanel {
    title: string;
    children: ReactNode;
}

export interface IAuthLayoutOutlet {
    sidePanel: ISidePanel;
    setSidePanel: React.Dispatch<React.SetStateAction<ISidePanel>>;
}