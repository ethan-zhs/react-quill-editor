import React from 'react'
import Dropdown from '@components/Dropdown'

class Table extends React.Component<any, any> {
    private dropdown: any
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div>
                        <div>111</div>
                    </div>
                }
            >
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path d="M57.6 132.48v785.92h908.8V132.48z m844.16 64v203.52H121.6V196.48zM397.44 627.2V464h220.16V627.2z m220.8 64v163.2H397.44V691.2zM121.6 464h211.2V627.2H121.6z m560 0h220.8V627.2h-220.8zM121.6 691.2h211.2v163.2H121.6z m560 163.2V691.2h220.8v163.2z"></path>
                </svg>
            </Dropdown>
        )
    }

    handleTable = () => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        quill.format('table', true)
    }
}

export default Table
