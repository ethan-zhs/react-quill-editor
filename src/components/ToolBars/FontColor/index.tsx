import React from 'react'
import Dropdown from '@components/Dropdown'
import ColorPicker from '@components/ColorPicker'
import Icon from '@components/Icon'

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
                <div className={styles['font-color']} onClick={this.handleFontColor}>
                    <Icon type="font-color" />

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
        quill.format('color', currentColor ? currentColor : false)
    }
}

export default FontColor
