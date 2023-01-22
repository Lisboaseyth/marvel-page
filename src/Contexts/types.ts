export interface iChildren {
    children: React.ReactNode;
}

export interface iUrl {
    type: string;
    url: string;
}

export interface iComics {
    id: number;
    title: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    pageCount: number;
    urls: {
        type: string;
        url: string;
    };
}
