import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'

import ToolBars from '@components/ToolBars'
import moduleImproveHoc from './hoc/moduleImproveHoc'

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

@moduleImproveHoc
class ReactQuillEditor extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            formatDelta: null
        }
    }

    componentDidMount() {
        const { value = '', toolbarId = 'rql-toolbar', toolbars, placeholder = '', modules = {} } = this.props

        const quill = new Quill('#rql-content', {
            modules: {
                toolbar: document.getElementById(toolbarId),
                ...modules
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
}

export default ReactQuillEditor
