import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class SegmentLineHeight extends React.Component<any, any> {
    private defaultLineHeightList = [1, 1.5, 1.75, 2, 3, 4, 5]

    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { lineHightList = this.defaultLineHeightList } = this.props

        return (
            <Dropdown
                content={
                    <div className={styles['lineheight-list']}>
                        {lineHightList.map((d: number) => (
                            <div key={d} onClick={() => this.handleLineHeight(d)} className={styles['lineheight-item']}>
                                {d}
                            </div>
                        ))}
                    </div>
                }
            >
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path
                        d="M469.333333 170.666667h426.666667v85.333333H469.333333V170.666667zM256 298.666667v170.666666H170.666667V298.666667H42.666667l170.666666-170.666667 170.666667 170.666667H256z m0 426.666666h128l-170.666667 170.666667-170.666666-170.666667h128v-170.666666h85.333333v170.666666z m213.333333 42.666667h426.666667v85.333333H469.333333v-85.333333z m-85.333333-298.666667h512v85.333334H384v-85.333334z"
                        fill="#343941"
                    ></path>
                </svg>
            </Dropdown>
        )
    }

    handleLineHeight = (lineHeight: number) => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            quill.formatLine(index, length, { lineHeight: `${lineHeight}em` })
        }
    }
}

export default SegmentLineHeight
