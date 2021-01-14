const toolListMapping: any = {
    undo: () => import('./Undo'),
    redo: () => import('./Redo'),
    clean: () => import('./Clean'),
    brush: () => import('./FormatBrush'),
    fontsize: () => import('./FontSize'),
    bold: () => import('./FontBold'),
    italic: () => import('./FontItalic'),
    underline: () => import('./FontUnderline'),
    strike: () => import('./FontStrike'),
    color: () => import('./FontColor'),
    background: () => import('./BackgroundColor'),
    align: () => import('./Align'),
    indent: () => import('./Indent'),
    indentbothend: () => import('./IndentBothEnds'),
    frontdistance: () => import('./SegmentFrontDistance'),
    enddistance: () => import('./SegmentEndDistance'),
    lineheight: () => import('./LineHeight'),
    letterspacing: () => import('./LetterSpacing'),
    sequence: () => import('./Sequence'),
    table: () => import('./Table'),
    blockquote: () => import('./Blockquote'),
    line: () => import('./Line'),
    codeblock: () => import('./CodeBlock'),
    header: () => import('./Header'),
    audio: () => import('./Audio'),
    vote: () => import('./Vote'),
    link: () => import('./Link'),
    expression: () => import('./Expression')
}

const comLib: any = {}

async function getToolItem(type: string) {
    if (!comLib[type]) {
        const com = (await (toolListMapping[type] && toolListMapping[type]())) || void 0
        // 确保异步回调后comLib[type]不重复定义
        !comLib[type] &&
            Object.defineProperty(comLib, type, {
                enumerable: true,
                get: function get() {
                    return com.default
                }
            })
        return com.default
    }
    return comLib[type]
}

export default getToolItem
