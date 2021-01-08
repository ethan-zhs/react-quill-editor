import React from 'react'
import Dropdown from '@components/Dropdown'
import ColorPicker from '@components/ColorPicker'
import styles from './index.less'

class FontColor extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown content={<ColorPicker onChange={this.handleColorChange} />}>
                <div onClick={this.handleFontColor} className={styles['font-size']}>
                    <span>
                        <svg viewBox="0 0 1024 1024" width="18" height="18">
                            <path
                                d="M480 128h64a64 64 0 0 1 59.328 40.128l275.008 683.904a32 32 0 0 1-29.696 43.968H738.56a32 32 0 0 1-29.76-20.096l-59.072-147.776A38.4 38.4 0 0 0 614.016 704H409.6a38.4 38.4 0 0 0-35.456 23.68l-61.376 148.48a32 32 0 0 1-29.568 19.84H175.36a32 32 0 0 1-29.696-43.968L420.672 168.128A64 64 0 0 1 480 128z m-40.96 448h145.92a16 16 0 0 0 14.912-21.632l-57.92-154.496a32 32 0 0 0-59.904 0l-57.92 154.496A16 16 0 0 0 439.04 576z"
                                fill="#343C46"
                            ></path>
                        </svg>
                    </span>
                </div>
            </Dropdown>
        )
    }

    handleColorChange = (color: string) => {
        console.log(color)
    }

    handleFontColor = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatText(index, length, { color: '#ffcc33' })
        }
    }
}

export default FontColor
