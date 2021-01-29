import React from 'react'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

import styles from './index.less'

class Align extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentAlign: 'justify',
            index: 0
        }
    }

    componentDidMount() {
        this.props.quill.on('editor-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('editor-change', this.editorChangeHandler)
    }

    render() {
        const { currentAlign } = this.state

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown
                active={true}
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['align-list']}>
                        {[
                            { type: 'left', name: '左对齐' },
                            { type: 'center', name: '居中对齐' },
                            { type: 'right', name: '右对齐' },
                            { type: 'justify', name: '两端对齐' }
                        ].map((al: any) => (
                            <div
                                key={al.type}
                                className={styles['align-item']}
                                onClick={() => this.handleAlign(al.type)}
                            >
                                <Icon type={`align-${al.type}`} />
                                <span className={styles['align-name']}>{al.name}</span>
                            </div>
                        ))}
                    </div>
                }
            >
                <Icon type={`align-${currentAlign}`} />
            </Dropdown>
        )
    }

    handleAlign = (type?: string) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 编辑器获得焦点
        quill.focus()

        quill.format('align', type)

        this.setState({
            currentAlign: type
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            const currentAlign = typeof format.align === 'string' ? format.align : 'justify'

            this.setState({
                currentAlign
            })
        }
    }
}

export default Align
