import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'

import ToolBars from '@components/ToolBars'

export default function editorInitHoc(WrapperComponent: any): any {
    return class extends React.Component<any, any> {
        private quill: any

        constructor(props: any) {
            super(props)

            this.state = {
                isFocus: false
            }
        }

        componentDidMount() {
            const {
                value = '',
                toolbarId = 'rql-toolbar',
                toolbars,
                placeholder = '',
                getEditor,
                modules = {}
            } = this.props

            // 初始化Quill编辑器
            this.quill = new Quill('#rql-content', {
                modules: {
                    toolbar: document.getElementById(toolbarId),
                    ...modules
                },
                theme: 'snow',
                placeholder
            })

            // 渲染toolbars
            const ToolBarContainer = this.renderToolBarContainer
            ReactDOM.render(
                <ToolBarContainer quill={this.quill} toolbars={toolbars} />,
                document.getElementById(toolbarId)
            )

            // 初始化编辑器内容
            value && this.setContents(value)

            // 初始化编辑器对象, 返回到外部
            getEditor && getEditor(this.getEditor())

            // 监听编辑器事件
            this.handleEvents()
        }

        render() {
            return <WrapperComponent {...this.props} isFocus={this.state.isFocus} />
        }

        renderToolBarContainer = (props: any) => {
            return <ToolBars {...props} />
        }

        // 获得编辑器对象
        getEditor = () => {
            return {
                setContents: this.setContents,
                getContents: this.getContents,
                blur: this.quill.blur,
                focus: this.quill.focus,
                rql: this.quill
            }
        }

        // 设置编辑器内容
        setContents = (value: string) => {
            const delta = this.quill.clipboard.convert(value)
            this.quill.setContents(delta, 'silent')
        }

        // 获得编辑器内容
        getContents = () => {
            return this.quill.root.innerHTML
        }

        handleEvents = () => {
            const { onBlur, onFocus, onChange } = this.props

            // 监听编辑器失去焦点
            this.quill.root.addEventListener('blur', () => {
                this.setState({ isFocus: false })
                onBlur && onBlur()
            })

            // 监听编辑器获得焦点
            this.quill.root.addEventListener('focus', () => {
                this.setState({ isFocus: true })
                onFocus && onFocus
            })

            this.quill.on('text-change', () => {
                onChange && onChange()
            })
        }
    }
}
