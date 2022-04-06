export interface RecordItem {
    title: string;
    type: 'anime' | 'book' | 'tv' | 'movie';
    year: number;
    cover: string;
    score: 1 | 2 | 3 | 4 | 5;
    date: string;
    comment: string;
}