import React from 'react'
import ReactQuillEditor from '../src/index'

import styles from './index.less'

class App extends React.Component {
    render() {
        return (
            <div className={styles['react-quill-editor']}>
                <div className={styles['react-quill-header']}>React Quill Editor</div>
                <div id="outer-toolbar"></div>
                <div className={styles['editor-content']}>
                    <ReactQuillEditor toolbarId="outer-toolbar" />
                </div>
            </div>
        )
    }
}

export default App
