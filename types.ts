
export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

export interface Service {
  title: string;
  items: string[];
  icon: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
}
