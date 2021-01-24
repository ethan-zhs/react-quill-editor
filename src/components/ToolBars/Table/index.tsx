import React from 'react'
import Popover from '@components/Popover'

import styles from './index.less'

class Table extends React.Component<any, any> {
    private dropdown: any
    constructor(props: any) {
        super(props)

        this.state = {
            visible: false,
            col: 0,
            row: 0
        }
    }

    render() {
        const { visible, col, row } = this.state
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Popover
                content={
                    <div className={styles['table-select']}>
                        <div className={styles['table-select-header']}>
                            {row}行 x {col}列
                        </div>
                        <div
                            className={styles['table-select-panel']}
                            onMouseMove={this.handleMousemove}
                            onMouseLeave={() => this.updateColandRow(0, 0)}
                            onClick={this.handleTable}
                        >
                            <div
                                className={styles['table-selected-panel']}
                                style={{ width: `${col * 22}px`, height: `${row * 22}px` }}
                            ></div>
                        </div>
                    </div>
                }
                visible={visible}
                onVisibleChange={this.handleVisibleChange}
            >
                <ToolWrapper>
                    <button onClick={this.showPopover}>
                        <svg viewBox="0 0 1024 1024" width="18" height="18">
                            <path d="M57.6 132.48v785.92h908.8V132.48z m844.16 64v203.52H121.6V196.48zM397.44 627.2V464h220.16V627.2z m220.8 64v163.2H397.44V691.2zM121.6 464h211.2V627.2H121.6z m560 0h220.8V627.2h-220.8zM121.6 691.2h211.2v163.2H121.6z m560 163.2V691.2h220.8v163.2z"></path>
                        </svg>
                    </button>
                </ToolWrapper>
            </Popover>
        )
    }

    handleTable = () => {
        const { col, row } = this.state

        const { quill } = this.props

        this.handleVisibleChange(false)
        console.log('col:', col, ' row:', row)

        // 编辑器获得焦点
        quill.focus()

        quill.format('table', true)
        this.updateColandRow(0, 0)
    }

    showPopover = () => {
        const timer = setTimeout(() => {
            this.handleVisibleChange(true)
            clearTimeout(timer)
        }, 100)
    }

    handleVisibleChange = (visible: boolean) => {
        this.setState({ visible: visible })
    }

    handleMousemove = (e: any) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const posX = e.pageX - left
        const posY = e.pageY - top

        const col = Math.ceil((posX / width) * 10)
        const row = Math.ceil((posY / height) * 10)

        this.updateColandRow(col, row)
    }

    updateColandRow = (col: number, row: number) => {
        this.setState({
            col,
            row
        })
    }
}

export default Table
