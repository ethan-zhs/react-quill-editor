import React from 'react'

class Blockquote extends React.Component<any, any> {
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
                <button onClick={this.handleBlockquote}>
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M849.6 231v109.5c-46.4 14.9-84.6 41.5-114.4 81.3-29.9 36.5-44.8 76.3-43.1 116.1 8.3-5 21.6-6.6 41.5-6.6 34.8 0 64.7 11.6 91.2 36.5 23.2 24.9 36.5 56.4 36.5 94.5S848 732 821.5 756.8C795 780 761.8 793.3 722 793.3c-46.4 0-82.9-19.9-112.8-56.4s-43.1-84.6-43.1-141c0-89.6 24.9-165.8 76.3-230.5C692 299 761.7 254.2 849.6 231z m-403 0v109.5c-46.4 14.9-82.9 41.5-112.8 81.3-31.5 36.5-46.4 76.3-44.8 116.1 8.3-5 21.6-6.6 41.5-6.6 34.8 0 64.7 11.6 89.6 36.5 24.9 24.9 38.1 56.4 38.1 94.5s-13.3 69.7-38.1 94.5c-26.5 23.2-61.4 36.5-101.2 36.5-46.4 0-82.9-19.9-111.1-56.4-29.9-36.5-44.8-84.6-44.8-141 0-89.6 24.9-165.8 76.3-230.5C289 299 358.7 254.2 446.6 231z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleBlockquote = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        // 获得当前格式
        const format = quill.getFormat(index, length)

        quill.format('blockquote', !format.blockquote)
    }
}

export default Blockquote
