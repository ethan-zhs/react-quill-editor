import Quill from 'quill'

const Parchment = Quill.import('parchment')
const Keyboard = Quill.import('modules/keyboard')

/**
 * 注册quill style模块
 *
 * @param {Array<Object>} moduleList 模块列表
 */
export function styleRegister(moduleList: any = []) {
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
        'align',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'lineHeight',
        'header'
    ]

    const bindings = {
        exitBlockWithBackspace: {
            key: Keyboard.keys.BACKSPACE,
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
        },

        // exitBlockWithEnter: {
        //     key: Keyboard.keys.ENTER,
        //     format: ['blockquote'],
        //     collapsed: true,
        //     empty: true,
        //     handler: function (range: any, context: any) {
        //         formatList.forEach((key: string) => {
        //             if (context.format[key]) {
        //                 this.quill.format(key, false)
        //             }
        //         })
        //     }
        // },

        exitBlockWithEnter2: {
            key: Keyboard.keys.BACKSPACE,
            format: ['blockquote1', 'code-block'],
            collapsed: true,
            empty: true,
            handler: function (range: any, context: any) {
                const [Leaf] = this.quill.getLeaf(range.index)
                const BlotItem = Leaf.parent
                console.log(BlotItem)
                if (!BlotItem.prev && !BlotItem.next) {
                    ;['blockquote1', 'code-block'].forEach((key: string) => {
                        if (context.format[key]) {
                            this.quill.format(key, false)
                        }
                    })
                } else {
                    BlotItem.remove()
                }
            }
        }

        // exitBlockWithEnter3: {
        //     key: Keyboard.keys.DOWN,
        //     format: ['blockquote1', 'code-block'],
        //     collapsed: true,
        //     empty: true,
        //     handler: function (range: any, context: any) {
        //         const [Leaf] = this.quill.getLeaf(range.index)
        //         const BlotItem = Leaf.parent
        //         console.log(BlotItem)
        //         if (!BlotItem.prev && !BlotItem.next) {
        //             ;['blockquote1', 'code-block'].forEach((key: string) => {
        //                 if (context.format[key]) {
        //                     this.quill.format(key, false)
        //                 }
        //             })
        //         } else {
        //             BlotItem.remove()
        //         }
        //     }
        // }
    }

    return bindings
}
