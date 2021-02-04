import React from 'react'
import Quill from 'quill'

import { STYLE_LIST } from '../constants/styleList'

const Parchment = Quill.import('parchment')
const Delta = Quill.import('delta')
const Keyboard = Quill.import('modules/keyboard')

export default function moduleImproveHoc(WrapperComponent: any): any {
    return class extends React.Component<any, any> {
        constructor(props: any) {
            super(props)
        }

        componentDidMount() {
            // 注册quill style模块
            this.styleRegister()
        }

        getBindings = () => {
            return {
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
        }

        styleRegister = () => {
            STYLE_LIST.forEach((m: any) => {
                const config = {
                    scope: m.scope ? Parchment.Scope[m.scope] : Parchment.Scope.BLOCK,
                    whitelist: m.whitelist || []
                }

                const moduleStyle = new Parchment.Attributor.Style(m.moduleName, m.styleName, config)
                Quill.register({ [`formats/${m.moduleName}`]: moduleStyle }, true)
            })
        }

        matcherImage = (node: any) => {
            const _delta = new Delta()

            // 在这里执行图片的上传, 地址替换
            _delta.insert({ image: { src: node.src } })
            // delta.forEach((op: any, index: any) => {
            //     setTimeout(() => {
            //         console.log(src)
            //         op.insert.image = { src: src }
            //     }, 100)
            // })
            return _delta
        }

        matcherLink = (node: any, delta: any) => {
            // const _delta = new Delta()
            // _delta.insert({ link: { href: node.href, title: node.innerText } })
            return delta
        }

        matcherRqlVideo = (node: any) => {
            const _delta = new Delta()
            const poster = node.getAttribute('data-poster')
            const url = node.getAttribute('data-url')
            _delta.insert({ 'rql-video': { poster, url } })

            return _delta
        }

        matcherRqlVote = (node: any, delta: any) => {
            console.log(node, delta)
            return new Delta()
        }

        matcherRqlAudio = (node: any) => {
            const _delta = new Delta()
            const filename = node.getAttribute('data-filename')
            const url = node.getAttribute('data-url')
            const duration = node.getAttribute('data-duration')
            _delta.insert({ 'rql-audio': { filename, url, duration } })

            return _delta
        }

        matcherVideo = (node: any) => {
            const _delta = new Delta()
            const poster = node.poster
            const url = node.src
            _delta.insert({ 'rql-video': { poster, url } })

            return _delta
        }

        matcheAudio = (node: any) => {
            const _delta = new Delta()
            const filename = node.alt
            const url = node.src
            const duration = node.duration
            _delta.insert({ 'rql-audio': { filename, url, duration } })

            return _delta
        }

        render() {
            const keyboard = {
                bindings: this.getBindings()
            }

            const clipboard = {
                matchVisual: true,

                // 粘贴或者初始化内容都会触发matcher
                matchers: [
                    ['img', this.matcherImage],
                    ['a', this.matcherLink],
                    ['video', this.matcherVideo],
                    ['rql-video', this.matcherRqlVideo],
                    ['rql-audio', this.matcherRqlAudio]
                ]
            }

            const modules = { keyboard, clipboard }

            return <WrapperComponent {...this.props} modules={modules} />
        }
    }
}
