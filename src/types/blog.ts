export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  published: boolean;
  createdAt: number;
  updatedAt: number;
}

export interface BlogCategory {
  name: string;
  color: string;
}
