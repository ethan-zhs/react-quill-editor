import React from 'react'
import Icon from '@components/Icon'

class FormatBrush extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { formatDelta } = this.state
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper active={formatDelta}>
                <button onClick={this.handleFormatBrush}>
                    <Icon type="format-brush" width={20} height={20} />
                </button>
            </ToolWrapper>
        )
    }

    handleFormatBrush = () => {
        const { formatDelta } = this.state
        const { quill } = this.props
        let format = null

        // 编辑器获得焦点
        quill.focus()

        if (!formatDelta) {
            format = quill.getFormat()
        } else {
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
