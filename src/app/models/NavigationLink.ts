export interface NavigationLink {
  path: string;
  label: string;
  exact?: boolean;
  dropdownItems?: NavigationLink[];
}
