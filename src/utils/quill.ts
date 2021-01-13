/**
 * 注册quill style模块
 *
 * @param {Object} Quill quill 全局变量
 * @param {Array<Object>} moduleList 模块列表
 */
export function styleRegister(Quill: any, moduleList: any = []) {
    const Parchment = Quill.import('parchment')

    moduleList.forEach((m: any) => {
        const config = {
            scope: m.scope ? Parchment.Scope[m.scope] : Parchment.Scope.BLOCK,
            whitelist: m.whitelist || []
        }

        const moduleStyle = new Parchment.Attributor.Style(m.moduleName, m.styleName, config)
        Quill.register({ [`formats/${m.moduleName}`]: moduleStyle }, true)
    })
}

export function getKeyboardBindings() {
    const formatList = [
        'textIndent',
        'blockquote',
        'align',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'lineHeight'
    ]

    const bindings = {
        exitBlockWithBackspace: {
            key: 'backspace',
            format: formatList,
            collapsed: true,
            empty: true,
            handler: function (range: any, context: any) {
                formatList.forEach((key: string) => {
                    if (context.format[key]) {
                        this.quill.format(key, false)
                    }
                })
            }
        }
    }

    return bindings
}
