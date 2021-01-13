import React from 'react'

class Undo extends React.Component<any, any> {
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
        const { disabled } = this.state
        const { ToolWrapper } = this.props

        return (
            <ToolWrapper disabled={disabled}>
                <button onClick={this.handleUndo}>
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M289.6384 256H614.4a307.2 307.2 0 1 1 0 614.4H204.8a51.2 51.2 0 0 1 0-102.4h409.6a204.8 204.8 0 1 0 0-409.6H286.0032l59.2384 59.2384A51.2 51.2 0 1 1 272.7936 489.984L128 345.2416a51.2 51.2 0 0 1 0-72.448L272.7936 128a51.2 51.2 0 0 1 72.448 72.3968L289.6384 256z"></path>
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

export default Undo
