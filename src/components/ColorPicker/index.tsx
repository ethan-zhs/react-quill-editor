import React from 'react'
import convert from 'color-convert'
import classNames from 'classnames'

import { COLOR_LIST } from './constants'

import styles from './index.less'

class ColorPicker extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            type: 'base',
            hex: '000000',
            h: 10,
            s: 0,
            v: 0
        }
    }

    componentDidMount() {
        const { value } = this.props
        const hexStr = convert.rgb.hex(convert.hex.rgb(value || '000000'))
        const [h, s, v] = convert.hex.hsv(hexStr)

        this.setState({ hex: hexStr, h, s, v })
    }

    render() {
        const { type, h, s, v, hex } = this.state

        const hexValue = `#${convert.hsv.hex([h, s, v])}`

        return (
            <div className={styles['color-picker']}>
                <div className={styles['color-picker-recent']}>
                    <div className={styles['color-picker-recent-title']}>最近使用颜色</div>
                    <div className={styles['color-picker-recent-wrap']}>
                        <div className={styles['color-picker-clear']} onClick={() => this.handleColorChange()}>
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
                            {COLOR_LIST.map((color: string) => (
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
                            <div
                                onClick={this.changeColorOnBoard}
                                className={styles['color-panel-board']}
                                style={{ backgroundColor: `#${convert.hsv.hex([h, 100, 100])}` }}
                            >
                                <div className={styles['color-panel-board-value']}></div>
                                <div className={styles['color-panel-board-saturation']}></div>
                                <span
                                    className={styles['color-panel-pos']}
                                    style={{ left: `${s}%`, top: `${100 - v}%` }}
                                ></span>
                            </div>
                            <div
                                className={styles['color-panel-hue']}
                                onClick={(e: any) => this.changeRibbon(e.clientY)}
                            >
                                <div
                                    className={styles['color-panel-hue-point']}
                                    onMouseDown={this.changeRibbonStart}
                                    style={{ top: `${Math.round((h / 360) * 100)}%` }}
                                ></div>
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles['color-picker-preview']}>
                    <div className={styles['color-box']} style={{ backgroundColor: hexValue }}></div>
                    <div className={styles['color-input']}>
                        <span>#</span>
                        <input
                            type="text"
                            value={hex}
                            onBlur={this.hexInputBlur}
                            onChange={this.handleHexChange}
                            maxLength={6}
                        />
                    </div>
                    <a className={styles['color-picker-btn']} onClick={() => this.handleColorChange(hexValue)}>
                        确认
                    </a>
                </div>
            </div>
        )
    }

    changeColorPickerType = (type: string) => {
        this.setState({ type })
    }

    changeRibbon = (clientY: number) => {
        const { s, v } = this.state
        const sliderElem: any = document.querySelector(`.${styles['color-panel-hue']}`)
        const { top, height } = sliderElem.getBoundingClientRect()
        const pos = clientY - top
        const h = Math.round(((pos > height ? height : pos < 0 ? 0 : pos) / height) * 360)
        const hex = convert.hsv.hex([h, s, v])

        this.setState({ hex, h })
    }

    handleHexChange = (e: any) => {
        this.setState({ hex: e.target.value })
    }

    hexInputBlur = () => {
        const { hex } = this.state

        const hexStr = convert.rgb.hex(convert.hex.rgb(hex))
        const [h, s, v] = convert.hex.hsv(hexStr)

        this.setState({ hex: hexStr, h, s, v })
    }

    changeColorOnBoard = (e: any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const posX = (e.clientX - left) / width
        const posY = (e.clientY - top) / height

        const h = this.state.h
        const s = Math.round((posX > 1 ? 1 : posX < 0 ? 0 : posX) * 100)
        const v = 100 - Math.round((posY > 1 ? 1 : posY < 0 ? 0 : posY) * 100)

        const hex = convert.hsv.hex([h, s, v])

        this.setState({ hex, s, v })
    }

    changeRibbonStart = () => {
        document.addEventListener('mousemove', this.changeRibbonMove)
        document.addEventListener('mouseup', this.changeRibbonEnd)
    }

    changeRibbonMove = (e: any) => {
        this.changeRibbon(e.clientY)
    }

    changeRibbonEnd = () => {
        document.removeEventListener('mousemove', this.changeRibbonMove)
        document.removeEventListener('mouseup', this.changeRibbonEnd)
    }

    handleColorChange = (color?: string) => {
        this.props.onChange(color)
    }
}

export default ColorPicker
