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
                        value={
                            '<video src="https://video2-cloud.itouchtv.cn/video/2020/12/24/c20ca9309d72656b1608796578648667__hd.mp4" poster="https://img2-cloud.itouchtv.cn/news/e1fcb5925356f06d1e8b3092e757903f.png"></video><div>1111</div>'
                        }
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
                            'link',
                            'more'
                        ]}
                        placeholder="Compose an epic..."
                    />
                </div>
            </div>
        )
    }
}

export default App
