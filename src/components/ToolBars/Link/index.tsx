import React from 'react'
import InsertLink from '@components/Modal/InsertLink'
import RqlFloatWrap from '@components/Editor/RqlFloatWrap'
import Icon from '@components/Icon'

class Link extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            focusLink: {},
            floatWrapVisible: false,
            floatPos: []
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
        const { focusLink, floatWrapVisible, floatPos } = this.state
        const { ToolWrapper } = this.props

        return (
            <ToolWrapper>
                <InsertLink
                    focusLink={focusLink}
                    onOk={this.handleLink}
                    content={
                        <button>
                            <Icon type="link" />
                        </button>
                    }
                />

                {floatWrapVisible && (
                    <RqlFloatWrap pos={floatPos} handleFloatVisible={this.handleFloatVisible}>
                        <div>
                            <a href={focusLink.link}>{focusLink.link}</a>
                            <div>清除</div>
                            <InsertLink focusLink={focusLink} onOk={this.handleLink} content={<div>修改</div>} />
                        </div>
                    </RqlFloatWrap>
                )}
            </ToolWrapper>
        )
    }

    handleLink = (title: string, link: string) => {
        const { quill } = this.props

        // 编辑器获得焦点
        quill.focus()

        const { index, length } = quill.getSelection()
        const format = quill.getFormat(index, length)

        if (format.link) {
            const [Link] = quill.getLeaf(index)
            Link.parent.format('link', { href: link })
        } else {
            quill.insertEmbed(index, 'link', { href: link, text: title })
            quill.setSelection(index + title.length, 0)
        }
    }

    handleFloatVisible = async (visible: boolean) => {
        await this.setState({
            floatWrapVisible: visible
        })
    }

    editorChangeHandler = async () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.handleFloatVisible(false)

            // 监测range变化, 判断当前焦点是不是在链接上
            if (format.link) {
                const [Link] = quill.getLeaf(index)

                const domNode = Link.parent.domNode
                const { left, top } = domNode.getBoundingClientRect()

                setTimeout(() => {
                    this.setState({
                        focusLink: {
                            linkTitle: domNode.innerText,
                            link: domNode.href
                        },
                        floatPos: [left, top],
                        floatWrapVisible: true
                    })
                }, 100)
            } else {
                this.setState({
                    focusLink: {},
                    floatPos: [],
                    floatWrapVisible: false
                })
            }
        }
    }
}

export default Link
