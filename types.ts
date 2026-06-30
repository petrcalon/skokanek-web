export interface Course {
  id: string;
  title: string;
  ageGroup: string;
  gender: string;
  description: string;
  color: string;
  icon: string;
  capacity: number;
  price: number;
  schedule: string;
  location: string;
  benefits: string[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialization: string[];
  bullets?: string[];
  quote?: string;
  youtubeLink?: {
    label: string;
    url: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface FormData {
  courseId: string;
  childName: string;
  childBirthDate: string;
  parentName: string;
  email: string;
  phone: string;
  note: string;
  gdpr: boolean;
}

export interface Registration {
  id: string;
  courseId: string;
  childName: string;
  childBirthDate: string;
  parentName: string;
  email: string;
  phone: string;
  note: string;
  registeredAt: string;
  status: 'pending' | 'approved' | 'cancelled';
  price: number;
}
