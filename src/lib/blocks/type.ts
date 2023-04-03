export type BaseBlock<name, data> = {
    id: string;
    type: name;
    data: data
}

export type Header = BaseBlock<'header', {
    level: number;
    text: string;
}>
export type Paragraph = BaseBlock<'paragraph', {
    text: string;
}>
export type Table = BaseBlock<'table', {
    withHeadings: boolean;
    content: string[][];
}>
export type List = BaseBlock<'list', {
    style: 'ordered' | 'unordered';
    items: string[];
}>
export type Warning = BaseBlock<'warning', {
    title: string;
    message: string;
}>
export type Code = BaseBlock<'code', {
    code: string;
}>
export type Raw = BaseBlock<'raw', {
    html: string;
}>
export type Quote = BaseBlock<'quote', {
    text: string;
    caption: string
    alignment: 'left' | 'center'
}>
export type Checklist = BaseBlock<'checklist', {
    items: {
        text: string;
        checked: boolean;
    }[]
}>
export type Delimiter = BaseBlock<'delimiter', {}>
export type Image = BaseBlock<'image', {
    file: {
        url: string;
        mime: string;
        height: number;
        width: number;
        size: number;
        alt: string,
        formats: Record<'thumbnail' | 'small' | 'medium' | 'large', {
            ext: string;
            url: string;
            hash: string;
            mime: string;
            name: string;
            path?: string;
            size: number;
            width: number;
            height: number;
        }>;
    };
    caption: string;
    withBorder: boolean;
    stretched: boolean;
    withBackground: boolean;
}>

export type Block = Header | Paragraph | Table | List | Warning | Code | Raw | Quote | Checklist | Delimiter | Image

export const isHeader = (block: Block): block is Header => block.type === 'header'
export const isParagraph = (block: Block): block is Paragraph => block.type === 'paragraph'
export const isTable = (block: Block): block is Table => block.type === 'table'
export const isList = (block: Block): block is List => block.type === 'list'
export const isWarning = (block: Block): block is Warning => block.type === 'warning'
export const isCode = (block: Block): block is Code => block.type === 'code'
export const isRaw = (block: Block): block is Raw => block.type === 'raw'
export const isQuote = (block: Block): block is Quote => block.type === 'quote'
export const isChecklist = (block: Block): block is Checklist => block.type === 'checklist'
export const isDelimiter = (block: Block): block is Delimiter => block.type === 'delimiter'
export const isImage = (block: Block): block is Image => block.type === 'image'

export type Blocks = {
    time: number;
    blocks: Block[];
    version: string;
}