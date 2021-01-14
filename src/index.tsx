import React from 'react'
import Quill from 'quill'

import ToolBars from '@components/ToolBars'
import { styleRegister, getKeyboardBindings } from '@utils/quill'

import { STYLE_LIST } from './constants/styleList'

import './formats/Hr'
import './formats/CodeBlock'
import './formats/Blockquote'
import './formats/Table'

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
        styleRegister(Quill, STYLE_LIST)

        const bindings = getKeyboardBindings()

        const quill = new Quill('#editor', {
            modules: { toolbar: '#toolbar', keyboard: { bindings: bindings } },
            theme: 'snow'
        })

        this.setState({
            quill
        })
    }

    render() {
        const { quill } = this.state
        return (
            <div className={styles['react-quill-editor']}>
                <div id="toolbar" className={styles['toolbar']}>
                    <ToolBars quill={quill} />
                </div>

                <div id="editor" className={styles['editor-content']}></div>
            </div>
        )
    }
}

export default ReactQuillEditor
