import React from 'react'
import classNames from 'classnames'

import moduleImproveHoc from './hoc/moduleImproveHoc'
import editorInitHoc from './hoc/editorInitHoc'

import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'

import styles from './index.less'

@moduleImproveHoc
@editorInitHoc
class ReactQuillEditor extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
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
                {!toolbarId && <div id="rql-toolbar" className={styles['rql-toolbar']}></div>}

                <div id="rql-content" className={styles['rql-content']}></div>
            </div>
        )
    }
}

export default ReactQuillEditor
