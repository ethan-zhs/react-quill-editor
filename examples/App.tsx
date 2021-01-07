import React from 'react'
import ReactQuillEditor from '../src/index'

import styles from './index.less'

class App extends React.Component {
    render() {
        return (
            <div className={styles['react-quill-editor']}>
                <ReactQuillEditor />
            </div>
        )
    }
}

export default App
