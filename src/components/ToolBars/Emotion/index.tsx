import React from 'react'
import Popover from '@components/Popover'

import styles from './index.less'

class Emotion extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render() {
        const { visible } = this.state
        const { ToolWrapper } = this.props

        const emotionsArr = new Array(129)
            .join('0')
            .split('')
            .map((item, index) => `${10 + index}px`)

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Popover
                content={
                    <ul className={styles['emotion-list']}>
                        {emotionsArr.map((item, index) => (
                            <li
                                key={index}
                                className={styles['emotion-item']}
                                onClick={() => this.handleEmotion(index + 1)}
                            >
                                <span
                                    className={styles['emotion-icon']}
                                    style={{ backgroundPositionY: `-${index * 21.25}px` }}
                                ></span>
                            </li>
                        ))}
                    </ul>
                }
                visible={visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <ToolWrapper>
                    <button onClick={this.showPopover}>
                        <svg viewBox="0 0 1024 1024" width="18" height="18">
                            <path d="M512 0c282.763636 0 512 229.236364 512 512s-229.236364 512-512 512S0 794.763636 0 512 229.236364 0 512 0z m0 93.090909a418.909091 418.909091 0 1 0 0 837.818182 418.909091 418.909091 0 0 0 0-837.818182z m263.354182 512a279.365818 279.365818 0 0 1-526.708364 0zM349.090909 335.127273a69.818182 69.818182 0 1 1 0 139.636363 69.818182 69.818182 0 0 1 0-139.636363z m325.818182 0a69.818182 69.818182 0 1 1 0 139.636363 69.818182 69.818182 0 0 1 0-139.636363z"></path>
                        </svg>
                    </button>
                </ToolWrapper>
            </Popover>
        )
    }

    handleEmotion = (emotionIndex: number) => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index } = quill.getSelection()

        // 清除选中文本样式
        quill.insertEmbed(
            index,
            'emotion',
            `https://sitecdn.itouchtv.cn/sitecdn/assets/images/emotions/${emotionIndex}.png`
        )

        quill.setSelection(index + 1, 0)
    }

    showPopover = () => {
        const timer = setTimeout(() => {
            this.handleVisibleChange(true)
            clearTimeout(timer)
        }, 100)
    }

    handleVisibleChange = (visible: boolean) => {
        this.setState({ visible: visible })
    }
}

export default Emotion
