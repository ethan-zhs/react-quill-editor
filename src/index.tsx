import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'

import ToolBars from '@components/ToolBars'
import { styleRegister, getKeyboardBindings } from '@utils/quill'

import { STYLE_LIST } from './constants/styleList'

import './formats/hr'
import './formats/emotion'
import './formats/image'
import './formats/link'
import './formats/video.tsx'
import './formats/audio.tsx'
import './formats/vote'
import './formats/blockquote'
import './formats/code-block'

import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'

import styles from './index.less'

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
        const { toolbarId = 'rql-toolbar' } = this.props

        styleRegister(STYLE_LIST)

        const bindings = getKeyboardBindings()

        const quill = new Quill('#rql-content', {
            modules: {
                toolbar: document.getElementById(toolbarId),
                keyboard: { bindings: bindings }
            },
            theme: 'snow',
            placeholder: 'Compose an epic...'
        })

        const ToolBarContainer = this.renderToolBarContainer

        ReactDOM.render(<ToolBarContainer quill={quill} />, document.getElementById(toolbarId))
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
                <ToolBars quill={props.quill} />
            </div>
        )
    }
}

export default ReactQuillEditor
