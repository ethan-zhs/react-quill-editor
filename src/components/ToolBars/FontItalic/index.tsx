import React from 'react'

class FontItalic extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            isActive: false
        }
    }

    componentDidMount() {
        this.props.quill.on('selection-change', this.selectionChangehandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.selectionChangehandler)
    }

    render() {
        const { isActive } = this.state
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper active={isActive}>
                <button onClick={this.handleItalic}>
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M640 853.333333H298.666667v-85.333333h124.885333l90.282667-512H384V170.666667h341.333333v85.333333h-124.885333l-90.282667 512H640z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleItalic = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            const format = quill.getFormat(index, length)

            // 用format可以在selection length为0时生成空白符标签span.ql-cursor,保证样式预设成功
            // formatText则无法避免这个问题
            quill.format('italic', !format.italic)

            this.setState({
                isActive: !format.italic
            })
        }
    }

    selectionChangehandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                isActive: format.italic
            })
        }
    }
}

export default FontItalic
