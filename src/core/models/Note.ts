export interface Note {
    title: string;
    content: string;
    createdAt: string;
    noteId: string | number;
    [key: string]: any;
}