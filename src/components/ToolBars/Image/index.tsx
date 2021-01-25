import React from 'react'
import Icon from '@components/Icon'

class Image extends React.Component<any, any> {
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
                    <Icon type="image" width={20} height={20} />
                </button>
            </ToolWrapper>
        )
    }

    handleUndo = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index } = quill.getSelection()

        // 清除选中文本样式
        quill.insertEmbed(index, 'rql-image', `https://sitecdn.itouchtv.cn/sitecdn/assets/images/emotions/1.png`)
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

export default Image
