import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'

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
        this.props.quill.on('selection-change', this.selectionChangehandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.selectionChangehandler)
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
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path d="M469.333333 170.666667h426.666667v85.333333H469.333333V170.666667zM256 298.666667v170.666666H170.666667V298.666667H42.666667l170.666666-170.666667 170.666667 170.666667H256z m0 426.666666h128l-170.666667 170.666667-170.666666-170.666667h128v-170.666666h85.333333v170.666666z m213.333333 42.666667h426.666667v85.333333H469.333333v-85.333333z m-85.333333-298.666667h512v85.333334H384v-85.333334z"></path>
                </svg>
            </Dropdown>
        )
    }

    handleLineHeight = (lineHeight: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            quill.formatLine(index, length, { lineHeight: lineHeight === 1 ? 'normal' : `${lineHeight}em` })

            this.setState({
                currentLineHeight: lineHeight
            })
        }
    }

    selectionChangehandler = () => {
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
