import React from 'react'
import Dropdown from '@components/Dropdown'
import ColorPicker from '@components/ColorPicker'
import Icon from '@components/Icon'

import styles from './index.less'

class BackgroundColor extends React.Component<any, any> {
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
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={<ColorPicker onChange={this.handleColorChange} value={currentColor} />}
            >
                <div className={styles['background-color']}>
                    <Icon type="background-color" onClick={this.handleBackgroundColor} />

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
                this.handleBackgroundColor()
            }
        )

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)
    }

    handleBackgroundColor = () => {
        const { currentColor } = this.state
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        quill.format('background', currentColor ? currentColor : false)
    }
}

export default BackgroundColor
