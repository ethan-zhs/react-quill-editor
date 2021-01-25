import React from 'react'
import Icon from '@components/Icon'

class Redo extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            disabled: true
        }
    }

    componentDidMount() {
        // 监听编辑器历史堆栈变化, 开启/禁用重做按钮
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
                <button onClick={this.handleRedo}>
                    <Icon type="redo" width={20} height={20} />
                </button>
            </ToolWrapper>
        )
    }

    handleRedo = () => {
        // 编辑器获得焦点
        this.props.quill.focus()
        this.props.quill.history.redo()
    }

    textChangeHandler = () => {
        const redoStack = this.props.quill.history?.stack?.redo
        const isDisabled = !redoStack || redoStack.length <= 0

        if (isDisabled !== this.state.disabled) {
            this.setState({
                disabled: isDisabled
            })
        }
    }
}

export default Redo
