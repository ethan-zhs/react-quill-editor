import React from 'react'

class FontBold extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <button onClick={this.handleBold}>
                <svg viewBox="0 0 1024 1024" width="20" height="20">
                    <path
                        d="M660.992 492.864c34.944 11.072 62.144 30.976 81.408 59.712 21.376 32 32 74.432 32 127.232 0 79.168-22.464 137.984-67.712 176-38.336 31.104-92.16 46.592-161.152 46.592H320A70.4 70.4 0 0 1 249.6 832V192A70.4 70.4 0 0 1 320 121.6h224.64c64.64 0 115.456 18.88 152.064 56.832 34.176 35.712 51.2 83.52 51.2 143.168 0 43.328-8.768 81.024-26.496 113.024a165.888 165.888 0 0 1-60.416 58.24zM365.696 263.232v155.456c0 14.08 11.456 25.6 25.6 25.6h126.016c41.472 0 71.168-8.512 88.96-24.96 16.96-17.28 25.6-44.8 25.6-82.624 0-34.944-8.576-59.776-25.216-74.88-18.112-16-47.232-24.192-87.616-24.192H391.296a25.6 25.6 0 0 0-25.6 25.6z m0 322.688v174.848c0 14.08 11.456 25.6 25.6 25.6H530.56c38.208 0 67.584-7.232 88.192-21.504 26.368-18.048 39.552-46.912 39.552-87.232 0-42.112-9.728-72-28.8-89.92-19.84-18.112-51.84-27.392-96.32-27.392H391.296a25.6 25.6 0 0 0-25.6 25.6z"
                        fill="#343C46"
                    ></path>
                </svg>
            </button>
        )
    }

    handleBold = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否加粗, 对文字进行加粗或取消加粗
            quill.formatText(index, length, { bold: !format.bold })
        }
    }
}

export default FontBold
