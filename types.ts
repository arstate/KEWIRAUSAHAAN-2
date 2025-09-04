
export type SlidePoint = {
    heading: string;
    text: string;
};

export type Mission = {
    heading: string;
    points: string[];
}

export type SlideContent = {
    type: 'title' | 'list' | 'vision' | 'roadmap' | 'grid' | 'career' | 'end' | 'image_text_split';
    title: string;
    subtitle?: string;
    points?: SlidePoint[] | string[];
    vision?: string;
    mission?: Mission;
    imageUrl?: string;
};