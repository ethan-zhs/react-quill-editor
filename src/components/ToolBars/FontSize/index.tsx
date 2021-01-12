import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class FontSize extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currFontSize: 17,
            inputValue: '17px'
        }
    }

    componentDidMount() {
        this.props.quill.on('selection-change', this.selectionChangehandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.selectionChangehandler)
    }

    render() {
        const { inputValue } = this.state

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
                    <input
                        type="text"
                        onClick={this.setSelectionRange}
                        onChange={this.fontSizeInputChange}
                        onBlur={this.fontSizeInputBlur}
                        onKeyUp={this.handleInputKeyUp}
                        className={styles['font-size-input']}
                        value={inputValue}
                    />
                </div>
            </Dropdown>
        )
    }

    handleFontSize = (fontSize: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 用format可以在selection length为0时生成空白符标签span.ql-cursor,保证样式预设成功
        // formatText则无法避免这个问题
        quill.format('size', `${fontSize}px`)

        this.setState({
            currFontSize: fontSize,
            inputValue: `${fontSize}px`
        })
    }

    fontSizeInputChange = (e: any) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    fontSizeInputBlur = () => {
        const { currFontSize, inputValue } = this.state
        const realValue = Number(inputValue.replace('px', ''))

        let newVal = currFontSize

        if (realValue) {
            const intVal = Math.round(realValue)
            newVal = intVal < 10 ? 10 : intVal > 50 ? 50 : intVal
        }

        this.handleFontSize(newVal)
    }

    setSelectionRange = (e: any) => {
        e.target?.select()
    }

    handleInputKeyUp = (e: any) => {
        const keyCode = window.event ? e.keyCode : e.which
        keyCode === 13 && e.target.blur()
    }

    selectionChangehandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            const size = format.size?.replace('px', '') ?? 17

            this.setState({
                currFontSize: size,
                inputValue: `${size}px`
            })
        }
    }
}

export default FontSize
