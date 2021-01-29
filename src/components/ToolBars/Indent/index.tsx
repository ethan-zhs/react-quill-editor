import React from 'react'
import Icon from '@components/Icon'

class Indent extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        this.props.quill.on('editor-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('editor-change', this.editorChangeHandler)
    }

    render() {
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper active={this.state.isActive}>
                <button onClick={this.handleIndent}>
                    <Icon type="indent" />
                </button>
            </ToolWrapper>
        )
    }

    handleIndent = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        // 获得当前格式
        const format = quill.getFormat(index, length)

        quill.format('textIndent', format.textIndent ? false : '2em')
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                isActive: format.textIndent
            })
        }
    }
}

export default Indent
