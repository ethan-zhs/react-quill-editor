import Quill from 'quill'
import React from 'react'
import RqlAudio from '@components/EditorComs/RqlAudio'

import ReactDOM from 'react-dom'

const Embed = Quill.import('blots/block/embed')

class AudioEmbed extends Embed {
    static blotName = 'rql-audio'
    static tagName = 'rql-audio'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute('contenteditable', 'false')
        node.setAttribute(
            'style',
            'display: block;user-select: none; height: 150px; width:400px;margin:10px auto;border: 1px solid #ddd;'
        )

        ReactDOM.render(<RqlAudio />, node)

        return node
    }
}

Quill.register(AudioEmbed)

export default AudioEmbed
