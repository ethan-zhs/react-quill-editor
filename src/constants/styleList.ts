export const STYLE_LIST = [
    {
        moduleName: 'textIndent',
        styleName: 'text-indent',
        scope: 'BLOCK',
        whitelist: ['2em']
    },
    {
        moduleName: 'lineHeight',
        styleName: 'line-height',
        scope: 'BLOCK',
        whitelist: ['normal', '1.5em', '1.75em', '2em', '3em', '4em', '5em']
    },
    {
        moduleName: 'marginTop',
        styleName: 'margin-top',
        scope: 'BLOCK',
        whitelist: ['5px', '10px', '15px', '20px', '25px']
    },
    {
        moduleName: 'marginBottom',
        styleName: 'margin-bottom',
        scope: 'BLOCK',
        whitelist: ['5px', '10px', '15px', '20px', '25px']
    },
    {
        moduleName: 'marginLeft',
        styleName: 'margin-left',
        scope: 'BLOCK',
        whitelist: ['0px', '8px', '16px', '32px', '48px']
    },
    {
        moduleName: 'marginRight',
        styleName: 'margin-right',
        scope: 'BLOCK',
        whitelist: ['0px', '8px', '16px', '32px', '48px']
    },
    {
        moduleName: 'listStyleType',
        styleName: 'list-style-type',
        scope: 'BLOCK',
        whitelist: ['circle', 'disc', 'square', 'decimal', 'lower-alpha', 'lower-roman', 'upper-alpha', 'upper-roman']
    },
    {
        moduleName: 'letterSpacing',
        styleName: 'letter-spacing',
        scope: 'INLINE',
        whitelist: ['0px', '0.5px', '1px', '2px']
    },
    {
        moduleName: 'size',
        styleName: 'font-size',
        scope: 'INLINE',
        whitelist: new Array(42)
            .join('0')
            .split('')
            .map((item, index) => `${10 + index}px`)
    },
    {
        moduleName: 'align',
        styleName: 'text-align',
        scope: 'BLOCK',
        whitelist: ['left', 'right', 'center', 'justify']
    }
]
