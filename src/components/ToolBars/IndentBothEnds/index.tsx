import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

import styles from './index.less'

class IndentBothEnds extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentIndent: 0
        }
    }

    componentDidMount() {
        this.props.quill.on('selection-change', this.editorChangeHandler)
        this.props.quill.on('text-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.editorChangeHandler)
        this.props.quill.off('text-change', this.editorChangeHandler)
    }

    render() {
        const { currentIndent } = this.state

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['indent-both-end-list']}>
                        {[0, 8, 16, 32, 48].map((d: number) => (
                            <div
                                key={d}
                                onClick={() => this.handleIndentBothEnds(d)}
                                className={classNames({
                                    [styles['indent-both-end-item']]: true,
                                    [styles['indent-both-end-active']]: currentIndent == d
                                })}
                            >
                                {d == 0 ? '取消' : d}
                            </div>
                        ))}
                    </div>
                }
            >
                <Icon type="indent-both-ends" />
            </Dropdown>
        )
    }

    handleIndentBothEnds = (indentNum: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        const value = indentNum == 0 ? false : `${indentNum}px`
        quill.formatLine(index, length, { marginLeft: value })
        quill.formatLine(index, length, { marginRight: value })

        this.setState({
            currentIndent: indentNum
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                currentIndent: format.marginLeft ? format.marginLeft.replace('px', '') : 0
            })
        }
    }
}

export default IndentBothEnds
