import React from 'react'
import Modal from '@components/Modal'
import Icon from '@components/Icon'

class Link extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
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
        const { ToolWrapper } = this.props

        // 按钮使用button, 避免编辑器失去焦点
        return (
            <ToolWrapper>
                <Modal
                    content={
                        <button>
                            <Icon type="link" />
                        </button>
                    }
                >
                    <div>adasd</div>
                </Modal>
            </ToolWrapper>
        )
    }

    showModal = () => {
        console.log(1)
    }

    handleLink = (title: string, link: string) => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        const { index, length } = quill.getSelection()
        const format = quill.getFormat(index, length)

        if (format.link) {
            quill.format('link', { href: link })
        } else {
            quill.insertEmbed(index, 'link', { href: link, text: title })
            quill.setSelection(index + title.length, 0)
        }
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            if (format.link) {
                // quill.getLeaf(index)[0].parent.format('link', false)
            }
        }
    }
}

export default Link
