export type BaseBlock<name, data> = {
    id: string;
    type: name;
    data: data
}

type Header = BaseBlock<'header', {
    level: number;
    text: string;
}>
type Paragraph = BaseBlock<'paragraph', {
    text: string;
}>
type Table = BaseBlock<'table', {
    withHeadings: boolean;
    content: string[][];
}>
type List = BaseBlock<'list', {
    style: 'ordered' | 'unordered';
    items: string[];
}>
type Warning = BaseBlock<'warning', {
    title: string;
    message: string;
}>
type Code = BaseBlock<'code', {
    code: string;
}>
type Raw = BaseBlock<'raw', {
    html: string;
}>
type Quote = BaseBlock<'quote', {
    text: string;
    caption: string
    alignment: 'left' | 'center'
}>
type Checklist = BaseBlock<'checklist', {
    items: {
        text: string;
        checked: boolean;
    }[]
}>
type Delimiter = BaseBlock<'delimiter', {}>

export type Block = Header | Paragraph | Table | List | Warning | Code | Raw | Quote | Checklist | Delimiter

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

export type Blocks = {
    time: number;
    blocks: Block[];
    version: string;
}