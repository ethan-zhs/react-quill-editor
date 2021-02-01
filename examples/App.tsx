import React from 'react'
import ReactQuillEditor from '../src/index'

import styles from './index.less'

class App extends React.Component {
    render() {
        return (
            <div className={styles['react-quill-editor']}>
                <div className={styles['react-quill-header']}>React Quill Editor</div>
                <div id="outer-toolbar" className={styles['react-quill-toolbar']}></div>
                <div className={styles['editor-content']}>
                    <ReactQuillEditor
                        value={''}
                        toolbarId="outer-toolbar"
                        toolbars={[
                            'undo',
                            'redo',
                            'clean',
                            'brush',
                            'fontsize',
                            'bold',
                            'italic',
                            'underline',
                            'strike',
                            'header',
                            'color',
                            'background',
                            'align',
                            'indent',
                            'indentbothend',
                            'frontdistance',
                            'enddistance',
                            'lineheight',
                            'letterspacing',
                            'sequence',
                            'table',
                            'blockquote',
                            'line',
                            'codeblock',
                            'emotion',
                            'audio',
                            'video',
                            'image',
                            'vote',
                            'link'
                        ]}
                        placeholder="Compose an epic..."
                    />
                </div>
            </div>
        )
    }
}

export default App
