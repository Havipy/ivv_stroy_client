export interface Project {
    id: number;
    title: string;
    imageUrl: string;
    description: string;
}

export interface Testimonial {
    id: number;
    name: string;
    content: string;
    rating: number;
}

export interface ContactFormData {
    name: string;
    phone: string;
    comment: string;
}
