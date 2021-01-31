import Quill from 'quill'
import React from 'react'
import ReactDOM from 'react-dom'
import RqlAudio from '@components/EditorComs/RqlAudio'

const Embed = Quill.import('blots/block/embed')

class AudioEmbed extends Embed {
    static blotName = 'rql-audio'
    static tagName = 'rql-audio'

    static create(value: any) {
        const node = super.create(value)
        node.setAttribute('contenteditable', 'false')
        node.setAttribute('style', 'display: block;user-select: none; margin:10px auto;')
        node.setAttribute('data-filename', value.filename)
        node.setAttribute('data-duration', value.duration)
        node.setAttribute('data-url', value.url)

        ReactDOM.render(<RqlAudio {...value} />, node)

        return node
    }
}

Quill.register({ 'formats/rql-audio': AudioEmbed }, true)

export default AudioEmbed
