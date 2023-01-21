export interface iChildren {
    children: React.ReactNode;
}

export interface iComics {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    }
}

export interface iData {
    comics: iComics[];
}