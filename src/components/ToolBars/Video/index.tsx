import React from 'react'
import Icon from '@components/Icon'
import InsertVideo from '@components/Modal/InsertVideo'

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
                <InsertVideo
                    onOk={this.insertVideo}
                    content={
                        <button>
                            <Icon type="video" />
                        </button>
                    }
                />
            </ToolWrapper>
        )
    }

    insertVideo = ({ poster, url }: any) => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index } = quill.getSelection()

        quill.insertEmbed(index, 'rql-video', { poster, url })

        // 移动光标到下一行输入
        quill.setSelection(index + 1, 0)
    }
}

export default Video
