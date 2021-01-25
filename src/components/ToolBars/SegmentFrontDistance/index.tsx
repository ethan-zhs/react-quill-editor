import React from 'react'
import classNames from 'classnames'
import Dropdown from '@components/Dropdown'
import Icon from '@components/Icon'

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
                <Icon type="segment-front-distance" />
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
