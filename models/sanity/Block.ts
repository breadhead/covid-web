export interface Block {
    _key: string;
    _type: string;
    children: {
        _key: string;
        _type: string;
        text: string;
    }[];
    style: string;
}
