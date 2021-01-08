import React from 'react'

class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <button onClick={this.handleHeader}>
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path
                        d="M192 128m64 0l32 0q64 0 64 64l0 640q0 64-64 64l-32 0q-64 0-64-64l0-640q0-64 64-64Z M320 448h448v128H320z M736 128h32a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64h-32a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64z"
                        fill="#343C46"
                    ></path>
                </svg>
            </button>
        )
    }

    handleHeader = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { header: format.header ? false : 1 })
        }
    }
}

export default Header
