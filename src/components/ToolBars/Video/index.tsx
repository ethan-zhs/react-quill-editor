import React from 'react'

class Video extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            disabled: true
        }
    }

    componentDidMount() {
        // 监听编辑器历史堆栈变化, 开启/禁用撤回按钮
        this.props.quill.on('text-change', this.textChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('text-change', this.textChangeHandler)
    }

    render() {
        const { ToolWrapper } = this.props

        return (
            <ToolWrapper>
                <button onClick={this.handleUndo}>
                    <svg viewBox="0 0 1024 1024" width="17" height="17">
                        <path d="M85.333333 170.666667v682.666666h853.333334V170.666667H85.333333z m0-85.333334h853.333334a85.333333 85.333333 0 0 1 85.333333 85.333334v682.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H85.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334z M469.333333 580.309333L592.298667 512 469.333333 443.690667v136.618666zM384 371.2a42.666667 42.666667 0 0 1 63.402667-37.333333l253.44 140.8a42.666667 42.666667 0 0 1 0 74.666666l-253.44 140.8A42.666667 42.666667 0 0 1 384 652.8V371.2z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleUndo = () => {
        // 编辑器获得焦点
        this.props.quill.focus()
        this.props.quill.history.undo()
    }

    textChangeHandler = () => {
        const undoStack = this.props.quill.history?.stack?.undo
        const isDisabled = !undoStack || undoStack.length <= 0

        if (isDisabled !== this.state.disabled) {
            this.setState({
                disabled: isDisabled
            })
        }
    }
}

export default Video
