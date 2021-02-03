import React from 'react'
import ReactDOM from 'react-dom'
import Quill from 'quill'
import classNames from 'classnames'

import ToolBars from '@components/ToolBars'
import moduleImproveHoc from './hoc/moduleImproveHoc'
import editorInitHoc from './hoc/editorInitHoc'

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
@editorInitHoc
class ReactQuillEditor extends React.Component<any, any> {
    constructor(props: any) {
        super(props)

        this.state = {
            isFocus: false
        }
    }

    componentDidMount() {
        // ad
    }

    render() {
        const { toolbarId, isFocus } = this.props

        return (
            <div
                className={classNames({
                    [styles['rql-editor']]: true,
                    [styles['rql-editor-active']]: isFocus
                })}
            >
                {!toolbarId && <div id="rql-toolbar"></div>}

                <div id="rql-content" className={styles['rql-content']}></div>
            </div>
        )
    }
}

export default ReactQuillEditor
