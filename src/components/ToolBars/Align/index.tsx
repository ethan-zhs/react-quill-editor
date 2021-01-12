import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class Align extends React.Component<any, any> {
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentAlign: 'justify'
        }
    }

    componentDidMount() {
        this.listenToKeyup()

        this.props.quill.on('selection-change', this.selectionChangehandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.selectionChangehandler)
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
                                {this.getAlignSvg(al.type)}
                                <span className={styles['align-name']}>{al.name}</span>
                            </div>
                        ))}
                    </div>
                }
            >
                <div>{this.getAlignSvg(currentAlign)}</div>
            </Dropdown>
        )
    }

    getAlignSvg = (type: string) => {
        let d = ''

        switch (type) {
            case 'left':
                d =
                    'M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 352m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 800m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z'
                break
            case 'right':
                d =
                    'M128 128m48.00000001 0l671.99999998 0q48 0 48.00000001 48.00000001l0 0q0 48-48 47.99999999l-672 0q-48 0-48-47.99999999l0 0q0-48 48.00000001-48.00000001Z M511.99999993 352m48.00000001 0l288 0q48 0 48 48l0 0q0 48-48 48l-287.99999999 0q-48 0-48.00000001-48l0 0q0-48 48-48Z M128 576m48.00000001 0l671.99999998 0q48 0 48.00000001 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48.00000001-48Z M511.99999994 800m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-287.99999999 0q-48 0-48.00000001-48.00000001l0 0q0-48 48-47.99999999Z'
                break
            case 'center':
                d =
                    'M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M320 352m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M320 800m48 0l288 0q48 0 48 48l0 0q0 48-48 48l-288 0q-48 0-48-48l0 0q0-48 48-48Z'
                break
            case 'justify':
                d =
                    'M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 352m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z'
                break
            default:
                break
        }

        return (
            <svg viewBox="0 0 1024 1024" width="18" height="18">
                <path d={d}></path>
            </svg>
        )
    }

    handleAlign = (type: string) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            quill.formatLine(index, length, { align: type })
        }

        this.setState({
            currentAlign: type
        })
    }

    listenToKeyup = () => {
        document.addEventListener('keydown', (e: any) => {
            const keyCode = window.event ? e.keyCode : e.which

            const { index = 0, length = 0 } = this.props.quill.getSelection() || {}

            if (keyCode === 8 && index === 0) {
                this.handleAlign('justify')
            }
        })
    }

    selectionChangehandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                currentAlign: format.align ? format.align : 'justify'
            })
        }
    }
}

export default Align
