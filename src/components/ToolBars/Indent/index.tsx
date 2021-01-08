import React from 'react'

class Indent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <button onClick={this.handleIndent}>
                <svg viewBox="0 0 1024 1024" width="20" height="20">
                    <path
                        d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M480 352m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M480 576m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M160 640.64c0 34.944 22.144 45.632 49.728 23.552l140.544-112.384c27.52-22.016 27.52-57.536 0-79.616L209.728 359.808c-27.52-22.016-49.728-10.944-49.728 23.616v257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"
                        fill="#343941"
                    ></path>
                </svg>
            </button>
        )
    }

    handleIndent = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否缩进, 设置段落缩进或取消缩进
            quill.formatLine(index, length, { indent: format.indent ? false : '2em' })
        }
    }
}

export default Indent
