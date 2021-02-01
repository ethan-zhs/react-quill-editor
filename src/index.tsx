import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'

import ToolBars from '@components/ToolBars'
import { styleRegister } from '@utils/quill'
import bindings from './bindings'
import matcherHoc from './hoc/matcher'

import { STYLE_LIST } from './constants/styleList'

import './formats/hr'
import './formats/emotion'
import './formats/link'
import './formats/image'
import './formats/video.tsx'
import './formats/audio.tsx'
import './formats/vote.tsx'
import './formats/blockquote'
import './formats/code-block'

import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'

import styles from './index.less'

@matcherHoc
class ReactQuillEditor extends React.Component<any, any> {
    quill: any
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null,
            quill: null
        }
    }

    componentDidMount() {
        const { value = '', toolbarId = 'rql-toolbar', toolbars, placeholder = '' } = this.props

        styleRegister(STYLE_LIST)

        const quill = new Quill('#rql-content', {
            modules: {
                toolbar: document.getElementById(toolbarId),
                keyboard: { bindings: bindings },
                clipboard: {
                    matchVisual: true,
                    matchers: [
                        ['img', this.matcherImage],
                        ['a', this.matcherLink]
                    ]
                }
            },
            theme: 'snow',
            placeholder
        })

        // 渲染toolbars
        const ToolBarContainer = this.renderToolBarContainer
        ReactDOM.render(<ToolBarContainer quill={quill} toolbars={toolbars} />, document.getElementById(toolbarId))

        // 初始化编辑器内容
        const delta = quill.clipboard.convert(value)
        quill.setContents(delta, 'silent')
    }

    render() {
        const { toolbarId } = this.props
        return (
            <div className={styles['rql-editor']}>
                {!toolbarId && <div id="rql-toolbar"></div>}
                <div id="rql-content" className={styles['editor-content']}></div>
            </div>
        )
    }

    renderToolBarContainer(props: any) {
        return (
            <div className={styles['toolbar']}>
                <ToolBars {...props} />
            </div>
        )
    }

    matcherImage = (node: any, delta: any) => {
        delta.forEach((op: any, index: any) => {
            op.insert.image = { src: node.src }
        })
        return delta
    }

    matcherLink = (node: any, delta: any) => {
        const Delta = Quill.import('delta')
        delta.forEach((op: any, index: any) => {
            console.log(node)
            // if (op && op.attributes && op.attributes.link) {
            //     delete op.attributes.link
            // }
        })
        return delta
    }

    matcherVideo = (node: any, delta: any) => {
        const Delta = Quill.import('delta')

        return delta
    }
}

export default ReactQuillEditor
