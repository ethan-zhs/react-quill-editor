import React from 'react'
import Dropdown from '@components/Dropdown'

class SegmentEndDistance extends React.Component<any, any> {
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
                <button onClick={this.handleSegmentEndDistance}>
                    <span>
                        <svg viewBox="0 0 1024 1024" width="20" height="20">
                            <path
                                d="M448 896m-48 0l-224 0q-48 0-48-48l0 0q0-48 48-48l224 0q48 0 48 48l0 0q0 48-48 48Z M448 672m-48 0l-224 0q-48 0-48-48l0 0q0-48 48-48l224 0q48 0 48 48l0 0q0 48-48 48Z M896 448m-48 0l-672 0q-48 0-48-48l0 0q0-48 48-48l672 0q48 0 48 48l0 0q0 48-48 48Z M575.36 656c-34.944 0-45.632 22.144-23.552 49.728L664.192 846.272c22.016 27.52 57.536 27.52 79.616 0L856.192 705.728c22.016-27.52 10.944-49.728-23.616-49.728l-257.152 0z M896 224m-48 0l-672 0q-48 0-48-48l0 0q0-48 48-48l672 0q48 0 48 48l0 0q0 48-48 48Z"
                                fill="#343941"
                            ></path>
                        </svg>
                    </span>
                </button>
            </Dropdown>
        )
    }

    handleSegmentEndDistance = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { marginBottom: '20px' })
        }
    }
}

export default SegmentEndDistance
