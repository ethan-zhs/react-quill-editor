import React from 'react'

class Vote extends React.Component<any, any> {
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
                <button onClick={this.handleClean}>
                    <svg viewBox="0 0 1024 1024" width="18" height="18">
                        <path d="M512 0c282.763636 0 512 229.236364 512 512s-229.236364 512-512 512S0 794.763636 0 512 229.236364 0 512 0z m0 93.090909a418.909091 418.909091 0 1 0 0 837.818182 418.909091 418.909091 0 0 0 0-837.818182z m263.354182 512a279.365818 279.365818 0 0 1-526.708364 0zM349.090909 335.127273a69.818182 69.818182 0 1 1 0 139.636363 69.818182 69.818182 0 0 1 0-139.636363z m325.818182 0a69.818182 69.818182 0 1 1 0 139.636363 69.818182 69.818182 0 0 1 0-139.636363z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleClean = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        // 清除选中文本样式
        quill.removeFormat(index, length)
    }
}

export default Vote
