import React from 'react'
import Dropdown from '@components/Dropdown'

import styles from './index.less'

class WordSpacing extends React.Component<any, any> {
    private defaultLetterSpacing = [0, 0.5, 1, 2]

    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        const { letterSpacingList = this.defaultLetterSpacing } = this.props

        return (
            <Dropdown
                content={
                    <div className={styles['letter-spacing-list']}>
                        {letterSpacingList.map((d: number) => (
                            <div
                                key={d}
                                onClick={() => this.handleFontSize(d)}
                                className={styles['letter-spacing-item']}
                            >
                                {d === 0 ? '默认' : d}
                            </div>
                        ))}
                    </div>
                }
            >
                <svg viewBox="0 0 1024 1024" width="20" height="20">
                    <path
                        d="M505.088 384h13.824a64 64 0 0 1 59.392 40.128l172.032 427.904a32 32 0 0 1-29.696 43.968h-50.432a32 32 0 0 1-29.696-20.096l-33.536-83.776A38.4 38.4 0 0 0 571.328 768H452.352a38.4 38.4 0 0 0-35.52 23.68l-34.88 84.48a32 32 0 0 1-29.568 19.84H303.36a32 32 0 0 1-29.696-43.968l172.032-427.904A64 64 0 0 1 505.088 384z m-33.984 298.688h81.792a16 16 0 0 0 14.976-21.632l-25.92-69.12a32 32 0 0 0-59.904 0l-25.92 69.12a16 16 0 0 0 14.976 21.632z M747.008 299.072h-464v64c0 35.584-22.144 45.568-49.472 22.784L140.416 308.288c-27.392-22.848-27.328-59.648 0-82.432L233.6 148.288c27.392-22.848 49.472-12.544 49.472 22.784v64h464v-64c0-35.328 22.016-45.632 49.408-22.784L889.6 225.856c27.328 22.784 27.392 59.52 0 82.432l-93.12 77.568c-27.328 22.784-49.408 12.8-49.408-22.784v-64z"
                        fill="#343C46"
                    ></path>
                </svg>
            </Dropdown>
        )
    }

    handleFontSize = (letterSpacing: number) => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            quill.formatText(index, length, { letterSpacing: !letterSpacing ? false : `${letterSpacing}px` })
        }
    }
}

export default WordSpacing
