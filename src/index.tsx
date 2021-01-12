import React from 'react'
import Quill from 'quill'

import ToolBars from '@components/ToolBars'

import { styleRegister } from '@utils/quill'

import styles from './index.less'

import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.core.css'

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
        const toolbarOptions = [
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }] // 上标/下标
        ]

        const styleList = [
            {
                moduleName: 'indent',
                styleName: 'text-indent',
                scope: 'BLOCK',
                whitelist: ['2em']
            },
            {
                moduleName: 'lineHeight',
                styleName: 'line-height',
                scope: 'BLOCK',
                whitelist: ['normal', '1.5em', '1.75em', '2em', '3em', '4em', '5em']
            },
            {
                moduleName: 'marginTop',
                styleName: 'margin-top',
                scope: 'BLOCK',
                whitelist: ['5px', '10px', '15px', '20px', '25px']
            },
            {
                moduleName: 'marginBottom',
                styleName: 'margin-bottom',
                scope: 'BLOCK',
                whitelist: ['5px', '10px', '15px', '20px', '25px']
            },
            {
                moduleName: 'marginLeft',
                styleName: 'margin-left',
                scope: 'BLOCK',
                whitelist: ['0px', '8px', '16px', '32px', '48px']
            },
            {
                moduleName: 'marginRight',
                styleName: 'margin-right',
                scope: 'BLOCK',
                whitelist: ['0px', '8px', '16px', '32px', '48px']
            },
            {
                moduleName: 'listStyleType',
                styleName: 'list-style-type',
                scope: 'BLOCK',
                whitelist: [
                    'circle',
                    'disc',
                    'square',
                    'decimal',
                    'lower-alpha',
                    'lower-roman',
                    'upper-alpha',
                    'upper-roman'
                ]
            },
            {
                moduleName: 'letterSpacing',
                styleName: 'letter-spacing',
                scope: 'INLINE',
                whitelist: ['0px', '0.5px', '1px', '2px']
            },
            {
                moduleName: 'size',
                styleName: 'font-size',
                scope: 'INLINE',
                whitelist: new Array(42)
                    .join('0')
                    .split('')
                    .map((item, index) => `${10 + index}px`)
            },
            {
                moduleName: 'align',
                styleName: 'text-align',
                scope: 'BLOCK',
                whitelist: ['left', 'right', 'center', 'justify']
            }
        ]

        styleRegister(Quill, styleList)

        const Inline = Quill.import('blots/inline')

        class TagBlot extends Inline {
            static blotName = 'tag'
            static className = 'aur-tag'
            static tagName = 'span'

            static formats(): boolean {
                return true
            }
        }

        Quill.register(TagBlot)

        const quill = new Quill('#editor', {
            modules: { toolbar: '#toolbar' },
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
