import { ReactNode } from 'react';

declare module 'react' {
  interface ChildrenProps {
    children: ReactNode;
  }
  interface OptionProps {
    value: string;
    label: string;
  }
}
