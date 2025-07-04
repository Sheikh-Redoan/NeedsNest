export type TCard = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    tags?: string[];
    authorId?: string; // Optional, if the card is associated with an author
}