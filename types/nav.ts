import { AppPathnames } from '@/src/navigation';

export interface NavItem {
  title: string;
  href?: AppPathnames;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
}

export interface MainNavProps {
  items?: NavItem[];
}
