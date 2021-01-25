import React from 'react'
import Icon from '@components/Icon'

class FontUnderline extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        this.props.quill.on('selection-change', this.editorChangeHandler)
        this.props.quill.on('text-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.editorChangeHandler)
        this.props.quill.off('text-change', this.editorChangeHandler)
    }

    render() {
        const { isActive } = this.state
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper active={isActive}>
                <button onClick={this.handleUnderline}>
                    <Icon type="underline" />
                </button>
            </ToolWrapper>
        )
    }

    handleUnderline = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        const format = quill.getFormat(index, length)

        // 用format可以在selection length为0时生成空白符标签span.ql-cursor,保证样式预设成功
        // formatText则无法避免这个问题
        quill.format('underline', !format.underline)

        this.setState({
            isActive: !format.underline
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                isActive: format.underline
            })
        }
    }
}

export default FontUnderline
