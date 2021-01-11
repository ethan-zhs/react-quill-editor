import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'

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
        this.props.quill.on('selection-change', this.selectionChangehandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.selectionChangehandler)
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
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M416 352m48 0l96 0q48 0 48 48l0 0q0 48-48 48l-96 0q-48 0-48-48l0 0q0-48 48-48Z M416 576m48 0l96 0q48 0 48 48l0 0q0 48-48 48l-96 0q-48 0-48-48l0 0q0-48 48-48Z M160 640.64c0 34.944 22.144 45.632 49.728 23.552l140.544-112.384c27.52-22.016 27.52-57.536 0-79.616L209.728 359.808c-27.52-22.016-49.728-10.944-49.728 23.616v257.152zM880 640.64c0 34.944-22.144 45.632-49.728 23.552l-140.544-112.384c-27.52-22.016-27.52-57.536 0-79.616l140.544-112.384c27.52-22.016 49.728-10.944 49.728 23.616v257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                </svg>
            </Dropdown>
        )
    }

    handleIndentBothEnds = (indentNum: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            const value = indentNum == 0 ? false : `${indentNum}px`
            quill.formatLine(index, length, { marginLeft: value })
            quill.formatLine(index, length, { marginRight: value })

            this.setState({
                currentIndent: indentNum
            })
        }
    }

    selectionChangehandler = () => {
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
