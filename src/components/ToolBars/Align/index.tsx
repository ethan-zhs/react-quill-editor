import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class Align extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown>
                <button onClick={this.handleAlign}>
                    <span>
                        {/* // left
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M640 640H128v85.333333h512v-85.333333z m0-341.333333H128v85.333333h512v-85.333333zM128 554.666667h768v-85.333334H128v85.333334z m0 341.333333h768v-85.333333H128v85.333333zM128 128v85.333333h768V128H128z"></path>
                    </svg> */}

                        {/* // right
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M128 896h768v-85.333333H128v85.333333z m256-170.666667h512v-85.333333H384v85.333333zM128 554.666667h768v-85.333334H128v85.333334z m256-170.666667h512v-85.333333H384v85.333333zM128 128v85.333333h768V128H128z"></path>
                    </svg> */}

                        {/* // center
                    <svg viewBox="0 0 1024 1024" width="20" height="20">
                        <path d="M298.666667 640v85.333333h426.666666v-85.333333H298.666667zM128 896h768v-85.333333H128v85.333333z m0-341.333333h768v-85.333334H128v85.333334z m170.666667-256v85.333333h426.666666v-85.333333H298.666667zM128 128v85.333333h768V128H128z"></path>
                    </svg> */}

                        <svg viewBox="0 0 1024 1024" width="20" height="20">
                            <path
                                d="M128 128m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 352m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 576m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z M128 800m48 0l672 0q48 0 48 48l0 0q0 48-48 48l-672 0q-48 0-48-48l0 0q0-48 48-48Z"
                                fill="#343941"
                            ></path>
                        </svg>
                    </span>
                </button>
            </Dropdown>
        )
    }

    handleAlign = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { align: 'center' })
        }
    }
}

export default Align
