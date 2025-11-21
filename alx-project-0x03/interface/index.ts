export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// interface for Layout
import { ReactNode } from "react";
export interface LayoutProps {
  children: ReactNode;
}

// interface for index.tsx page
export interface PageRouteProps {
  pageRoute: string
}
