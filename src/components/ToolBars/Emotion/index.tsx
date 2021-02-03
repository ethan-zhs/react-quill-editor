import React from 'react'
import Popover from '@components/Popover'
import Icon from '@components/Icon'

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
                        <Icon type="emotion" />
                    </button>
                </ToolWrapper>
            </Popover>
        )
    }

    handleEmotion = (emotionIndex: number) => {
        if (emotionIndex > 117) {
            return
        }

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
