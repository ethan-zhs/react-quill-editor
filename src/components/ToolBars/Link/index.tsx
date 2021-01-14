import React from 'react'

class Link extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper>
                <button onClick={this.handleLink}>
                    <svg viewBox="0 0 1024 1024" width="18" height="18">
                        <path d="M375.424 648.576a60.864 60.864 0 0 1 0-86.144l172.288-172.288a60.864 60.864 0 1 1 86.144 86.144l-172.288 172.288a60.864 60.864 0 0 1-86.144 0z m129.216 43.136a60.864 60.864 0 1 1 86.144 86.144L504.64 864A243.712 243.712 0 0 1 160 519.36L246.144 433.28a60.864 60.864 0 1 1 86.144 86.144L246.144 605.504a121.92 121.92 0 0 0 172.352 172.352l86.144-86.144z m0-516.992a243.712 243.712 0 0 1 344.64 344.64l-86.208 86.144a60.864 60.864 0 1 1-86.144-86.144l86.144-86.144a121.92 121.92 0 0 0-172.288-172.288L504.64 347.072a60.928 60.928 0 1 1-86.144-86.144L504.64 174.72z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleLink = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 清除选中文本样式
        quill.format('link', true)
    }
}

export default Link
