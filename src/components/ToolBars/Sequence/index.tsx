import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class Sequence extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <Dropdown
                content={
                    <div className={styles['indent-both-end-list']}>
                        {[1, 1.5, 1.75, 2, 3, 4, 5].map((d: number) => (
                            <div key={d} onClick={() => this.handleFontSize} className={styles['indent-both-end-item']}>
                                {d}
                            </div>
                        ))}
                    </div>
                }
            >
                <div onClick={this.handleFontSize}>
                    <span>
                        <svg viewBox="0 0 1024 1024" width="18" height="18">
                            <path
                                d="M384 128m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z M192 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M192 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M192 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M384 448m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z M384 768m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z"
                                fill="#343941"
                            ></path>
                        </svg>
                    </span>
                </div>
            </Dropdown>
        )
    }

    handleFontSize = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { list: 'bullet' })
            quill.formatLine(index, length, { listStyleType: 'circle' })
        }
    }
}

export default Sequence
