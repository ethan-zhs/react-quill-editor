import React from 'react'
import Icon from '@components/Icon'
import InsertImages from '@components/Modal/InsertImage'

class Image extends React.Component<any, any> {
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
                <InsertImages
                    onOk={this.insertImage}
                    content={
                        <button>
                            <Icon type="image" width={20} height={20} />
                        </button>
                    }
                />
            </ToolWrapper>
        )
    }

    insertImage = ({ url }: any) => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index } = quill.getSelection()

        quill.insertEmbed(index, 'image', { src: url })
        // quill.format('align', 'center')
    }
}

export default Image
