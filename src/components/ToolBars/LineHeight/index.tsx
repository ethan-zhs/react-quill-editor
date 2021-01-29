import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

import styles from './index.less'

class SegmentLineHeight extends React.Component<any, any> {
    private defaultLineHeightList = [1, 1.5, 1.75, 2, 3, 4, 5]
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentLineHeight: 0
        }
    }

    componentDidMount() {
        this.props.quill.on('editor-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('editor-change', this.editorChangeHandler)
    }

    render() {
        const { currentLineHeight } = this.state
        const { lineHightList = this.defaultLineHeightList } = this.props

        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['lineheight-list']}>
                        {lineHightList.map((d: number) => (
                            <div
                                key={d}
                                onClick={() => this.handleLineHeight(d)}
                                className={classNames({
                                    [styles['lineheight-item']]: true,
                                    [styles['lineheight-active']]: currentLineHeight == d
                                })}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                }
            >
                <Icon type="line-height" />
            </Dropdown>
        )
    }

    handleLineHeight = (lineHeight: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        quill.formatLine(index, length, { lineHeight: lineHeight === 1 ? 'normal' : `${lineHeight}em` })

        this.setState({
            currentLineHeight: lineHeight
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                currentLineHeight: !format.lineHeight
                    ? 0
                    : format.lineHeight === 'normal'
                    ? 1
                    : format.lineHeight.replace('em', '')
            })
        }
    }
}

export default SegmentLineHeight
