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
        const listArr = [
            { name: '○ 大圆圈', value: 'circle', type: 'bullet' },
            { name: '● 小黑点', value: 'disc', type: 'bullet' },
            { name: '■ 小方块 ', value: 'square', type: 'bullet' },
            { name: '1,2,3...', value: 'decimal', type: 'ordered' },
            { name: 'a,b,c...', value: 'lower-alpha', type: 'ordered' },
            { name: 'i,ii,iii...', value: 'lower-roman', type: 'ordered' },
            { name: 'A,B,C...', value: 'upper-alpha', type: 'ordered' },
            { name: 'I,II,III...', value: 'upper-roman', type: 'ordered' }
        ]

        return (
            <Dropdown
                content={
                    <div className={styles['indent-both-end-list']}>
                        {listArr.map((item: any) => (
                            <div
                                key={item.value}
                                onClick={() => this.handleFontSize(item.value, item.type)}
                                className={styles['indent-both-end-item']}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                }
            >
                <svg viewBox="0 0 1024 1024" width="18" height="18">
                    <path
                        d="M384 128m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z M192 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M192 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M192 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z M384 448m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z M384 768m64 0l384 0q64 0 64 64l0 0q0 64-64 64l-384 0q-64 0-64-64l0 0q0-64 64-64Z"
                        fill="#343941"
                    ></path>
                </svg>
            </Dropdown>
        )
    }

    handleFontSize = (listStyleType: string, type: string) => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 判断当前格式是否斜体, 对文字设置斜体或取消斜体
            quill.formatLine(index, length, { list: type })
            quill.formatLine(index, length, { listStyleType: listStyleType })
        }
    }
}

export default Sequence
