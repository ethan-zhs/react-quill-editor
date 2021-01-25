import React from 'react'
import Icon from '@components/Icon'

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
                    <Icon type="undo" width={20} height={20} />
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
