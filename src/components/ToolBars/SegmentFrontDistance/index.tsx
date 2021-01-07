import React from 'react'
import Dropdown from '@components/Dropdown'

class SegmentFrontDistance extends React.Component<any, any> {
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
                <button onClick={this.handleSegmentFrontDistance}>
                    <span>
                        <svg viewBox="0 0 1024 1024" width="20" height="20">
                            <path
                                d="M576 128m48 0l224 0q48 0 48 48l0 0q0 48-48 48l-224 0q-48 0-48-48l0 0q0-48 48-48Z M576 352m48 0l224 0q48 0 48 48l0 0q0 48-48 48l-224 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M448.64 368c34.944 0 45.632-22.144 23.552-49.728L359.808 177.728c-22.016-27.52-57.536-27.52-79.616 0L167.808 318.272c-22.016 27.52-10.944 49.728 23.616 49.728h257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"
                                fill="#343941"
                            ></path>
                        </svg>
                    </span>
                </button>
            </Dropdown>
        )
    }

    handleSegmentFrontDistance = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { marginTop: '20px' })
        }
    }
}

export default SegmentFrontDistance
