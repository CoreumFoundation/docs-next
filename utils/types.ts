export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
  external?: boolean;
}

export interface Directory {
  hasChildRoutes: boolean;
  children: Map<string, Directory>;
}