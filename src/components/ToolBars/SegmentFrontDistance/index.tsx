import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class SegmentFrontDistance extends React.Component<any, any> {
    private defaultDistanceList = [5, 10, 15, 20, 25]
    private dropdown: any

    constructor(props: any) {
        super(props)

        this.state = {
            currentDistance: 0
        }
    }

    componentDidMount() {
        this.props.quill.on('selection-change', this.editorChangeHandler)
        this.props.quill.on('text-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('selection-change', this.editorChangeHandler)
        this.props.quill.off('text-change', this.editorChangeHandler)
    }

    render() {
        const { currentDistance } = this.state
        const { segmentFrontDistanceList = this.defaultDistanceList } = this.props

        return (
            <Dropdown
                ToolWrapper={this.props.ToolWrapper}
                onRef={(dropdown: any) => (this.dropdown = dropdown)}
                content={
                    <div className={styles['segment-front-distance-list']}>
                        {segmentFrontDistanceList.map((d: number) => (
                            <div
                                key={d}
                                onClick={() => this.handleSegmentFrontDistance(d)}
                                className={classNames({
                                    [styles['segment-front-distance-item']]: true,
                                    [styles['segment-front-distance-active']]: currentDistance == d
                                })}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                }
            >
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path d="M576 128m48 0l224 0q48 0 48 48l0 0q0 48-48 48l-224 0q-48 0-48-48l0 0q0-48 48-48Z M576 352m48 0l224 0q48 0 48 48l0 0q0 48-48 48l-224 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M448.64 368c34.944 0 45.632-22.144 23.552-49.728L359.808 177.728c-22.016-27.52-57.536-27.52-79.616 0L167.808 318.272c-22.016 27.52-10.944 49.728 23.616 49.728h257.152z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"></path>
                </svg>
            </Dropdown>
        )
    }

    handleSegmentFrontDistance = (distance: number) => {
        const { quill } = this.props

        // 调用Dropdown组件方法
        this.dropdown.handleVisibleChange(false)

        // 编辑器获得焦点
        quill.focus()

        // 获得选中文本范围
        const { index, length } = quill.getSelection()

        quill.formatLine(index, length, { marginTop: `${distance}px` })

        this.setState({
            currentDistance: distance
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.setState({
                currentDistance: format.marginTop ? format.marginTop.replace('px', '') : 0
            })
        }
    }
}

export default SegmentFrontDistance
