import React from 'react'

class FontUnderline extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    render() {
        // 按钮使用button, 避免编辑器失去焦点
        return (
            <button onClick={this.handleUnderline}>
                <svg viewBox="0 0 1024 1024" width="17" height="17">
                    <path
                        d="M868.571429 845.714286H155.428571c-5.028571 0-9.142857 3.885714-9.142857 8.685714v69.485714c0 4.8 4.114286 8.685714 9.142857 8.685715h713.142858c5.028571 0 9.142857-3.885714 9.142857-8.685715v-69.485714c0-4.8-4.114286-8.685714-9.142857-8.685714z m-356.571429-86.857143c79.314286 0 153.828571-30.971429 210.057143-87.085714C778.285714 615.657143 809.142857 541.028571 809.142857 461.714286V105.142857c0-7.542857-6.171429-13.714286-13.714286-13.714286h-68.571428c-7.542857 0-13.714286 6.171429-13.714286 13.714286v356.571429c0 110.857143-90.285714 201.142857-201.142857 201.142857s-201.142857-90.285714-201.142857-201.142857V105.142857c0-7.542857-6.171429-13.714286-13.714286-13.714286h-68.571428c-7.542857 0-13.714286 6.171429-13.714286 13.714286v356.571429c0 79.314286 30.971429 153.828571 87.085714 210.057143C358.057143 728 432.685714 758.857143 512 758.857143z"
                        fill="#343941"
                    ></path>
                </svg>
            </button>
        )
    }

    handleUnderline = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            // 获得选中文本范围
            const { index, length } = quill.getSelection()

            // 获得当前格式
            const format = quill.getFormat(index, length)

            // 判断当前格式是否有下划线, 对文字设置下划线或取消下划线
            quill.formatText(index, length, { underline: !format.underline })
        }
    }
}

export default FontUnderline
