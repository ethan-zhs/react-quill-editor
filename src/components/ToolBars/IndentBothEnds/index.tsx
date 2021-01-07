import React from 'react'
import Dropdown from '@components/Dropdown'

class IndentBothEnds extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown>
                <button onClick={this.handleIndentBothEnds}>
                    <span>
                        <svg viewBox="0 0 1024 1024" width="20" height="20">
                            <path
                                d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M416 352m48 0l96 0q48 0 48 48l0 0q0 48-48 48l-96 0q-48 0-48-48l0 0q0-48 48-48Z M416 576m48 0l96 0q48 0 48 48l0 0q0 48-48 48l-96 0q-48 0-48-48l0 0q0-48 48-48Z M160 640.64c0 34.944 22.144 45.632 49.728 23.552l140.544-112.384c27.52-22.016 27.52-57.536 0-79.616L209.728 359.808c-27.52-22.016-49.728-10.944-49.728 23.616v257.152zM880 640.64c0 34.944-22.144 45.632-49.728 23.552l-140.544-112.384c-27.52-22.016-27.52-57.536 0-79.616l140.544-112.384c27.52-22.016 49.728-10.944 49.728 23.616v257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"
                                fill="#343941"
                            ></path>
                        </svg>
                    </span>
                </button>
            </Dropdown>
        )
    }

    handleIndentBothEnds = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { padding: '0 32px' })
        }
    }
}

export default IndentBothEnds
