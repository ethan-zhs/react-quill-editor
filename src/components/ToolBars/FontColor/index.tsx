import React from 'react'
import Dropdown from '@components/Dropdown'
import ColorPicker from '@components/ColorPicker'
import styles from './index.less'

class FontColor extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentColor: null
        }
    }

    render() {
        const { currentColor } = this.state

        return (
            <Dropdown
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                ToolWrapper={this.props.ToolWrapper}
                content={<ColorPicker onChange={this.handleColorChange} value={currentColor} />}
            >
                <div className={styles['font-color']}>
                    <svg viewBox="0 0 1024 1024" width="18" height="18" onClick={this.handleFontColor}>
                        <path d="M480 128h64a64 64 0 0 1 59.328 40.128l275.008 683.904a32 32 0 0 1-29.696 43.968H738.56a32 32 0 0 1-29.76-20.096l-59.072-147.776A38.4 38.4 0 0 0 614.016 704H409.6a38.4 38.4 0 0 0-35.456 23.68l-61.376 148.48a32 32 0 0 1-29.568 19.84H175.36a32 32 0 0 1-29.696-43.968L420.672 168.128A64 64 0 0 1 480 128z m-40.96 448h145.92a16 16 0 0 0 14.912-21.632l-57.92-154.496a32 32 0 0 0-59.904 0l-57.92 154.496A16 16 0 0 0 439.04 576z"></path>
                    </svg>

                    <div className={styles['color-val']} style={{ background: currentColor }}></div>
                </div>
            </Dropdown>
        )
    }

    handleColorChange = (color: string) => {
        this.setState(
            {
                currentColor: color
            },
            () => {
                this.handleFontColor()
            }
        )

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)
    }

    handleFontColor = () => {
        const { currentColor } = this.state
        const { quill } = this.props

        quill.focus()

        if (quill.getSelection()) {
            quill.format('color', currentColor ? currentColor : false)
        }
    }
}

export default FontColor
