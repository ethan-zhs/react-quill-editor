import React from 'react'
import InsertLink from '@components/Modal/InsertLink'
import RqlFloatWrap from '@src/components/ToolBars/Link/RqlFloatWrap'
import Icon from '@components/Icon'

import styles from './index.less'

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
                    onOk={this.formatLink}
                    content={
                        <button>
                            <Icon type="link" />
                        </button>
                    }
                />

                {floatWrapVisible && (
                    <RqlFloatWrap pos={floatPos} handleFloatVisible={this.handleFloatVisible}>
                        <div className={styles['link-float']}>
                            <a href={focusLink.link} target="_blank" rel="noreferrer" title={focusLink.link}>
                                {focusLink.link}
                            </a>
                            <div className={styles['link-float-btn']} onClick={this.removeFormat}>
                                清除
                            </div>
                            <div
                                onClick={() => {
                                    setTimeout(() => {
                                        this.setState({ floatWrapVisible: false })
                                    }, 100)
                                }}
                            >
                                <InsertLink
                                    focusLink={focusLink}
                                    onOk={this.formatLink}
                                    content={<div className={styles['link-float-btn']}>修改</div>}
                                />
                            </div>
                        </div>
                    </RqlFloatWrap>
                )}
            </ToolWrapper>
        )
    }

    removeFormat = () => {
        const { quill } = this.props

        quill.focus()

        const { index } = quill.getSelection()

        const [Link] = quill.getLeaf(index)
        Link.parent.format('link', false)
    }

    formatLink = (title: string, link: string) => {
        const { quill } = this.props

        quill.focus()

        const { index, length } = quill.getSelection()
        const format = quill.getFormat(index, length)
        const [Link, offset] = quill.getLeaf(index)

        if (format.link && (offset > 0 || length > 0) && offset !== Link.length()) {
            Link.parent.format('link', { href: link })
        } else if (length) {
            quill.format('link', { href: link })
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

    editorChangeHandler = () => {
        const { quill } = this.props

        if (quill.getSelection()) {
            const { index, length } = quill.getSelection()
            const format = quill.getFormat(index, length)

            this.handleFloatVisible(false)

            let focusLink: any = {}
            let floatPos: any = []
            let floatWrapVisible = false

            // 监测range变化, 判断当前焦点是不是在链接上
            if (format.link) {
                const [Link, offset] = quill.getLeaf(index)

                console.log(offset, Link.length())

                const domNode = Link.parent.domNode
                const { left, top } = domNode.getBoundingClientRect()

                if ((offset > 0 || length > 0) && offset !== Link.length()) {
                    focusLink = {
                        linkTitle: domNode.innerText,
                        link: domNode.href
                    }

                    floatPos = [left, top]
                    floatWrapVisible = true
                }
            } else if (length) {
                focusLink.linkTitle = quill.getText(index, length)
            }

            const timer = setTimeout(() => {
                this.setState({
                    focusLink,
                    floatPos,
                    floatWrapVisible
                })
                clearTimeout(timer)
            }, 100)
        }
    }
}

export default Link
