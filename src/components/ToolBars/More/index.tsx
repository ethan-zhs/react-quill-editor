import React from 'react'
import Popover from '@components/Popover'
import Icon from '@components/Icon'

import styles from './index.less'

class More extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            visible: false
        }
    }

    render() {
        const { visible } = this.state
        const { ToolWrapper, moreTools = [] } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Popover
                content={
                    <div className={styles['more-tools']}>
                        {moreTools.map((tool: any) => (
                            <div className={styles['more-tools-item']} key={tool.key}>
                                {tool}
                            </div>
                        ))}
                    </div>
                }
                visible={visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <ToolWrapper>
                    <button onClick={this.showPopover}>
                        <Icon type="more" />
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

export default More
