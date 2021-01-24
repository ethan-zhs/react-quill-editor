import React from 'react'

class Header extends React.Component<any, any> {
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
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper active={this.state.isActive}>
                <button onClick={this.handleHeader}>
                    <svg className="rql-svg-icon" viewBox="0 0 1024 1024" width="18" height="18">
                        <path d="M192 128m64 0l32 0q64 0 64 64l0 640q0 64-64 64l-32 0q-64 0-64-64l0-640q0-64 64-64Z M320 448h448v128H320z M736 128h32a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64h-32a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleHeader = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        // 获得当前格式
        const format = quill.getFormat(index, length)

        quill.format('header', format.header ? false : 1)
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                isActive: format.header
            })
        }
    }
}

export default Header
