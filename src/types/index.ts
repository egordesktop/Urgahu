// Navigation types
export interface NavItem {
  name: string
  href: string
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

// News types
export interface NewsItem {
  title: string
  href: string
  date?: string
  category?: string
}

// Faculty types
export interface Faculty {
  name: string
  href: string
}

export interface Program {
  code: string
  name: string
  faculty?: string
  href?: string
  specializations?: string[] | Array<{ name: string; href: string }>
}

// Contact types
export interface ContactInfo {
  address: string
  phone: string
  email: string
  website: string
}

export interface WorkingHours {
  title: string
  hours: string
}

export interface DepartmentContact {
  name: string
  phone: string
}
