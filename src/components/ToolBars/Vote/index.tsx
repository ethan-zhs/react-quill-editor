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
                        <path d="M224 256A96 96 0 0 1 320 352v320a96 96 0 0 1-192 0v-320A96 96 0 0 1 224 256z M128 832m32 0l704 0q32 0 32 32l0 0q0 32-32 32l-704 0q-32 0-32-32l0 0q0-32 32-32Z M512 384a96 96 0 0 1 96 96v192a96 96 0 0 1-192 0v-192A96 96 0 0 1 512 384zM800 128A96 96 0 0 1 896 224v448a96 96 0 0 1-192 0v-448A96 96 0 0 1 800 128z"></path>
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
