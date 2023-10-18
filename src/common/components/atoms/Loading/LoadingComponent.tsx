import { ReactNode } from 'react';

export interface LoadingComponentProps {
  children?: ReactNode;
  loadingComponent?: ReactNode;
  isLoading?: boolean;
}

export default function LoadingComponent({
  children,
  loadingComponent,
  isLoading = false,
}: LoadingComponentProps) {
  return isLoading ? loadingComponent : children;
}
