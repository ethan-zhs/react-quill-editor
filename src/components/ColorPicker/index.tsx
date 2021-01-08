import React from 'react'
import convert from 'color-convert'
import classNames from 'classnames'
import styles from './index.less'

class ColorPicker extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            type: 'base',
            hex: '000000',
            h: 180,
            s: 0,
            v: 0
        }
    }

    render() {
        const { type } = this.state

        const colorList = [
            '#ffffff',
            '#ffd7d5',
            '#ffdaa9',
            '#fffed5',
            '#d4fa00',
            '#73fcd6',
            '#a5c8ff',
            '#ffacd5',
            '#ff7faa',
            '#d6d6d6',
            '#ffacaa',
            '#ffb995',
            '#fffb00',
            '#73fa79',
            '#00fcff',
            '#78acfe',
            '#d84fa9',
            '#ff4f79',
            '#b2b2b2',
            '#d7aba9',
            '#ff6827',
            '#ffda51',
            '#00d100',
            '#00d5ff',
            '#0080ff',
            '#ac39ff',
            '#ff2941',
            '#888888',
            '#7a4442',
            '#ff4c00',
            '#ffa900',
            '#3da742',
            '#3daad6',
            '#0052ff',
            '#7a4fd6',
            '#d92142',
            '#000000',
            '#7b0c00',
            '#ff4c41',
            '#d6a841',
            '#407600',
            '#007aaa',
            '#021eaa',
            '#797baa',
            '#ab1942'
        ]

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <div className={styles['color-picker']}>
                <div className={styles['color-picker-recent']}>
                    <div className={styles['color-picker-recent-title']}>最近使用颜色</div>
                    <div className={styles['color-picker-recent-wrap']}>
                        <div className={styles['color-picker-clear']} onClick={this.handleColorClear}>
                            <svg viewBox="0 50 1024 1024" width="20" height="20">
                                <path
                                    d="M85.333333 955.733333a17.0496 17.0496 0 0 1-12.066133-29.1328l853.333333-853.333333a17.0496 17.0496 0 1 1 24.132267 24.132267l-853.333333 853.333333A17.015467 17.015467 0 0 1 85.333333 955.733333z"
                                    fill="#555"
                                ></path>
                            </svg>
                        </div>

                        {['#d6d6d6', '#ffacaa', '#ffb995', '#fffb00'].map((color: string) => (
                            <span
                                onClick={() => this.handleColorChange(color)}
                                className={styles['color-box']}
                                key={color}
                                style={{ backgroundColor: color }}
                            ></span>
                        ))}
                    </div>
                </div>

                <div className={styles['color-picker-wrap']}>
                    <div className={styles['color-picker-type']}>
                        <div
                            className={classNames({
                                [styles['color-picker-type-item']]: true,
                                [styles['active']]: type === 'base'
                            })}
                            onClick={() => this.changeColorPickerType('base')}
                        >
                            基本色
                        </div>
                        <div
                            className={classNames({
                                [styles['color-picker-type-item']]: true,
                                [styles['active']]: type === 'board'
                            })}
                            onClick={() => this.changeColorPickerType('board')}
                        >
                            更多颜色
                        </div>
                    </div>

                    {type === 'base' ? (
                        <div className={styles['color-base']}>
                            {colorList.map((color: string) => (
                                <span
                                    onClick={() => this.handleColorChange(color)}
                                    className={styles['color-box']}
                                    key={color}
                                    style={{ backgroundColor: color }}
                                ></span>
                            ))}
                        </div>
                    ) : (
                        <div className={styles['color-panel']}>
                            <div className={styles['color-panel-board']} style={{ backgroundColor: `red` }}>
                                <div className={styles['color-panel-board-value']}></div>
                                <div className={styles['color-panel-board-saturation']}></div>
                            </div>
                            <div className={styles['color-panel-Hue']}></div>
                        </div>
                    )}
                </div>

                <div className={styles['color-picker-preview']}>
                    <div className={styles['color-box']}></div>
                    <div className={styles['color-input']}>
                        <span>#</span>
                        <input type="text" />
                    </div>
                    <a className={styles['color-picker-btn']}>确认</a>
                </div>
            </div>
        )
    }

    changeColorPickerType = (type: string) => {
        this.setState({
            type
        })
    }

    changeRibbon = (clientX: number) => {
        const { s, v } = this.state
        const sliderElem: any = document.querySelector(`.${styles['color-panel-Hue']}`)
        const { left, width } = sliderElem.getBoundingClientRect()
        const pos = clientX - left
        const h = Math.round(((pos > width ? width : pos < 0 ? 0 : pos) / width) * 360)
        const hex = convert.hsv.hex([h, s, v])

        this.setState({ hex, h })
    }

    handleColorChange = (color: string) => {
        this.props.onChange(color)
    }

    handleColorClear = () => {
        console.log('clear')
    }
}

export default ColorPicker
