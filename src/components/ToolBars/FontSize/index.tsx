import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class FontSize extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currFontSize: 17
        }
    }

    render() {
        const { currFontSize } = this.state

        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['font-size-list']}>
                        {[12, 14, 15, 16, 17, 18, 20, 24].map((fontSize: number) => (
                            <div
                                key={fontSize}
                                onClick={() => this.handleFontSize(fontSize)}
                                className={styles['font-size-item']}
                                style={{ fontSize: `${fontSize}px` }}
                            >
                                {fontSize}px
                            </div>
                        ))}
                    </div>
                }
            >
                <div className={styles['font-size']}>
                    <span>{currFontSize}px</span>
                </div>
            </Dropdown>
        )
    }

    handleFontSize = (fontSize: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        if (quill.getSelection()) {
            // 避免失去焦点设置失败
            quill.focus()

            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatText(index, length, { size: `${fontSize}px` })

            this.setState({ currFontSize: fontSize })
        }
    }
}

export default FontSize
