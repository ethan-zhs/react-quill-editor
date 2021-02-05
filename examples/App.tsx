import React from 'react'
import ReactQuillEditor from '../src/index'

import styles from './index.less'

class App extends React.Component<any, any> {
    editor: any

    constructor(props: any) {
        super(props)

        this.state = {
            content: '',
            contentLength: 0
        }
    }

    componentDidMount() {
        this.setState({ content: this.editor.getContents() })
    }

    render() {
        const { content, contentLength } = this.state

        return (
            <div className={styles['react-quill-editor']}>
                <div className={styles['react-quill-header']}>React Quill Editor</div>
                <div id="outer-toolbar" className={styles['react-quill-toolbar']}></div>
                <div className={styles['editor-container']}>
                    <div className={styles['editor-content-preview']}>
                        <div className={styles['editor-content']} dangerouslySetInnerHTML={{ __html: content }}></div>
                        <div className={styles['editor-data']}>
                            <span>内容字数: {contentLength}</span>
                        </div>
                    </div>
                    <div className={styles['editor-wrapper']}>
                        <ReactQuillEditor
                            onChange={this.handleEditorChange}
                            getEditor={(editor: any) => {
                                this.editor = editor
                            }}
                            value={''}
                            toolbarId="outer-toolbar"
                            toolbars={[
                                ['undo', 'redo'],
                                ['clean', 'brush'],
                                ['fontsize', 'bold', 'italic', 'underline', 'strike', 'header', 'color', 'background'],
                                [
                                    'align',
                                    'indent',
                                    'indentbothend',
                                    'frontdistance',
                                    'enddistance',
                                    'lineheight',
                                    'letterspacing',
                                    'sequence'
                                ],
                                ['table', 'blockquote', 'line', 'codeblock', 'emotion'],
                                ['audio', 'video', 'image', 'vote', 'link']
                            ]}
                            placeholder="Compose an epic..."
                        />
                    </div>
                </div>
            </div>
        )
    }

    handleEditorChange = () => {
        this.setState({
            content: this.editor.getContents(),
            contentLength: this.editor.getLength()
        })
    }
}

export default App
