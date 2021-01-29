import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

import styles from './index.less'

class WordSpacing extends React.Component<any, any> {
    private defaultLetterSpacing = [0, 0.5, 1, 2]
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentSpacing: 0
        }
    }

    componentDidMount() {
        this.props.quill.on('editor-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('editor-change', this.editorChangeHandler)
    }

    render() {
        const { currentSpacing } = this.state
        const { letterSpacingList = this.defaultLetterSpacing } = this.props

        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['letter-spacing-list']}>
                        {letterSpacingList.map((d: number) => (
                            <div
                                key={d}
                                onClick={() => this.handleLetterSpacing(d)}
                                className={classNames({
                                    [styles['letter-spacing-item']]: true,
                                    [styles['letter-spacing-active']]: currentSpacing == d
                                })}
                            >
                                {d === 0 ? '默认' : d}
                            </div>
                        ))}
                    </div>
                }
            >
                <Icon type="letter-spacing" />
            </Dropdown>
        )
    }

    handleLetterSpacing = (letterSpacing: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 编辑器获得焦点
        quill.focus()

        quill.format('letterSpacing', !letterSpacing ? false : `${letterSpacing}px`)

        this.setState({
            currentSpacing: letterSpacing
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                currentSpacing: format.letterSpacing ? format.letterSpacing.replace('px', '') : 0
            })
        }
    }
}

export default WordSpacing
