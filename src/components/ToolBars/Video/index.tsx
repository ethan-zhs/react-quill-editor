import React from 'react'
import Icon from '@components/Icon'

class Video extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            disabled: true
        }
    }

    render() {
        const { ToolWrapper } = this.props

        return (
            <ToolWrapper>
                <button onClick={this.handleUndo}>
                    <Icon type="video" />
                </button>
            </ToolWrapper>
        )
    }

    handleUndo = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        quill.insertEmbed(index, 'rql-video', {})

        // 移动光标到下一行输入
        quill.setSelection(index + 1, 0)
    }
}

export default Video
