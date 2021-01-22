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
    const bindings = {
        'clear format with backspace': {
            key: Keyboard.keys.BACKSPACE,
            format: [
                'textIndent',
                'align',
                'marginLeft',
                'marginRight',
                'marginTop',
                'marginBottom',
                'lineHeight',
                'header'
            ],
            collapsed: true,
            empty: true,
            handler: function (range: any, context: any) {
                const formatList = Object.keys(context.format)
                formatList.forEach((key: string) => {
                    this.quill.format(key, false)
                })
            }
        },

        'exit block with backspace': {
            key: Keyboard.keys.BACKSPACE,
            format: ['blockquote', 'code-block'],
            collapsed: true,
            empty: true,
            handler: function (range: any, context: any) {
                const [BlotItem] = this.quill.getLine(range.index)
                if (!BlotItem.prev && !BlotItem.next) {
                    const formatList = Object.keys(context.format)

                    formatList.forEach((key: string) => {
                        this.quill.format(key, false)
                    })
                }

                // 保持事件默认行为可执行, 不被阻塞
                return true
            }
        },

        'create new line with down': {
            key: Keyboard.keys.DOWN,
            format: ['blockquote', 'code-block'],
            handler: function (range: any) {
                const [BlotItem] = this.quill.getLine(range.index)
                if (!BlotItem.next && !BlotItem.parent.next) {
                    this.quill.insertText(this.quill.getLength(), '\n')
                }

                // 保持事件默认行为可执行, 不被阻塞
                return true
            }
        },

        'create new line with up': {
            key: Keyboard.keys.UP,
            format: ['blockquote', 'code-block'],
            handler: function (range: any) {
                const [BlotItem] = this.quill.getLine(range.index)
                if (!BlotItem.prev && !BlotItem.parent.prev) {
                    const BlotContainer = BlotItem.parent
                    const EditorElem = BlotContainer.parent.domNode
                    EditorElem.insertBefore(document.createElement('p'), BlotContainer.domNode)
                }

                // 保持事件默认行为可执行, 不被阻塞
                return true
            }
        }
    }

    return bindings
}
