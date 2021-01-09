import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class SegmentEndDistance extends React.Component<any, any> {
    private defaultDistanceList = [5, 10, 15, 20, 25]

    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { segmentEndDistanceList = this.defaultDistanceList } = this.props

        return (
            <Dropdown
                content={
                    <div className={styles['segment-end-distance-list']}>
                        {segmentEndDistanceList.map((d: number) => (
                            <div
                                key={d}
                                onClick={() => this.handleSegmentEndDistance(d)}
                                className={styles['segment-end-distance-item']}
                            >
                                {d}
                            </div>
                        ))}
                    </div>
                }
            >
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path
                        d="M448 896m-48 0l-224 0q-48 0-48-48l0 0q0-48 48-48l224 0q48 0 48 48l0 0q0 48-48 48Z M448 672m-48 0l-224 0q-48 0-48-48l0 0q0-48 48-48l224 0q48 0 48 48l0 0q0 48-48 48Z M896 448m-48 0l-672 0q-48 0-48-48l0 0q0-48 48-48l672 0q48 0 48 48l0 0q0 48-48 48Z M575.36 656c-34.944 0-45.632 22.144-23.552 49.728L664.192 846.272c22.016 27.52 57.536 27.52 79.616 0L856.192 705.728c22.016-27.52 10.944-49.728-23.616-49.728l-257.152 0z M896 224m-48 0l-672 0q-48 0-48-48l0 0q0-48 48-48l672 0q48 0 48 48l0 0q0 48-48 48Z"
                        fill="#343941"
                    ></path>
                </svg>
            </Dropdown>
        )
    }

    handleSegmentEndDistance = (distance: number) => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            quill.formatLine(index, length, { marginBottom: `${distance}px` })
        }
    }
}

export default SegmentEndDistance
