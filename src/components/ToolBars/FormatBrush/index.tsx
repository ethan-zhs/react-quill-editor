import React from 'react'

class FormatBrush extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <button onClick={this.handleFormatBrush}>
                <svg viewBox="0 0 1024 1024" width="20" height="20">
                    <path
                        d="M260.992 448H768a64 64 0 0 1 64 64v384h-103.232C672 864 640 736 640 704c0 32 0 128-64 192H96c76.096-76.096 109.76-203.008 101.056-380.864A64 64 0 0 1 260.992 448zM640 256h128a64 64 0 0 1 0 128H256a64 64 0 1 1 0-128h128a32 32 0 0 0 32-32V128a64 64 0 0 1 64-64h64a64 64 0 0 1 64 64v96a32 32 0 0 0 32 32z"
                        fill="#343C46"
                    ></path>
                </svg>
            </button>
        )
    }

    handleFormatBrush = () => {
        const { formatDelta } = this.state
        const { quill } = this.props
        let format = null

        if (!formatDelta) {
            format = quill.getFormat()
        } else if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 格式化文本样式
            quill.formatText(index, length, formatDelta)

            // 格式化行样式
            quill.formatLine(index, length, formatDelta)
        }

        this.setState({
            formatDelta: format
        })
    }
}

export default FormatBrush
