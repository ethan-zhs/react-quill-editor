import React from 'react'

class Clean extends React.Component<any, any> {
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
                <button onClick={this.handleClean}>
                    <svg viewBox="0 0 1084 1024" width="18" height="18">
                        <path d="M719.329882 422.249412l-255.578353 255.578353 234.315295 234.315294 255.518117-255.638588-234.315294-234.255059zM59.151059 315.813647l298.164706-298.164706a60.235294 60.235294 0 0 1 85.172706 0l596.329411 596.329412a60.235294 60.235294 0 0 1 0 85.172706l-298.164706 298.164706a60.235294 60.235294 0 0 1-85.232941 0l-596.329411-596.329412a60.235294 60.235294 0 0 1 0-85.172706z"></path>
                    </svg>
                </button>
            </ToolWrapper>
        )
    }

    handleClean = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        // 清除选中文本样式
        quill.removeFormat(index, length)
    }
}

export default Clean
