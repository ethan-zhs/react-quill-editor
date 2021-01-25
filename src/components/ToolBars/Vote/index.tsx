import React from 'react'
import Icon from '@components/Icon'

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
                    <Icon type="vote" />
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
