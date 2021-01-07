import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class FontSize extends React.Component<any, any> {
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
                <button onClick={this.handleFontSize} className={styles['font-size']}>
                    <span>17px</span>
                </button>
            </Dropdown>
        )
    }

    handleFontSize = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatText(index, length, { size: '17px' })
        }
    }
}

export default FontSize
