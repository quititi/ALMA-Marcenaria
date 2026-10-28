export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: 'cozinhas' | 'dormitorios' | 'closets' | 'banheiros' | 'salas' | 'escritorios' | 'corporativo';
  image: string;
  description: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: string; // Will match lucide-react icons dynamically
}

export interface SegmentInfo {
  id: string;
  type: 'residencial' | 'corporativo';
  title: string;
  subtitle: string;
  description: string;
  items: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  stars: number;
}
