import React from 'react'

class Audio extends React.Component<any, any> {
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
                        <path d="M338.112 642.88l0.64-415.04c0-29.504 23.744-53.632 51.584-53.632l454.464-52.48h3.072c28.8-2.048 54.528 22.208 54.528 51.84v505.536c0 38.656-14.976 73.536-42.496 99.008-25.792 25.536-62.656 40.32-99.84 40.32a141.76 141.76 0 0 1-142.336-141.056c0-77.632 63.488-141.12 142.336-141.12 27.52 0 53.12 6.912 74.816 20.288V348.672l-428.608 47.552v365.248A142.912 142.912 0 0 1 263.936 902.4 141.76 141.76 0 0 1 121.6 761.28c0-77.952 62.08-136.704 142.336-136.704 28.736 0 52.352 5.568 74.176 18.304z"></path>
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

export default Audio
