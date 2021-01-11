import React from 'react'

class FontItalic extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper>
                <button onClick={this.handleItalic}>
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M640 853.333333H298.666667v-85.333333h124.885333l90.282667-512H384V170.666667h341.333333v85.333333h-124.885333l-90.282667 512H640z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleItalic = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatText(index, length, { italic: !format.italic })
        }
    }
}

export default FontItalic
