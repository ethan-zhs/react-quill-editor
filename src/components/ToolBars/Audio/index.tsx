import React from 'react'
import Icon from '@components/Icon'
import InsertAudio from '@components/Modal/InsertAudio'

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
                <InsertAudio
                    onOk={this.insertAudio}
                    content={
                        <button>
                            <Icon type="audio" />
                        </button>
                    }
                />
            </ToolWrapper>
        )
    }

    insertAudio = ({ filename, url, duration }: any) => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index } = quill.getSelection()

        quill.insertEmbed(index, 'rql-audio', { filename, url, duration })

        // 移动光标到下一行输入
        quill.setSelection(index + 1, 0)
    }
}

export default Audio
