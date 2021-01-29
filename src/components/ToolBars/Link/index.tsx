import React from 'react'
import InsertLink from '@components/Modal/InsertLink'
import RqlFixedLayer from '@components/ToolBars/Link/RqlFixedLayer'
import Icon from '@components/Icon'

import styles from './index.less'

class Link extends React.Component<any, any> {
    private timer: any
    constructor(props: any) {
        super(props)

        this.state = {
            focusLink: {},
            fixedLayerVisible: false,
            floatPos: []
        }
    }

    componentDidMount() {
        this.props.quill.on('editor-change', this.editorChangeHandler)
    }

    componentWillUnmount() {
        this.props.quill.off('editor-change', this.editorChangeHandler)
    }

    render() {
        const { focusLink, fixedLayerVisible, floatPos } = this.state
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

                <RqlFixedLayer pos={floatPos} handleFloatVisible={this.handleFloatVisible} visible={fixedLayerVisible}>
                    <div className={styles['link-float']}>
                        <a href={focusLink.link} target="_blank" rel="noreferrer" title={focusLink.link}>
                            {focusLink.link}
                        </a>
                        <div className={styles['link-float-btn']} onClick={this.removeFormat}>
                            清除
                        </div>
                        <div className={styles['link-float-btn']} onClick={() => this.handleFloatVisible(false)}>
                            <InsertLink focusLink={focusLink} onOk={this.formatLink} content={<span>修改</span>} />
                        </div>
                    </div>
                </RqlFixedLayer>
            </ToolWrapper>
        )
    }

    getLinkInfo = (quill: any) => {
        const { index, length } = quill.getSelection()
        const [Link, offset] = quill.getLeaf(index)
        const format = quill.getFormat(index, length)

        return {
            index,
            length,
            Link,
            format,
            linkLength: Link.length(),
            linkOffset: offset
        }
    }

    removeFormat = () => {
        const { quill } = this.props
        quill.focus()

        const { Link, index, length } = this.getLinkInfo(quill)

        Link.parent.format('link', false)
        quill.setSelection(index, length)
    }

    formatLink = (title: string, link: string) => {
        const { quill } = this.props
        quill.focus()

        const { Link, index, length, format, linkOffset, linkLength } = this.getLinkInfo(quill)

        let selectionIndex = 0

        if (format.link && (linkOffset > 0 || length > 0) && linkOffset !== linkLength) {
            Link.parent.format('link', { href: link })
            selectionIndex = index - linkOffset + linkLength
        } else if (length) {
            quill.format('link', { href: link })
            selectionIndex = index + length
        } else {
            quill.insertEmbed(index, 'link', { href: link, text: title })
            selectionIndex = index + title.length
        }

        quill.setSelection(selectionIndex, 0)
    }

    handleFloatVisible = (visible: boolean) => {
        this.setState({
            fixedLayerVisible: visible
        })
    }

    editorChangeHandler = () => {
        const { quill } = this.props

        this.timer = setTimeout(() => {
            if (quill.getSelection()) {
                const { Link, index, length, format, linkOffset, linkLength } = this.getLinkInfo(quill)

                let focusLink: any = {}
                let floatPos: any = []
                let fixedLayerVisible = false

                // 监测selection变化, 判断当前焦点是不是在链接上
                if (format.link) {
                    const domNode = Link.parent.domNode
                    const { left, top } = domNode.getBoundingClientRect()

                    if ((linkOffset > 0 || length > 0) && linkOffset !== linkLength) {
                        focusLink = {
                            linkTitle: domNode.innerText,
                            link: domNode.href
                        }

                        floatPos = [left, top]
                        fixedLayerVisible = true
                    }
                } else if (length) {
                    // 当selection
                    focusLink.linkTitle = quill.getText(index, length)
                }

                this.setState({
                    focusLink,
                    floatPos,
                    fixedLayerVisible
                })
            }
            clearTimeout(this.timer)
        }, 100)
    }
}

export default Link
